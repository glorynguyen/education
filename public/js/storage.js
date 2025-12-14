// ===========================
// DATA MANAGEMENT
// ===========================

/**
 * Gather all progress data from the UI
 * @returns {Object} Progress data containing topics, projects, and notes
 */
function gatherData() {
    const topics = [];
    document.querySelectorAll('.topic-item').forEach(item => {
        topics.push(item.classList.contains('completed'));
    });

    const projects = [];
    document.querySelectorAll('.project-card').forEach(card => {
        projects.push(card.classList.contains('completed'));
    });

    const notes = document.getElementById('notes').value;
    
    return { topics, projects, notes };
}

/**
 * Apply saved data to the UI
 * @param {Object} data - The saved progress data
 */
function applyData(data) {
    if (!data) return;

    // Restore topic checkboxes
    document.querySelectorAll('.topic-item').forEach((item, index) => {
        if (data.topics && data.topics[index]) {
            item.classList.add('completed');
        } else {
            item.classList.remove('completed');
        }
    });

    // Restore project cards
    document.querySelectorAll('.project-card').forEach((card, index) => {
        const status = card.querySelector('.project-status');
        if (data.projects && data.projects[index]) {
            card.classList.add('completed');
            status.textContent = 'Hoàn thành';
        } else {
            card.classList.remove('completed');
            status.textContent = 'Đang làm';
        }
    });

    // Restore notes
    if (data.notes !== undefined) {
        document.getElementById('notes').value = data.notes;
    }

    updateStats();
}

// ===========================
// SAVE/LOAD FUNCTIONS
// ===========================

/**
 * Save progress to both LocalStorage and Firebase
 * @param {Boolean} isAuto - Whether this is an auto-save
 */
async function saveAllProgress(isAuto = false) {
    try {
        const data = gatherData();
        data.lastSaved = new Date().toISOString();

        // 1. Save to LocalStorage
        localStorage.setItem('webDevProgress', JSON.stringify(data));

        // 2. Save to Firebase Realtime Database (if logged in)
        if (currentUser) {
            const cloudData = { 
                ...data, 
                userId: currentUser.uid,
                userEmail: currentUser.email,
                serverTimestamp: firebase.database.ServerValue.TIMESTAMP
            };
            
            await db.ref('userProgress/' + currentUser.uid).set(cloudData);
            if (!isAuto) console.log('✅ Đã lưu lên Realtime Database');
        }

        if (!isAuto) {
            alert(currentUser 
                ? '✅ Đã lưu thành công (Local + Cloud)!' 
                : '✅ Đã lưu thành công (Chỉ Local).\n💡 Đăng nhập để lưu trực tuyến.');
        } else {
            console.log('💾 Auto-saved');
        }
    } catch (error) {
        console.error('❌ Save error:', error);
        if (!isAuto) alert('Lỗi khi lưu: ' + error.message);
    }
}

/**
 * Manual save triggered by button
 */
function manualSave() {
    saveAllProgress(false);
}

/**
 * Load progress from LocalStorage and Firebase
 */
async function loadAllProgress() {
    // 1. Load from LocalStorage first
    const localSaved = localStorage.getItem('webDevProgress');
    if (localSaved) {
        applyData(JSON.parse(localSaved));
        console.log('📂 Loaded from LocalStorage');
    }

    // 2. Load from Firebase (if logged in)
    if (currentUser) {
        try {
            const snapshot = await db.ref('userProgress/' + currentUser.uid).once('value');
            
            if (snapshot.exists()) {
                const cloudData = snapshot.val();
                applyData(cloudData);
                localStorage.setItem('webDevProgress', JSON.stringify(cloudData));
                console.log('☁️ Loaded from Realtime Database');
            }
        } catch (error) {
            console.error('❌ Cloud load error:', error);
        }
    }
}

/**
 * Reset all progress
 */
function resetProgress() {
    if (confirm('Bạn có chắc muốn reset tất cả tiến độ?')) {
        localStorage.removeItem('webDevProgress');
        const emptyData = { topics: [], projects: [], notes: "" };
        applyData(emptyData);
        saveAllProgress(false); 
    }
}

/**
 * Export progress data as JSON file
 */
function exportData() {
    const data = localStorage.getItem('webDevProgress');
    if (!data) return alert('Chưa có dữ liệu!');
    
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'web-dev-progress.json';
    a.click();
    
    alert('✅ Đã xuất dữ liệu thành công!');
}

// Auto-save every 30 seconds
setInterval(() => saveAllProgress(true), 30000);