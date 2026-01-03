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
    const notesElement = document.getElementById('notes');
    if (notesElement && data && data.notes !== undefined) {
        notesElement.value = data.notes;
    }

    updateStats();
}

// ===========================
// POINTS & LEVEL SYSTEM
// ===========================

// Level configuration
const LEVELS = [
    { level: 1, minXP: 0, title: 'Beginner', emoji: '🌱' },
    { level: 2, minXP: 100, title: 'Learner', emoji: '📚' },
    { level: 3, minXP: 300, title: 'Developer', emoji: '💻' },
    { level: 4, minXP: 600, title: 'Pro Developer', emoji: '🚀' },
    { level: 5, minXP: 1000, title: 'Expert', emoji: '⭐' },
    { level: 6, minXP: 1500, title: 'Master', emoji: '👑' },
    { level: 7, minXP: 2500, title: 'Legend', emoji: '🏆' }
];

// Points configuration
const POINTS = {
    CORRECT_ANSWER: 10,
    WRONG_ANSWER: -5,
    PERFECT_QUIZ: 50,
    COMPLETE_LESSON: 20,
    STREAK_BONUS: 10
};

/**
 * Get points data from storage
 */
function getPointsData() {
    const saved = localStorage.getItem('webDevPoints');
    if (saved) {
        const data = JSON.parse(saved);
        // Ensure answeredQuestions exists for backwards compatibility
        if (!data.answeredQuestions) data.answeredQuestions = {};
        return data;
    }
    return {
        totalPoints: 0,
        level: 1,
        levelTitle: 'Beginner',
        levelEmoji: '🌱',
        history: [],
        answeredQuestions: {} // Track: { "day5_q1": true, "day5_q2": true }
    };
}

/**
 * Check if a question was already answered correctly
 * @param {string} lessonId - e.g., "day5"
 * @param {string} questionId - e.g., "q1"
 */
function isQuestionAnswered(lessonId, questionId) {
    const data = getPointsData();
    const key = `${lessonId}_${questionId}`;
    return data.answeredQuestions[key] === true;
}

/**
 * Mark a question as answered correctly
 * @param {string} lessonId 
 * @param {string} questionId 
 */
async function markQuestionAnswered(lessonId, questionId) {
    const data = getPointsData();
    const key = `${lessonId}_${questionId}`;
    data.answeredQuestions[key] = true;
    await savePointsData(data);
}

/**
 * Check if a lesson quiz was completed with perfect score
 * @param {string} lessonId
 */
function isQuizCompleted(lessonId) {
    const data = getPointsData();
    const key = `${lessonId}_completed`;
    return data.answeredQuestions[key] === true;
}

/**
 * Mark a lesson quiz as completed with perfect score
 * @param {string} lessonId
 */
async function markQuizCompleted(lessonId) {
    const data = getPointsData();
    const key = `${lessonId}_completed`;
    data.answeredQuestions[key] = true;
    await savePointsData(data);
}

/**
 * Check if a lesson was completed
 * @param {string} lessonId
 */
function isLessonCompleted(lessonId) {
    const data = getPointsData();
    const key = `${lessonId}_lesson_completed`;
    return data.answeredQuestions[key] === true;
}

/**
 * Mark a lesson as completed
 * @param {string} lessonId
 */
async function markLessonCompleted(lessonId) {
    const data = getPointsData();
    const key = `${lessonId}_lesson_completed`;
    data.answeredQuestions[key] = true;
    await savePointsData(data);
}

/**
 * Calculate level from total points
 */
function calculateLevel(points) {
    let currentLevel = LEVELS[0];
    for (const level of LEVELS) {
        if (points >= level.minXP) {
            currentLevel = level;
        } else {
            break;
        }
    }
    return currentLevel;
}

/**
 * Get XP needed for next level
 */
function getXPToNextLevel(points) {
    const currentLevel = calculateLevel(points);
    const nextLevelIndex = LEVELS.findIndex(l => l.level === currentLevel.level) + 1;

    if (nextLevelIndex >= LEVELS.length) {
        return { needed: 0, total: 0, isMax: true };
    }

    const nextLevel = LEVELS[nextLevelIndex];
    return {
        needed: nextLevel.minXP - points,
        total: nextLevel.minXP - currentLevel.minXP,
        progress: points - currentLevel.minXP,
        isMax: false
    };
}

/**
 * Save points data to storage and Firebase
 */
async function savePointsData(pointsData) {
    localStorage.setItem('webDevPoints', JSON.stringify(pointsData));

    if (currentUser) {
        try {
            await db.ref('userPoints/' + currentUser.uid).set({
                ...pointsData,
                history: pointsData.history.slice(-50), // Keep last 50 entries
                userId: currentUser.uid,
                serverTimestamp: firebase.database.ServerValue.TIMESTAMP
            });
            console.log('☁️ Points saved to cloud');
        } catch (error) {
            console.error('❌ Points cloud save error:', error);
        }
    }
}

/**
 * Add points and check for level up
 */
async function addPoints(amount, reason = 'activity') {
    const pointsData = getPointsData();
    const oldLevel = pointsData.level;

    pointsData.totalPoints += amount;
    if (pointsData.totalPoints < 0) pointsData.totalPoints = 0;

    // Recalculate level
    const newLevelInfo = calculateLevel(pointsData.totalPoints);
    pointsData.level = newLevelInfo.level;
    pointsData.levelTitle = newLevelInfo.title;
    pointsData.levelEmoji = newLevelInfo.emoji;

    // Add to history
    pointsData.history.push({
        timestamp: new Date().toISOString(),
        action: reason,
        points: amount,
        total: pointsData.totalPoints
    });

    await savePointsData(pointsData);
    updatePointsUI(pointsData);

    // Check for level up
    if (newLevelInfo.level > oldLevel) {
        showLevelUpNotification(newLevelInfo);
    }

    console.log(`${amount > 0 ? '➕' : '➖'} ${Math.abs(amount)} points (${reason}). Total: ${pointsData.totalPoints}`);
    return pointsData;
}

/**
 * Subtract points (convenience function)
 */
async function subtractPoints(amount, reason = 'penalty') {
    return addPoints(-Math.abs(amount), reason);
}

/**
 * Show level up notification
 */
function showLevelUpNotification(levelInfo) {
    const message = `🎉 LEVEL UP!\n\nBạn đã đạt Level ${levelInfo.level}!\n${levelInfo.emoji} ${levelInfo.title}`;
    setTimeout(() => alert(message), 500);
}

/**
 * Update points UI elements
 */
function updatePointsUI(pointsData) {
    if (!pointsData) pointsData = getPointsData();

    const totalPointsEl = document.getElementById('totalPoints');
    const levelEl = document.getElementById('userLevel');
    const levelTitleEl = document.getElementById('levelTitle');
    const levelProgressEl = document.getElementById('levelProgress');
    const xpToNextEl = document.getElementById('xpToNext');

    if (totalPointsEl) {
        totalPointsEl.textContent = pointsData.totalPoints;
    }
    if (levelEl) {
        levelEl.textContent = `${pointsData.levelEmoji} Lv.${pointsData.level}`;
    }
    if (levelTitleEl) {
        levelTitleEl.textContent = pointsData.levelTitle;
    }

    // Update progress bar
    const xpInfo = getXPToNextLevel(pointsData.totalPoints);
    if (levelProgressEl) {
        if (xpInfo.isMax) {
            levelProgressEl.style.width = '100%';
        } else {
            const percent = (xpInfo.progress / xpInfo.total) * 100;
            levelProgressEl.style.width = percent + '%';
        }
    }
    if (xpToNextEl) {
        if (xpInfo.isMax) {
            xpToNextEl.textContent = 'MAX LEVEL!';
        } else {
            xpToNextEl.textContent = `${xpInfo.needed} XP to next level`;
        }
    }
}

/**
 * Load points from Firebase or LocalStorage
 */
async function loadPoints() {
    let pointsData = getPointsData();

    if (currentUser) {
        try {
            const snapshot = await db.ref('userPoints/' + currentUser.uid).once('value');
            if (snapshot.exists()) {
                const cloudData = snapshot.val();
                pointsData = {
                    totalPoints: cloudData.totalPoints || 0,
                    level: cloudData.level || 1,
                    levelTitle: cloudData.levelTitle || 'Beginner',
                    levelEmoji: cloudData.levelEmoji || '🌱',
                    history: cloudData.history || [],
                    answeredQuestions: cloudData.answeredQuestions || {} // Include anti-cheat tracking
                };
                localStorage.setItem('webDevPoints', JSON.stringify(pointsData));
                console.log('☁️ Points loaded from cloud, answeredQuestions:', Object.keys(pointsData.answeredQuestions).length);
            }
        } catch (error) {
            console.error('❌ Points cloud load error:', error);
        }
    }

    updatePointsUI(pointsData);
    return pointsData;
}

/**
 * Reset points (with confirmation)
 */
async function resetPoints() {
    if (!confirm('Bạn có chắc muốn reset điểm và level về 0?')) {
        return;
    }

    const emptyPoints = {
        totalPoints: 0,
        level: 1,
        levelTitle: 'Beginner',
        levelEmoji: '🌱',
        history: []
    };

    await savePointsData(emptyPoints);
    updatePointsUI(emptyPoints);
    alert('✅ Đã reset điểm thành công!');
}

// ===========================
// STREAK MANAGEMENT
// ===========================

/**
 * Get today's date in local timezone as YYYY-MM-DD
 */
function getTodayLocal() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

/**
 * Get yesterday's date from a date string
 */
function getYesterday(dateStr) {
    const date = new Date(dateStr + 'T12:00:00');
    date.setDate(date.getDate() - 1);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

/**
 * Get streak data from storage
 */
function getStreakData() {
    const saved = localStorage.getItem('webDevStreak');
    if (saved) {
        return JSON.parse(saved);
    }
    return {
        currentStreak: 0,
        longestStreak: 0,
        lastActiveDate: null,
        streakHistory: {}
    };
}

/**
 * Save streak data to storage and Firebase (if logged in)
 */
async function saveStreakData(streakData) {
    // Save to LocalStorage
    localStorage.setItem('webDevStreak', JSON.stringify(streakData));

    // Save to Firebase if logged in
    if (currentUser) {
        try {
            await db.ref('userStreak/' + currentUser.uid).set({
                ...streakData,
                userId: currentUser.uid,
                serverTimestamp: firebase.database.ServerValue.TIMESTAMP
            });
            console.log('☁️ Streak saved to cloud');
        } catch (error) {
            console.error('❌ Streak cloud save error:', error);
        }
    }
}

/**
 * Reset streak data (with confirmation)
 */
async function resetStreak() {
    if (!confirm('Bạn có chắc muốn reset streak về 0? Hành động này không thể hoàn tác!')) {
        return;
    }

    const emptyStreak = {
        currentStreak: 0,
        longestStreak: 0,
        lastActiveDate: null,
        streakHistory: {}
    };

    await saveStreakData(emptyStreak);
    updateStreakUI(emptyStreak);

    alert('✅ Đã reset streak thành công!');
    console.log('🔄 Streak reset');
}

/**
 * Update streak when user completes an activity
 */
async function updateStreak() {
    const today = getTodayLocal();
    let streakData = getStreakData();

    // Already checked in today
    if (streakData.lastActiveDate === today) {
        console.log('📅 Already checked in today');
        updateStreakUI(streakData);
        return streakData;
    }

    const yesterday = getYesterday(today);

    if (streakData.lastActiveDate === yesterday) {
        // Consecutive day - increment streak
        streakData.currentStreak += 1;
        console.log('🔥 Streak continued! Now:', streakData.currentStreak);
    } else if (streakData.lastActiveDate === null) {
        // First time
        streakData.currentStreak = 1;
        console.log('🎉 First streak day!');
    } else {
        // Streak broken - reset to 1
        console.log('💔 Streak broken! Was:', streakData.currentStreak, 'Last active:', streakData.lastActiveDate);
        streakData.currentStreak = 1;
    }

    // Update longest streak if needed
    if (streakData.currentStreak > streakData.longestStreak) {
        streakData.longestStreak = streakData.currentStreak;
        console.log('🏆 New record:', streakData.longestStreak);
    }

    // Mark today as active
    streakData.lastActiveDate = today;
    streakData.streakHistory[today] = true;

    // Save locally
    saveStreakData(streakData);

    // Save to Firebase if logged in
    if (currentUser) {
        try {
            await db.ref('userStreak/' + currentUser.uid).set({
                ...streakData,
                userId: currentUser.uid,
                serverTimestamp: firebase.database.ServerValue.TIMESTAMP
            });
            console.log('☁️ Streak saved to cloud');
        } catch (error) {
            console.error('❌ Streak cloud save error:', error);
        }
    }

    updateStreakUI(streakData);
    return streakData;
}

/**
 * Load streak from Firebase (if logged in) or LocalStorage
 */
async function loadStreak() {
    let streakData = getStreakData();

    // Try to load from Firebase
    if (currentUser) {
        try {
            const snapshot = await db.ref('userStreak/' + currentUser.uid).once('value');
            if (snapshot.exists()) {
                const cloudData = snapshot.val();
                // Merge with local data (cloud takes priority)
                streakData = {
                    currentStreak: cloudData.currentStreak || 0,
                    longestStreak: cloudData.longestStreak || 0,
                    lastActiveDate: cloudData.lastActiveDate || null,
                    streakHistory: cloudData.streakHistory || {}
                };
                saveStreakData(streakData);
                console.log('☁️ Streak loaded from cloud');
            }
        } catch (error) {
            console.error('❌ Streak cloud load error:', error);
        }
    }

    // Check if streak should be reset (missed yesterday)
    const today = getTodayLocal();
    const yesterday = getYesterday(today);

    if (streakData.lastActiveDate &&
        streakData.lastActiveDate !== today &&
        streakData.lastActiveDate !== yesterday) {
        // Streak is broken but not yet reset
        console.log('⚠️ Streak will reset on next activity');
    }

    updateStreakUI(streakData);
    return streakData;
}

/**
 * Update streak UI elements
 */
function updateStreakUI(streakData) {
    const currentStreakEl = document.getElementById('currentStreak');
    const longestStreakEl = document.getElementById('longestStreak');
    const totalDaysEl = document.getElementById('totalDaysLearned');

    if (currentStreakEl) {
        currentStreakEl.textContent = `${streakData.currentStreak} ngày`;
    }
    if (longestStreakEl) {
        longestStreakEl.textContent = streakData.longestStreak;
    }
    if (totalDaysEl) {
        const totalDays = Object.keys(streakData.streakHistory || {}).length;
        totalDaysEl.textContent = totalDays;
    }

    renderStreakCalendar(streakData);
}

/**
 * Render the 7-day streak calendar
 */
function renderStreakCalendar(streakData) {
    const container = document.getElementById('streakCalendar');
    if (!container) return;

    container.innerHTML = '';

    const dayNames = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
    const today = new Date();

    // Show 7 days: 3 days ago to 3 days future
    for (let i = -3; i <= 3; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() + i);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const dateStr = `${year}-${month}-${day}`;

        const dayEl = document.createElement('div');
        dayEl.className = 'streak-day';
        dayEl.textContent = dayNames[date.getDay()];

        if (i === 0) {
            dayEl.classList.add('today');
        }

        if (i > 0) {
            dayEl.classList.add('future');
        } else if (streakData.streakHistory && streakData.streakHistory[dateStr]) {
            dayEl.classList.add('active');
        }

        container.appendChild(dayEl);
    }
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

        // 3. Update streak on save (user is active)
        await updateStreak();

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

    // 3. Load streak data
    await loadStreak();

    // 4. Load points data
    await loadPoints();
}

/**
 * Reset all progress
 */
function resetProgress() {
    if (confirm('Bạn có chắc muốn reset tất cả tiến độ?')) {
        localStorage.removeItem('webDevProgress');
        localStorage.removeItem('webDevStreak');
        const emptyData = { topics: [], projects: [], notes: "" };
        applyData(emptyData);

        // Reset streak UI
        updateStreakUI({
            currentStreak: 0,
            longestStreak: 0,
            lastActiveDate: null,
            streakHistory: {}
        });

        saveAllProgress(false);
    }
}

/**
 * Export progress data as JSON file
 */
function exportData() {
    const progressData = localStorage.getItem('webDevProgress');
    const streakData = localStorage.getItem('webDevStreak');

    if (!progressData && !streakData) return alert('Chưa có dữ liệu!');

    const exportObj = {
        progress: progressData ? JSON.parse(progressData) : null,
        streak: streakData ? JSON.parse(streakData) : null,
        exportedAt: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(exportObj, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'web-dev-progress.json';
    a.click();

    alert('✅ Đã xuất dữ liệu thành công!');
}

// Auto-save every 30 seconds
setInterval(() => saveAllProgress(true), 30000);