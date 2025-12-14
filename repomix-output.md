This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
public/
  css/
    style.css
  js/
    auth.js
    config.js
    main.js
    storage.js
  index.html
.firebaserc
.gitignore
.repomixignore
firebase.json
repomix.config.json
```

# Files

## File: .repomixignore
```
# Add patterns to ignore here, one per line
# Example:
# *.log
# tmp/
.github
```

## File: repomix.config.json
```json
{
  "$schema": "https://repomix.com/schemas/latest/schema.json",
  "input": {
    "maxFileSize": 52428800
  },
  "output": {
    "filePath": "repomix-output.md",
    "style": "markdown",
    "parsableStyle": false,
    "fileSummary": true,
    "directoryStructure": true,
    "files": true,
    "removeComments": false,
    "removeEmptyLines": false,
    "compress": false,
    "topFilesLength": 5,
    "showLineNumbers": false,
    "truncateBase64": false,
    "copyToClipboard": false,
    "includeFullDirectoryStructure": false,
    "tokenCountTree": false,
    "git": {
      "sortByChanges": true,
      "sortByChangesMaxCommits": 100,
      "includeDiffs": false,
      "includeLogs": false,
      "includeLogsCount": 50
    }
  },
  "include": [],
  "ignore": {
    "useGitignore": true,
    "useDotIgnore": true,
    "useDefaultPatterns": true,
    "customPatterns": []
  },
  "security": {
    "enableSecurityCheck": true
  },
  "tokenCount": {
    "encoding": "o200k_base"
  }
}
```

## File: public/css/style.css
```css
/* ===========================
   RESET & BASE STYLES
   =========================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 20px;
}

/* ===========================
   CONTAINER & HEADER
   =========================== */
.container {
    max-width: 1200px;
    margin: 0 auto;
    background: white;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    overflow: hidden;
}

.header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 40px;
    text-align: center;
}

.header h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
}

.header p {
    font-size: 1.2em;
    opacity: 0.9;
}

/* ===========================
   PROGRESS BAR
   =========================== */
.progress-bar {
    background: rgba(255, 255, 255, 0.2);
    height: 30px;
    border-radius: 15px;
    margin-top: 20px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #4ade80, #22c55e);
    border-radius: 15px;
    transition: width 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
}

/* ===========================
   CONTENT AREA
   =========================== */
.content {
    padding: 40px;
}

/* ===========================
   AUTH SECTION
   =========================== */
.auth-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 10px;
}

.user-info {
    font-weight: bold;
    color: #4b5563;
}

#loginPrompt {
    display: inline-block;
    margin-left: 10px;
    font-size: 0.9em;
}

/* ===========================
   MONTH SECTIONS
   =========================== */
.month-section {
    margin-bottom: 40px;
    border: 2px solid #e5e7eb;
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.month-section:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.month-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.month-title {
    font-size: 1.8em;
    font-weight: bold;
}

.month-progress {
    background: rgba(255, 255, 255, 0.3);
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 0.9em;
}

.month-content {
    padding: 30px;
    background: #f9fafb;
}

/* ===========================
   SECTIONS & TOPICS
   =========================== */
.section {
    margin-bottom: 30px;
}

.section-title {
    font-size: 1.3em;
    color: #667eea;
    margin-bottom: 15px;
    font-weight: bold;
}

.topic-list {
    list-style: none;
}

.topic-item {
    background: white;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 10px;
    border-left: 4px solid #667eea;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.topic-item:hover {
    transform: translateX(5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.topic-item.completed {
    border-left-color: #22c55e;
    background: #f0fdf4;
}

/* ===========================
   CHECKBOX
   =========================== */
.checkbox {
    width: 24px;
    height: 24px;
    border: 2px solid #667eea;
    border-radius: 6px;
    margin-right: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.topic-item.completed .checkbox {
    background: #22c55e;
    border-color: #22c55e;
}

.checkbox::after {
    content: '✓';
    color: white;
    font-weight: bold;
    display: none;
}

.topic-item.completed .checkbox::after {
    display: block;
}

.topic-text {
    flex: 1;
    font-size: 1.05em;
}

/* ===========================
   PROJECT CARDS
   =========================== */
.project-card {
    background: white;
    padding: 20px;
    margin-bottom: 15px;
    border-radius: 10px;
    border: 2px solid #e5e7eb;
    transition: all 0.3s ease;
    cursor: pointer;
}

.project-card:hover {
    border-color: #667eea;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.project-card.completed {
    border-color: #22c55e;
    background: #f0fdf4;
}

.project-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.project-title {
    font-weight: bold;
    font-size: 1.1em;
    flex: 1;
}

.project-status {
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 0.9em;
    background: #fef3c7;
    color: #92400e;
}

.project-card.completed .project-status {
    background: #dcfce7;
    color: #166534;
}

.project-card.completed .checkbox {
    background: #22c55e;
    border-color: #22c55e;
}

.project-card .checkbox::after {
    content: '✓';
    color: white;
    font-weight: bold;
    display: none;
}

.project-card.completed .checkbox::after {
    display: block;
}

/* ===========================
   STATISTICS
   =========================== */
.stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 30px;
    padding: 30px;
    background: #f9fafb;
    border-radius: 15px;
}

.stat-card {
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.stat-number {
    font-size: 2.5em;
    font-weight: bold;
    color: #667eea;
}

.stat-label {
    color: #6b7280;
    margin-top: 5px;
}

/* ===========================
   BUTTONS
   =========================== */
.btn {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 25px;
    cursor: pointer;
    font-size: 1em;
    font-weight: bold;
    margin: 10px 5px;
    transition: transform 0.3s ease;
}

.btn:hover {
    transform: scale(1.05);
}

/* ===========================
   NOTES SECTION
   =========================== */
.notes-section {
    margin-top: 30px;
    padding: 20px;
    background: #fffbeb;
    border-radius: 10px;
    border-left: 4px solid #f59e0b;
}

.notes-title {
    font-weight: bold;
    color: #92400e;
    margin-bottom: 10px;
}

.notes-content {
    width: 100%;
    min-height: 100px;
    padding: 10px;
    border: 1px solid #fbbf24;
    border-radius: 5px;
    font-family: inherit;
    resize: vertical;
}

/* ===========================
   ACTIONS
   =========================== */
.actions {
    text-align: center;
    margin-top: 30px;
}
```

## File: public/js/auth.js
```javascript
// ===========================
// AUTHENTICATION FUNCTIONS
// ===========================

/**
 * Update UI based on authentication state
 * @param {Object} user - Firebase user object
 */
function updateAuthUI(user) {
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const userInfo = document.getElementById('userInfo');
    const userEmail = document.getElementById('userEmail');
    const loginPrompt = document.getElementById('loginPrompt');

    if (user) {
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
        userInfo.style.display = 'inline-block';
        loginPrompt.style.display = 'none';
        userEmail.textContent = user.email;
    } else {
        loginBtn.style.display = 'inline-block';
        logoutBtn.style.display = 'none';
        userInfo.style.display = 'none';
        loginPrompt.style.display = 'inline-block';
    }
}

/**
 * Sign in with Google popup
 */
function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then((result) => {
            alert('✅ Đăng nhập thành công!');
            console.log('User signed in:', result.user.email);
        })
        .catch((error) => {
            alert('❌ Lỗi đăng nhập: ' + error.message);
            console.error('Sign in error:', error);
        });
}

/**
 * Sign out current user
 */
function signOut() {
    auth.signOut()
        .then(() => {
            alert('✅ Đã đăng xuất');
            console.log('User signed out');
        })
        .catch((error) => {
            alert('❌ Lỗi đăng xuất: ' + error.message);
            console.error('Sign out error:', error);
        });
}

// ===========================
// AUTH STATE OBSERVER
// ===========================

/**
 * Listen for authentication state changes
 */
auth.onAuthStateChanged((user) => {
    currentUser = user;
    updateAuthUI(user);
    
    if (user) {
        console.log('👤 User logged in:', user.email);
        loadAllProgress();
    } else {
        console.log('👤 No user logged in');
    }
});
```

## File: public/js/config.js
```javascript
// ===========================
// FIREBASE CONFIGURATION
// ===========================

const firebaseConfig = {
    apiKey: "AIzaSyCrayfdLPobe8xiTU6siDYbI1T6bv9K9jo",
    authDomain: "baucua-70f9b.firebaseapp.com",
    databaseURL: "https://baucua-70f9b-default-rtdb.firebaseio.com",
    projectId: "baucua-70f9b",
    storageBucket: "baucua-70f9b.firebasestorage.app",
    messagingSenderId: "807035202882",
    appId: "1:807035202882:web:a3afb540b888cf8c636cdb",
    measurementId: "G-0LW1XK5PWR"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

// Global user state
let currentUser = null;

console.log('🔥 Firebase initialized successfully');
```

## File: public/js/main.js
```javascript
// ===========================
// UI INTERACTION FUNCTIONS
// ===========================

/**
 * Toggle topic completion status
 * @param {HTMLElement} element - The topic item element
 */
function toggleTopic(element) {
    element.classList.toggle('completed');
    updateStats();
    saveAllProgress(true);
}

/**
 * Toggle project completion status
 * @param {HTMLElement} element - The project card element
 */
function toggleProject(element) {
    element.classList.toggle('completed');
    const status = element.querySelector('.project-status');
    status.textContent = element.classList.contains('completed') 
        ? 'Hoàn thành' 
        : 'Đang làm';
    updateStats();
    saveAllProgress(true);
}

/**
 * Update all statistics displays
 */
function updateStats() {
    const allItems = document.querySelectorAll('.topic-item, .project-card');
    const completedItems = document.querySelectorAll('.topic-item.completed, .project-card.completed');

    const total = allItems.length;
    const completed = completedItems.length;
    const remaining = total - completed;
    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

    // Update overall stats
    document.getElementById('totalCompleted').textContent = completed;
    document.getElementById('totalRemaining').textContent = remaining;
    document.getElementById('completionRate').textContent = percentage + '%';
    document.getElementById('overallProgress').textContent = percentage + '%';
    document.getElementById('overallProgress').style.width = percentage + '%';

    // Update monthly progress
    for (let month = 1; month <= 3; month++) {
        const section = document.querySelector(`[data-month="${month}"]`);
        if (section) {
            const monthItems = section.querySelectorAll('.topic-item, .project-card');
            const monthCompleted = section.querySelectorAll('.topic-item.completed, .project-card.completed');
            document.getElementById(`month${month}Progress`).textContent = 
                `${monthCompleted.length}/${monthItems.length}`;
        }
    }
}

/**
 * Calculate and update days remaining in roadmap
 */
function updateDaysLeft() {
    const startDateStr = localStorage.getItem('webDevStartDate');
    let startDate;
    
    if (!startDateStr) {
        startDate = new Date();
        localStorage.setItem('webDevStartDate', startDate.toISOString());
    } else {
        startDate = new Date(startDateStr);
    }
    
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 90);
    
    const now = new Date();
    const diffTime = endDate - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    document.getElementById('daysLeft').textContent = Math.max(0, diffDays);
}

// ===========================
// INITIALIZATION
// ===========================

/**
 * Initialize the application
 */
function init() {
    console.log('🚀 Initializing Web Dev Roadmap...');
    
    updateDaysLeft();
    loadAllProgress();
    
    console.log('✅ Initialization complete');
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
```

## File: public/js/storage.js
```javascript
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
```

## File: .firebaserc
```
{
  "projects": {
    "default": "baucua-70f9b"
  }
}
```

## File: .gitignore
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
firebase-debug.log*
firebase-debug.*.log*

# Firebase cache
.firebase/

# Firebase config

# Uncomment this if you'd like others to create their own Firebase project.
# For a team working on the same Firebase project(s), it is recommended to leave
# it commented so all members can deploy to the same project(s) in .firebaserc.
# .firebaserc

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage

# nyc test coverage
.nyc_output

# Grunt intermediate storage (http://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (http://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env

# dataconnect generated files
.dataconnect
```

## File: firebase.json
```json
{
  "hosting": {
    "public": "public",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

## File: public/index.html
```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lộ Trình Học Web Development</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 Lộ Trình Học Web Development</h1>
            <p>Hành trình 2-3 tháng để trở thành Web Developer</p>
            <div class="progress-bar">
                <div class="progress-fill" id="overallProgress">0%</div>
            </div>
        </div>

        <div class="content">
            <!-- Auth Section -->
            <div class="auth-section">
                <div class="user-info">
                    <span id="userInfo" style="display: none;">
                        👤 <span class="user-email" id="userEmail"></span>
                    </span>
                    <span id="loginPrompt">
                        🔔 Đăng nhập để lưu tiến độ lên mây!
                    </span>
                </div>
                <div class="auth-buttons">
                    <button class="btn" id="loginBtn" onclick="signInWithGoogle()">
                        🔐 Đăng nhập Google
                    </button>
                    <button class="btn" id="logoutBtn" onclick="signOut()" style="display: none;">
                        🚪 Đăng xuất
                    </button>
                </div>
            </div>

            <!-- Month 1 -->
            <div class="month-section" data-month="1">
                <div class="month-header">
                    <div class="month-title">📚 Tháng 1 - Nền Tảng Web</div>
                    <div class="month-progress" id="month1Progress">0/7</div>
                </div>
                <div class="month-content">
                    <div class="section">
                        <div class="section-title">Kiến thức cần học:</div>
                        <ul class="topic-list">
                            <li class="topic-item" onclick="toggleTopic(this)">
                                <div class="checkbox"></div>
                                <div class="topic-text">HTML5 - Cấu trúc và semantic tags</div>
                            </li>
                            <li class="topic-item" onclick="toggleTopic(this)">
                                <div class="checkbox"></div>
                                <div class="topic-text">CSS3 - Flexbox layout</div>
                            </li>
                            <li class="topic-item" onclick="toggleTopic(this)">
                                <div class="checkbox"></div>
                                <div class="topic-text">CSS3 - Grid layout</div>
                            </li>
                            <li class="topic-item" onclick="toggleTopic(this)">
                                <div class="checkbox"></div>
                                <div class="topic-text">JavaScript cơ bản - Biến và kiểu dữ liệu</div>
                            </li>
                            <li class="topic-item" onclick="toggleTopic(this)">
                                <div class="checkbox"></div>
                                <div class="topic-text">JavaScript cơ bản - Functions</div>
                            </li>
                            <li class="topic-item" onclick="toggleTopic(this)">
                                <div class="checkbox"></div>
                                <div class="topic-text">JavaScript cơ bản - Array và Object</div>
                            </li>
                            <li class="topic-item" onclick="toggleTopic(this)">
                                <div class="checkbox"></div>
                                <div class="topic-text">JavaScript cơ bản - DOM manipulation</div>
                            </li>
                        </ul>
                    </div>
                    <div class="section">
                        <div class="section-title">Dự án thực hành:</div>
                        <div class="project-card" onclick="toggleProject(this)">
                            <div class="project-header">
                                <div class="checkbox"></div>
                                <div class="project-title">Landing Page Công Ty</div>
                                <div class="project-status">Đang làm</div>
                            </div>
                            <div style="color: #6b7280; margin-top: 10px;">
                                Tạo trang giới thiệu công ty với header, about, services, contact form
                            </div>
                        </div>
                        <div class="project-card" onclick="toggleProject(this)">
                            <div class="project-header">
                                <div class="checkbox"></div>
                                <div class="project-title">Website Bán Hàng Đơn Giản</div>
                                <div class="project-status">Đang làm</div>
                            </div>
                            <div style="color: #6b7280; margin-top: 10px;">
                                Trang sản phẩm với filter, shopping cart cơ bản
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Month 2 -->
            <div class="month-section" data-month="2">
                <div class="month-header">
                    <div class="month-title">⚡ Tháng 2 - Nâng Cao</div>
                    <div class="month-progress" id="month2Progress">0/8</div>
                </div>
                <div class="month-content">
                    <div class="section">
                        <div class="section-title">Kiến thức cần học:</div>
                        <ul class="topic-list">
                            <li class="topic-item" onclick="toggleTopic(this)">
                                <div class="checkbox"></div>
                                <div class="topic-text">JavaScript nâng cao - Promises</div>
                            </li>
                            <li class="topic-item" onclick="toggleTopic(this)">
                                <div class="checkbox"></div>
                                <div class="topic-text">JavaScript nâng cao - Async/Await</div>
                            </li>
                            <li class="topic-item" onclick="toggleTopic(this)">
                                <div class="checkbox"></div>
                                <div class="topic-text">React - Components và Props</div>
                            </li>
                            <li class="topic-item" onclick="toggleTopic(this)">
                                <div class="checkbox"></div>
                                <div class="topic-text">React - State và Hooks (useState, useEffect)</div>
                            </li>
                            <li class="topic-item" onclick="toggleTopic(this)">
                                <div class="checkbox"></div>
                                <div class="topic-text">React - Routing với React Router</div>
                            </li>
                            <li class="topic-item" onclick="toggleTopic(this)">
                                <div class="checkbox"></div>
                                <div class="topic-text">API - RESTful API concepts</div>
                            </li>
                            <li class="topic-item" onclick="toggleTopic(this)">
                                <div class="checkbox"></div>
                                <div class="topic-text">API - Fetch và Axios để gọi API</div>
                            </li>
                            <li class="topic-item" onclick="toggleTopic(this)">
                                <div class="checkbox"></div>
                                <div class="topic-text">Next.js cơ bản (hoặc tiếp tục với React)</div>
                            </li>
                        </ul>
                    </div>
                    <div class="section">
                        <div class="section-title">Dự án thực hành:</div>
                        <div class="project-card" onclick="toggleProject(this)">
                            <div class="project-header">
                                <div class="checkbox"></div>
                                <div class="project-title">Website Blog Cá Nhân</div>
                                <div class="project-status">Đang làm</div>
                            </div>
                            <div style="color: #6b7280; margin-top: 10px;">
                                Blog với routing, list posts, single post view, markdown support
                            </div>
                        </div>
                        <div class="project-card" onclick="toggleProject(this)">
                            <div class="project-header">
                                <div class="checkbox"></div>
                                <div class="project-title">Movie App với TMDB API</div>
                                <div class="project-status">Đang làm</div>
                            </div>
                            <div style="color: #6b7280; margin-top: 10px;">
                                Ứng dụng xem phim với search, filter, detail page, favorites
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Month 3 -->
            <div class="month-section" data-month="3">
                <div class="month-header">
                    <div class="month-title">🎯 Tháng 3 - Hoàn Thiện Portfolio</div>
                    <div class="month-progress" id="month3Progress">0/6</div>
                </div>
                <div class="month-content">
                    <div class="section">
                        <div class="section-title">Công việc cần làm:</div>
                        <ul class="topic-list">
                            <li class="topic-item" onclick="toggleTopic(this)">
                                <div class="checkbox"></div>
                                <div class="topic-text">Tạo tài khoản GitHub và học Git cơ bản</div>
                            </li>
                            <li class="topic-item" onclick="toggleTopic(this)">
                                <div class="checkbox"></div>
                                <div class="topic-text">Push tất cả dự án lên GitHub với README tốt</div>
                            </li>
                            <li class="topic-item" onclick="toggleTopic(this)">
                                <div class="checkbox"></div>
                                <div class="topic-text">Deploy dự án lên Vercel/Netlify</div>
                            </li>
                            <li class="topic-item" onclick="toggleTopic(this)">
                                <div class="checkbox"></div>
                                <div class="topic-text">Tạo Portfolio Website giới thiệu bản thân</div>
                            </li>
                            <li class="topic-item" onclick="toggleTopic(this)">
                                <div class="checkbox"></div>
                                <div class="topic-text">Hoàn thiện CV và LinkedIn profile</div>
                            </li>
                            <li class="topic-item" onclick="toggleTopic(this)">
                                <div class="checkbox"></div>
                                <div class="topic-text">Review code, refactor và optimize dự án</div>
                            </li>
                        </ul>
                    </div>
                    <div class="section">
                        <div class="section-title">Checklist trước khi apply:</div>
                        <ul class="topic-list">
                            <li class="topic-item" onclick="toggleTopic(this)">
                                <div class="checkbox"></div>
                                <div class="topic-text">✓ Có ít nhất 4-5 dự án hoàn chỉnh</div>
                            </li>
                            <li class="topic-item" onclick="toggleTopic(this)">
                                <div class="checkbox"></div>
                                <div class="topic-text">✓ Tất cả dự án đã deploy và chạy tốt</div>
                            </li>
                            <li class="topic-item" onclick="toggleTopic(this)">
                                <div class="checkbox"></div>
                                <div class="topic-text">✓ GitHub profile trông professional</div>
                            </li>
                            <li class="topic-item" onclick="toggleTopic(this)">
                                <div class="checkbox"></div>
                                <div class="topic-text">✓ Portfolio website sẵn sàng</div>
                            </li>
                            <li class="topic-item" onclick="toggleTopic(this)">
                                <div class="checkbox"></div>
                                <div class="topic-text">✓ CV được update với skills mới</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Statistics -->
            <div class="stats">
                <div class="stat-card">
                    <div class="stat-number" id="totalCompleted">0</div>
                    <div class="stat-label">Hoàn thành</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number" id="totalRemaining">26</div>
                    <div class="stat-label">Còn lại</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number" id="daysLeft">90</div>
                    <div class="stat-label">Ngày còn lại</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number" id="completionRate">0%</div>
                    <div class="stat-label">Tiến độ</div>
                </div>
            </div>

            <!-- Notes Section -->
            <div class="notes-section">
                <div class="notes-title">📝 Ghi chú học tập:</div>
                <textarea class="notes-content" id="notes" placeholder="Ghi chú những điều quan trọng, khó khăn gặp phải, hoặc ideas mới..."></textarea>
            </div>

            <!-- Actions -->
            <div class="actions">
                <button class="btn" onclick="manualSave()">💾 Lưu tiến độ</button>
                <button class="btn" onclick="resetProgress()">🔄 Reset tất cả</button>
                <button class="btn" onclick="exportData()">📤 Xuất dữ liệu</button>
            </div>
        </div>
    </div>

    <!-- Firebase SDK -->
    <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-database-compat.js"></script>

    <!-- Custom JS Files -->
    <script src="js/config.js"></script>
    <script src="js/storage.js"></script>
    <script src="js/auth.js"></script>
    <script src="js/main.js"></script>
</body>
</html>
```
