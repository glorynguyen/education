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
    lesson-style.css
    style.css
  js/
    auth.js
    config.js
    main.js
    storage.js
  lessons/
    day1.html
    day2.html
    day3.html
    day4.html
  index.html
.firebaserc
.gitignore
.repomixignore
firebase.json
repomix.config.json
```

# Files

## File: public/css/lesson-style.css
```css
/* ===========================
   LESSON PAGE - SHARED STYLES
   Dùng chung cho tất cả các bài giảng
   =========================== */

/* Code Block */
.code-block {
    background: #1f2937;
    color: #e5e7eb;
    padding: 15px;
    border-radius: 8px;
    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
    margin: 10px 0 20px 0;
    overflow-x: auto;
    border-left: 4px solid #667eea;
    white-space: pre-wrap;
}

.code-block pre {
    margin: 0;
    white-space: pre;
}

.code-block code {
    font-family: inherit;
}

/* Concept Cards */
.concept-card {
    background: #f3f4f6;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
}

.highlight {
    color: #7c3aed;
    font-weight: bold;
}

/* Info & Warning Boxes */
.info-box {
    background: #eff6ff;
    border-left: 4px solid #3b82f6;
    padding: 15px;
    margin: 15px 0;
    border-radius: 6px;
}

.warning-box {
    background: #fef3c7;
    border-left: 4px solid #f59e0b;
    padding: 15px;
    margin: 15px 0;
    border-radius: 6px;
}

/* Quiz Container */
.quiz-container {
    background: #fff;
    border: 2px solid #e5e7eb;
    border-radius: 15px;
    padding: 25px;
    margin-top: 30px;
}

.question-item {
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
}

.question-item:last-child {
    border-bottom: none;
}

.question-text {
    font-weight: bold;
    margin-bottom: 10px;
    color: #374151;
}

.options-list {
    list-style: none;
    padding: 0;
}

.option-label {
    display: block;
    padding: 10px 15px;
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    margin-bottom: 8px;
    cursor: pointer;
    transition: all 0.2s;
}

.option-label:hover {
    background: #edf2f7;
    border-color: #cbd5e1;
}

.option-label input {
    margin-right: 10px;
    cursor: pointer;
}

.option-label.correct {
    background: #dcfce7;
    border-color: #22c55e;
    color: #166534;
}

.option-label.wrong {
    background: #fee2e2;
    border-color: #ef4444;
    color: #991b1b;
}

#quiz-feedback {
    margin-top: 15px;
    font-weight: bold;
    text-align: center;
    padding: 10px;
    border-radius: 8px;
    display: none;
}

/* Complete Button - Initially Disabled */
#completeBtn {
    opacity: 0.5;
    pointer-events: none;
    transition: all 0.3s ease;
}

#completeBtn.enabled {
    opacity: 1;
    pointer-events: auto;
}

/* Comparison Table */
.comparison-table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.comparison-table th {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 15px;
    text-align: left;
    font-weight: 600;
}

.comparison-table td {
    padding: 15px;
    border-bottom: 1px solid #e5e7eb;
}

.comparison-table tr:last-child td {
    border-bottom: none;
}

.comparison-table tr:hover {
    background: #f9fafb;
}

/* Demo Wrapper for Interactive Components */
.demo-wrapper {
    display: flex;
    gap: 30px;
    margin: 30px 0;
    flex-wrap: wrap;
}

.controls {
    flex: 1;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.control-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.control-group label {
    font-weight: 600;
    font-size: 0.9rem;
    color: #4b5563;
}

.control-group input,
.control-group select {
    padding: 10px 12px;
    font-size: 1rem;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    background-color: #f9fafb;
    cursor: pointer;
    transition: all 0.2s;
    outline: none;
}

.control-group input:hover,
.control-group select:hover {
    border-color: #9ca3af;
}

.control-group input:focus,
.control-group select:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
}

.preview-area {
    flex: 1.5;
    min-width: 300px;
}

.preview-label {
    font-size: 0.85rem;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 700;
    margin-bottom: 10px;
    display: block;
}

/* Box Model Demo (Day 3) */
.box-demo-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;
}

.box-margin {
    background-color: #fca5a5;
    padding: 20px;
    border: 2px dashed #ef4444;
    position: relative;
    transition: all 0.3s;
}

.box-border {
    background-color: #fcd34d;
    padding: 5px;
    border: 1px solid #d97706;
}

.box-padding {
    background-color: #86efac;
    padding: 20px;
    border: 1px dashed #22c55e;
}

.box-content {
    background-color: #93c5fd;
    padding: 20px;
    color: #1e3a8a;
    font-weight: bold;
    text-align: center;
    width: 150px;
}

.label {
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 5px;
    display: block;
    text-align: center;
}

/* Flexbox Demo (Day 2) */
#flexbox-preview {
    width: 100%;
    height: 300px;
    border: 2px dashed #cbd5e1;
    border-radius: 12px;
    background-color: #f8fafc;
    display: flex;
    transition: all 0.3s ease;
}

.flex-item {
    padding: 20px;
    color: white;
    font-weight: bold;
    font-size: 1.1rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 80px;
    min-height: 50px;
}

.item-1 {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.item-2 {
    background: linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%);
}

.item-3 {
    background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
}

/* Grid Demo (Day 4) */
#grid-preview {
    width: 100%;
    min-height: 350px;
    border: 2px dashed #cbd5e1;
    border-radius: 12px;
    background-color: #f8fafc;
    display: grid;
    gap: 10px;
    padding: 15px;
    transition: all 0.3s ease;
}

.grid-item {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    font-weight: bold;
    font-size: 1.1rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80px;
    transition: all 0.3s ease;
}

.grid-item:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

/* Template Visual Demo (Day 4) */
.template-demo {
    background: #f3f4f6;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;
}

.template-visual {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto 1fr auto;
    gap: 10px;
    min-height: 300px;
    background: white;
    padding: 10px;
    border-radius: 8px;
}

.area-header {
    grid-column: 1 / -1;
    background: #667eea;
    color: white;
    padding: 20px;
    border-radius: 6px;
    text-align: center;
    font-weight: bold;
}

.area-sidebar {
    background: #a78bfa;
    color: white;
    padding: 20px;
    border-radius: 6px;
    font-weight: bold;
}

.area-main {
    grid-column: 2 / -1;
    background: #86efac;
    color: #166534;
    padding: 20px;
    border-radius: 6px;
    font-weight: bold;
}

.area-footer {
    grid-column: 1 / -1;
    background: #fbbf24;
    color: #78350f;
    padding: 20px;
    border-radius: 6px;
    text-align: center;
    font-weight: bold;
}

/* Responsive */
@media (max-width: 768px) {
    .demo-wrapper {
        flex-direction: column;
    }
    
    .controls,
    .preview-area {
        min-width: 100%;
    }
    
    #flexbox-preview,
    #grid-preview {
        height: 250px;
        min-height: 250px;
    }
    
    .template-visual {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto 1fr auto;
    }
    
    .area-main {
        grid-column: 1;
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

## File: public/lessons/day3.html
```html
<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ngày 3: CSS Cơ Bản & Box Model</title>
    <!-- Điều chỉnh đường dẫn CSS tùy thuộc vào nơi bạn lưu file này -->
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/lesson-style.css">
</head>

<body>
    <div class="container">
        <!-- Header giống trang chủ -->
        <div class="header">
            <h1>📅 Tháng 1 - Ngày 3</h1>
            <p>Làm quen với CSS & The Box Model</p>
        </div>

        <div class="content">
            <!-- Navigation -->
            <a href="../index.html" class="btn"
                style="display: inline-block; text-decoration: none; margin-bottom: 20px;">
                ⬅️ Quay lại Lộ trình
            </a>

            <!-- Phần 1: Cú pháp CSS -->
            <div class="section">
                <div class="section-title">1. Cú pháp CSS (Syntax)</div>
                <p>CSS (Cascading Style Sheets) dùng để trang trí HTML. Cấu trúc cơ bản bao gồm
                    <strong>Selector</strong> (bộ chọn) và <strong>Declaration block</strong> (khối khai báo).</p>

                <div class="code-block">
                    /* Selector { Property: Value; } */

                    h1 {
                    color: blue; /* Đổi màu chữ */
                    font-size: 24px; /* Cỡ chữ */
                    text-align: center; /* Căn giữa */
                    }
                </div>
            </div>

            <!-- Phần 2: Selectors -->
            <div class="section">
                <div class="section-title">2. Các loại Selectors phổ biến</div>
                <div class="concept-card">
                    <ul class="topic-list">
                        <li class="topic-item">
                            <div class="topic-text">
                                <span class="highlight">Element Selector:</span> Chọn tất cả thẻ HTML (VD:
                                <code>p {}</code>, <code>div {}</code>).
                            </div>
                        </li>
                        <li class="topic-item">
                            <div class="topic-text">
                                <span class="highlight">Class Selector (.):</span> Dùng cho nhóm phần tử (VD:
                                <code>.button {}</code>). Được dùng nhiều nhất.
                            </div>
                        </li>
                        <li class="topic-item">
                            <div class="topic-text">
                                <span class="highlight">ID Selector (#):</span> Dùng cho 1 phần tử duy nhất (VD:
                                <code>#header {}</code>). Độ ưu tiên cao nhất.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Phần 3: Box Model (Quan trọng nhất) -->
            <div class="section">
                <div class="section-title">3. The Box Model (Mô hình hộp)</div>
                <p>Mọi phần tử HTML đều là một cái hộp chữ nhật. Box Model gồm 4 thành phần từ trong ra ngoài:</p>

                <!-- Visual Demo -->
                <div class="box-demo-container">
                    <div class="box-margin">
                        <span class="label">Margin (Lề ngoài)</span>
                        <div class="box-border">
                            <span class="label">Border (Viền)</span>
                            <div class="box-padding">
                                <span class="label">Padding (Đệm)</span>
                                <div class="box-content">
                                    CONTENT<br>(Nội dung)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="notes-section">
                    <div class="notes-title">⚠️ Ghi nhớ quan trọng:</div>
                    <ul style="margin-left: 20px;">
                        <li><strong>Content:</strong> Nội dung thực (text, ảnh).</li>
                        <li><strong>Padding:</strong> Khoảng cách từ Content đến Border (Làm mập cái hộp lên).</li>
                        <li><strong>Border:</strong> Đường viền bao quanh.</li>
                        <li><strong>Margin:</strong> Khoảng cách giữa cái hộp này với các hộp khác (Đẩy người khác ra
                            xa).</li>
                    </ul>
                </div>
            </div>

            <!-- Bài tập thực hành -->
            <div class="section">
                <div class="section-title">🎯 Bài tập về nhà</div>
                <div class="project-card">
                    <div class="project-header">
                        <div class="project-title">Tạo "Profile Card" Đơn Giản</div>
                    </div>
                    <p style="margin-top: 10px; line-height: 1.6;">
                        Tạo một file <code>index.html</code> và sử dụng CSS để tạo một thẻ giới thiệu bản thân:
                    </p>
                    <ul style="margin: 10px 0 10px 20px; color: #4b5563;">
                        <li>Tạo 1 thẻ <code>div</code> bao ngoài (container) có border và background màu nhẹ.</li>
                        <li>Bên trong có 1 thẻ <code>h2</code> (Tên bạn) và <code>p</code> (Mô tả).</li>
                        <li>Sử dụng <strong>Padding</strong> để chữ không dính sát vào viền.</li>
                        <li>Sử dụng <strong>Margin</strong> để căn giữa card ra giữa màn hình.</li>
                        <li>Dùng <strong>Border-radius</strong> để bo tròn góc.</li>
                    </ul>
                </div>
            </div>

            <!-- QUIZ SECTION -->
            <div class="section">
                <div class="section-title">🧠 Kiểm tra kiến thức</div>
                <div class="quiz-container">
                    <form id="quizForm">
                        <!-- Câu 1 -->
                        <div class="question-item">
                            <div class="question-text">Câu 1: Để chọn một phần tử có id="myBox" trong CSS, ta dùng cú
                                pháp nào?</div>
                            <div class="options-list">
                                <label class="option-label">
                                    <input type="radio" name="q1" value="wrong"> .myBox
                                </label>
                                <label class="option-label">
                                    <input type="radio" name="q1" value="correct"> #myBox
                                </label>
                                <label class="option-label">
                                    <input type="radio" name="q1" value="wrong"> myBox
                                </label>
                            </div>
                        </div>

                        <!-- Câu 2 -->
                        <div class="question-item">
                            <div class="question-text">Câu 2: Trong Box Model, khoảng cách giữa Content và Border gọi là
                                gì?</div>
                            <div class="options-list">
                                <label class="option-label">
                                    <input type="radio" name="q2" value="wrong"> Margin
                                </label>
                                <label class="option-label">
                                    <input type="radio" name="q2" value="wrong"> Outline
                                </label>
                                <label class="option-label">
                                    <input type="radio" name="q2" value="correct"> Padding
                                </label>
                            </div>
                        </div>

                        <!-- Câu 3 -->
                        <div class="question-item">
                            <div class="question-text">Câu 3: Thuộc tính nào dùng để đổi màu chữ?</div>
                            <div class="options-list">
                                <label class="option-label">
                                    <input type="radio" name="q3" value="correct"> color
                                </label>
                                <label class="option-label">
                                    <input type="radio" name="q3" value="wrong"> font-color
                                </label>
                                <label class="option-label">
                                    <input type="radio" name="q3" value="wrong"> text-color
                                </label>
                            </div>
                        </div>

                        <button type="button" class="btn" onclick="checkQuiz()">Kiểm tra đáp án</button>
                    </form>

                    <div id="quiz-feedback"></div>
                </div>
            </div>

            <!-- Footer Action -->
            <div class="actions">
                <button id="completeBtn" class="btn" onclick="completeLesson()">✅ Hoàn thành bài học</button>
                <p style="font-size: 0.9em; color: #666; margin-top: 5px;">(Hãy làm đúng Quiz để mở khóa nút này)</p>
            </div>
        </div>
    </div>

    <script>
        function checkQuiz() {
            const form = document.getElementById('quizForm');
            const feedback = document.getElementById('quiz-feedback');
            const completeBtn = document.getElementById('completeBtn');
            let score = 0;
            let total = 3;

            // Reset styles
            document.querySelectorAll('.option-label').forEach(label => {
                label.classList.remove('correct', 'wrong');
            });

            // Check answers
            const answers = {
                q1: 'correct',
                q2: 'correct',
                q3: 'correct'
            };

            let allAnswered = true;

            for (let q in answers) {
                const selected = form.querySelector(`input[name="${q}"]:checked`);
                if (!selected) {
                    allAnswered = false;
                    continue;
                }

                const parent = selected.parentElement;
                if (selected.value === answers[q]) {
                    parent.classList.add('correct');
                    score++;
                } else {
                    parent.classList.add('wrong');
                }
            }

            if (!allAnswered) {
                feedback.style.display = 'block';
                feedback.style.background = '#fef3c7';
                feedback.style.color = '#92400e';
                feedback.textContent = '⚠️ Vui lòng trả lời hết các câu hỏi!';
                return;
            }

            feedback.style.display = 'block';
            if (score === total) {
                feedback.style.background = '#dcfce7';
                feedback.style.color = '#166534';
                feedback.innerHTML = '🎉 Xuất sắc! Bạn đã trả lời đúng tất cả.';

                // Unlock complete button
                completeBtn.style.opacity = '1';
                completeBtn.style.pointerEvents = 'auto';
                completeBtn.textContent = '✅ Đã hiểu & Hoàn thành!';
            } else {
                feedback.style.background = '#fee2e2';
                feedback.style.color = '#991b1b';
                feedback.textContent = `❌ Bạn đúng ${score}/${total} câu. Hãy thử lại nhé!`;

                completeBtn.style.opacity = '0.5';
                completeBtn.style.pointerEvents = 'none';
            }
        }

        function completeLesson() {
            // Logic lưu trạng thái
            // Có thể mở rộng để lưu vào localStorage key riêng cho bài này
            alert("Chúc mừng! Bạn đã hoàn thành bài học Ngày 3.");

            // Tự động đánh dấu checkbox ở trang chủ (giả lập)
            // Trong thực tế, bạn cần lưu vào localStorage ở đây rồi trang index.html đọc ra

            window.location.href = "../index.html";
        }
    </script>
</body>

</html>
```

## File: public/lessons/day4.html
```html
<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ngày 4: CSS Grid Layout</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/lesson-style.css">
</head>

<body>
    <div class="container">
        <div class="header">
            <h1>📅 Tháng 1 - Ngày 4</h1>
            <p>Làm chủ CSS Grid Layout - Công cụ layout mạnh mẽ nhất</p>
        </div>

        <div class="content">
            <a href="../index.html" class="btn"
                style="display: inline-block; text-decoration: none; margin-bottom: 20px;">
                ⬅️ Quay lại Lộ trình
            </a>

            <!-- Section 1: Grid là gì? -->
            <div class="section">
                <div class="section-title">1. CSS Grid là gì?</div>
                <p>CSS Grid là hệ thống layout 2 chiều (cột và hàng) mạnh mẽ nhất trong CSS. Khác với Flexbox (1 chiều),
                    Grid cho phép bạn kiểm soát cả chiều ngang và dọc cùng lúc.</p>

                <div class="info-box">
                    <strong>💡 Khi nào dùng Grid?</strong><br>
                    • Khi cần layout phức tạp với nhiều cột và hàng<br>
                    • Tạo gallery ảnh, dashboard, magazine layout<br>
                    • Khi cần căn chỉnh chính xác vị trí các phần tử
                </div>

                <!-- <div class="code-block">/* Kích hoạt Grid Layout */
                    .container {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr; /* 3 cột bằng nhau */
                    grid-template-rows: 100px 200px; /* 2 hàng */
                    gap: 20px; /* Khoảng cách giữa các ô */
                    }</div> -->
                <div class="code-block">
                    <pre>
                        <code>
/* Kích hoạt Grid Layout */
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* 3 cột bằng nhau */
    grid-template-rows: 100px 200px;    /* 2 hàng */
    gap: 20px;                          /* Khoảng cách giữa các ô */
}
                        </code>
                    </pre>
                </div>
            </div>

            <!-- Section 2: Grid vs Flexbox -->
            <div class="section">
                <div class="section-title">2. Grid vs Flexbox - Khi nào dùng cái nào?</div>

                <table class="comparison-table">
                    <thead>
                        <tr>
                            <th>Tiêu chí</th>
                            <th>Flexbox</th>
                            <th>Grid</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Hướng Layout</strong></td>
                            <td>1 chiều (dòng HOẶC cột)</td>
                            <td>2 chiều (dòng VÀ cột)</td>
                        </tr>
                        <tr>
                            <td><strong>Dùng cho</strong></td>
                            <td>Navigation bar, button groups</td>
                            <td>Page layouts, galleries, grids</td>
                        </tr>
                        <tr>
                            <td><strong>Độ phức tạp</strong></td>
                            <td>Đơn giản hơn</td>
                            <td>Mạnh mẽ hơn</td>
                        </tr>
                        <tr>
                            <td><strong>Ví dụ thực tế</strong></td>
                            <td>Menu ngang, card items</td>
                            <td>Dashboard, magazine layout</td>
                        </tr>
                    </tbody>
                </table>

                <div class="warning-box">
                    <strong>⚠️ Lưu ý:</strong> Bạn có thể kết hợp cả Grid và Flexbox trong cùng một dự án! Ví dụ: Dùng
                    Grid cho layout tổng thể, Flexbox cho các component nhỏ bên trong.
                </div>
            </div>

            <!-- Section 3: Grid Template Areas -->
            <div class="section">
                <div class="section-title">3. Grid Template Areas - Layout trực quan</div>
                <p>Một trong những tính năng tuyệt vời nhất của Grid là <span
                        class="highlight">grid-template-areas</span> - cho phép bạn vẽ layout bằng text!</p>

                <div class="code-block">
                    <pre><code>/* Layout website cơ bản */
.container {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
    gap: 10px;
    min-height: 100vh;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
</code></pre>
                </div>

                <div class="template-demo">
                    <p style="margin-bottom: 10px; font-weight: 600;">Kết quả hiển thị:</p>
                    <div class="template-visual">
                        <div class="area-header">HEADER</div>
                        <div class="area-sidebar">SIDEBAR</div>
                        <div class="area-main">MAIN CONTENT</div>
                        <div class="area-footer">FOOTER</div>
                    </div>
                </div>
            </div>

            <!-- Section 4: Interactive Demo -->
            <div class="section">
                <div class="section-title">4. Thử nghiệm với Grid</div>
                <p>Điều chỉnh các thuộc tính để xem Grid hoạt động như thế nào:</p>

                <div class="demo-wrapper">
                    <div class="controls">
                        <div class="control-group">
                            <label for="grid-cols">Số cột (Columns):</label>
                            <input type="number" id="grid-cols" value="3" min="1" max="6" onchange="updateGrid()">
                        </div>

                        <div class="control-group">
                            <label for="grid-rows">Số hàng (Rows):</label>
                            <input type="number" id="grid-rows" value="2" min="1" max="4" onchange="updateGrid()">
                        </div>

                        <div class="control-group">
                            <label for="grid-gap">Gap (Khoảng cách):</label>
                            <input type="range" id="grid-gap" value="10" min="0" max="40" onchange="updateGrid()">
                            <span id="gap-value">10px</span>
                        </div>

                        <div class="control-group">
                            <label for="grid-align">Align Items:</label>
                            <select id="grid-align" onchange="updateGrid()">
                                <option value="stretch">stretch</option>
                                <option value="start">start</option>
                                <option value="center">center</option>
                                <option value="end">end</option>
                            </select>
                        </div>

                        <div class="control-group">
                            <label for="grid-justify">Justify Items:</label>
                            <select id="grid-justify" onchange="updateGrid()">
                                <option value="stretch">stretch</option>
                                <option value="start">start</option>
                                <option value="center">center</option>
                                <option value="end">end</option>
                            </select>
                        </div>
                    </div>

                    <div class="preview-area">
                        <span class="preview-label">Kết quả (Preview)</span>
                        <div id="grid-preview">
                            <div class="grid-item">1</div>
                            <div class="grid-item">2</div>
                            <div class="grid-item">3</div>
                            <div class="grid-item">4</div>
                            <div class="grid-item">5</div>
                            <div class="grid-item">6</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Section 5: Common Properties -->
            <div class="section">
                <div class="section-title">5. Các thuộc tính Grid quan trọng</div>
                <div class="concept-card">
                    <ul class="topic-list">
                        <li class="topic-item">
                            <div class="topic-text">
                                <span class="highlight">grid-template-columns</span> - Định nghĩa số cột và kích thước
                                (VD: <code>200px 1fr 1fr</code>)
                            </div>
                        </li>
                        <li class="topic-item">
                            <div class="topic-text">
                                <span class="highlight">grid-template-rows</span> - Định nghĩa số hàng và chiều cao
                            </div>
                        </li>
                        <li class="topic-item">
                            <div class="topic-text">
                                <span class="highlight">gap / grid-gap</span> - Khoảng cách giữa các ô (VD:
                                <code>gap: 20px;</code>)
                            </div>
                        </li>
                        <li class="topic-item">
                            <div class="topic-text">
                                <span class="highlight">fr (fraction unit)</span> - Đơn vị linh hoạt (<code>1fr</code> =
                                1 phần không gian còn lại)
                            </div>
                        </li>
                        <li class="topic-item">
                            <div class="topic-text">
                                <span class="highlight">repeat()</span> - Lặp lại giá trị (VD:
                                <code>repeat(4, 1fr)</code> = 4 cột bằng nhau)
                            </div>
                        </li>
                        <li class="topic-item">
                            <div class="topic-text">
                                <span class="highlight">minmax()</span> - Đặt min/max size (VD:
                                <code>minmax(100px, 1fr)</code>)
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="code-block">
                    <pre><code>/* Ví dụ thực tế */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
}

/* Responsive tự động! Khi màn hình nhỏ, số cột sẽ giảm */
</code></pre>
                </div>
            </div>

            <!-- Homework -->
            <div class="section">
                <div class="section-title">🎯 Bài tập về nhà</div>
                <div class="project-card">
                    <div class="project-header">
                        <div class="project-title">Tạo "Photo Gallery" với Grid</div>
                    </div>
                    <p style="margin-top: 10px; line-height: 1.6;">
                        Tạo một gallery ảnh responsive với các yêu cầu:
                    </p>
                    <ul style="margin: 10px 0 10px 20px; color: #4b5563;">
                        <li>Sử dụng <code>display: grid</code></li>
                        <li>Tối thiểu 9 ảnh (có thể dùng placeholder)</li>
                        <li>Dùng <code>repeat(auto-fit, minmax(200px, 1fr))</code> để responsive tự động</li>
                        <li>Thêm <code>gap</code> giữa các ảnh</li>
                        <li>Bonus: Thêm hover effect cho ảnh</li>
                    </ul>
                </div>
            </div>

            <!-- Quiz Section -->
            <div class="section">
                <div class="section-title">🧠 Kiểm tra kiến thức</div>
                <div class="quiz-container">
                    <form id="quizForm">
                        <div class="question-item">
                            <div class="question-text">Câu 1: Sự khác biệt chính giữa Flexbox và Grid là gì?</div>
                            <div class="options-list">
                                <label class="option-label">
                                    <input type="radio" name="q1" value="wrong"> Flexbox nhanh hơn Grid
                                </label>
                                <label class="option-label">
                                    <input type="radio" name="q1" value="correct"> Flexbox là 1 chiều, Grid là 2 chiều
                                </label>
                                <label class="option-label">
                                    <input type="radio" name="q1" value="wrong"> Grid không responsive được
                                </label>
                            </div>
                        </div>

                        <div class="question-item">
                            <div class="question-text">Câu 2: Thuộc tính nào dùng để tạo khoảng cách giữa các ô trong
                                Grid?</div>
                            <div class="options-list">
                                <label class="option-label">
                                    <input type="radio" name="q2" value="wrong"> margin
                                </label>
                                <label class="option-label">
                                    <input type="radio" name="q2" value="correct"> gap
                                </label>
                                <label class="option-label">
                                    <input type="radio" name="q2" value="wrong"> space
                                </label>
                            </div>
                        </div>

                        <div class="question-item">
                            <div class="question-text">Câu 3: <code>grid-template-columns: repeat(3, 1fr)</code> có
                                nghĩa là gì?</div>
                            <div class="options-list">
                                <label class="option-label">
                                    <input type="radio" name="q3" value="wrong"> 3 cột, mỗi cột rộng 1px
                                </label>
                                <label class="option-label">
                                    <input type="radio" name="q3" value="correct"> 3 cột bằng nhau, mỗi cột chiếm 1 phần
                                    không gian
                                </label>
                                <label class="option-label">
                                    <input type="radio" name="q3" value="wrong"> 1 cột lặp lại 3 lần
                                </label>
                            </div>
                        </div>

                        <div class="question-item">
                            <div class="question-text">Câu 4: Khi nào nên dùng Grid thay vì Flexbox?</div>
                            <div class="options-list">
                                <label class="option-label">
                                    <input type="radio" name="q4" value="wrong"> Khi làm navigation bar
                                </label>
                                <label class="option-label">
                                    <input type="radio" name="q4" value="correct"> Khi cần layout phức tạp với nhiều cột
                                    và hàng
                                </label>
                                <label class="option-label">
                                    <input type="radio" name="q4" value="wrong"> Grid luôn tốt hơn Flexbox
                                </label>
                            </div>
                        </div>

                        <button type="button" class="btn" onclick="checkQuiz()">Kiểm tra đáp án</button>
                    </form>

                    <div id="quiz-feedback"></div>
                </div>
            </div>

            <!-- Footer Actions -->
            <div class="actions">
                <button class="btn" onclick="window.location.href='day3.html'">⬅️ Quay lại ngày 3</button>
                <button id="completeBtn" class="btn" onclick="completeLesson()">✅ Hoàn thành bài học</button>
                <p style="font-size: 0.9em; color: #666; margin-top: 5px;">(Hãy làm đúng Quiz để mở khóa nút này)</p>
            </div>
        </div>
    </div>

    <script>
        // Initialize grid demo
        function updateGrid() {
            const cols = document.getElementById('grid-cols').value;
            const rows = document.getElementById('grid-rows').value;
            const gap = document.getElementById('grid-gap').value;
            const align = document.getElementById('grid-align').value;
            const justify = document.getElementById('grid-justify').value;

            const preview = document.getElementById('grid-preview');

            preview.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
            preview.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
            preview.style.gap = `${gap}px`;
            preview.style.alignItems = align;
            preview.style.justifyItems = justify;

            document.getElementById('gap-value').textContent = `${gap}px`;

            // Update number of items
            const totalItems = cols * rows;
            const currentItems = preview.children.length;

            if (totalItems > currentItems) {
                for (let i = currentItems; i < totalItems; i++) {
                    const item = document.createElement('div');
                    item.className = 'grid-item';
                    item.textContent = i + 1;
                    preview.appendChild(item);
                }
            } else if (totalItems < currentItems) {
                while (preview.children.length > totalItems) {
                    preview.removeChild(preview.lastChild);
                }
            }
        }

        // Initialize on load
        updateGrid();

        // Quiz functions
        function checkQuiz() {
            const form = document.getElementById('quizForm');
            const feedback = document.getElementById('quiz-feedback');
            const completeBtn = document.getElementById('completeBtn');
            let score = 0;
            const total = 4;

            document.querySelectorAll('.option-label').forEach(label => {
                label.classList.remove('correct', 'wrong');
            });

            const answers = { q1: 'correct', q2: 'correct', q3: 'correct', q4: 'correct' };
            let allAnswered = true;

            for (let q in answers) {
                const selected = form.querySelector(`input[name="${q}"]:checked`);
                if (!selected) {
                    allAnswered = false;
                    continue;
                }

                const parent = selected.parentElement;
                if (selected.value === answers[q]) {
                    parent.classList.add('correct');
                    score++;
                } else {
                    parent.classList.add('wrong');
                }
            }

            if (!allAnswered) {
                feedback.style.display = 'block';
                feedback.style.background = '#fef3c7';
                feedback.style.color = '#92400e';
                feedback.textContent = '⚠️ Vui lòng trả lời hết các câu hỏi!';
                return;
            }

            feedback.style.display = 'block';
            if (score === total) {
                feedback.style.background = '#dcfce7';
                feedback.style.color = '#166534';
                feedback.innerHTML = '🎉 Xuất sắc! Bạn đã nắm vững CSS Grid!';

                completeBtn.style.opacity = '1';
                completeBtn.style.pointerEvents = 'auto';
                completeBtn.textContent = '✅ Đã hiểu & Hoàn thành!';
            } else {
                feedback.style.background = '#fee2e2';
                feedback.style.color = '#991b1b';
                feedback.textContent = `❌ Bạn đúng ${score}/${total} câu. Hãy đọc lại bài học và thử lại nhé!`;

                completeBtn.style.opacity = '0.5';
                completeBtn.style.pointerEvents = 'none';
            }
        }

        function completeLesson() {
            alert("🎉 Chúc mừng! Bạn đã hoàn thành bài học Ngày 4.\n\nBạn đã học được:\n✅ CSS Grid Layout cơ bản\n✅ Sự khác biệt giữa Grid và Flexbox\n✅ Grid Template Areas\n✅ Các thuộc tính Grid quan trọng");
            window.location.href = "../index.html";
        }
    </script>
</body>

</html>
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

## File: .repomixignore
```
# Add patterns to ignore here, one per line
# Example:
# *.log
# tmp/
.github
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

## File: public/lessons/day1.html
```html
<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ngày 1: HTML Cơ Bản</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/lesson-style.css">
</head>

<body>
    <div class="container">
        <div class="header">
            <h1>📅 Tháng 1 - Ngày 1</h1>
            <p>Học cấu trúc và semantic tags trong HTML5</p>
        </div>

        <div class="content">
            <a href="../index.html" class="btn"
                style="display: inline-block; text-decoration: none; margin-bottom: 20px;">
                ⬅️ Quay lại Lộ trình
            </a>

            <div class="section">
                <div class="section-title">1. Cấu trúc cơ bản của HTML</div>
                <p>HTML (HyperText Markup Language) là ngôn ngữ đánh dấu siêu văn bản.</p>
                <pre class="code-block">&lt;!DOCTYPE html&gt;
&lt;html lang="vi"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Trang web đầu tiên&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;!-- Nội dung trang web --&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
            </div>

            <div class="section">
                <div class="section-title">2. Các semantic tags quan trọng</div>
                <div class="concept-card">
                    <ul class="topic-list">
                        <li class="topic-item">
                            <div class="topic-text">
                                <span class="highlight">&lt;header&gt;</span> - Phần đầu trang
                            </div>
                        </li>
                        <li class="topic-item">
                            <div class="topic-text">
                                <span class="highlight">&lt;nav&gt;</span> - Menu điều hướng
                            </div>
                        </li>
                        <li class="topic-item">
                            <div class="topic-text">
                                <span class="highlight">&lt;main&gt;</span> - Nội dung chính
                            </div>
                        </li>
                        <li class="topic-item">
                            <div class="topic-text">
                                <span class="highlight">&lt;article&gt;</span> - Bài viết
                            </div>
                        </li>
                        <li class="topic-item">
                            <div class="topic-text">
                                <span class="highlight">&lt;footer&gt;</span> - Phần chân trang
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="section">
                <div class="section-title">🎯 Bài tập về nhà</div>
                <div class="project-card">
                    <div class="project-header">
                        <div class="project-title">Tạo trang HTML đơn giản</div>
                    </div>
                    <p style="margin-top: 10px; line-height: 1.6;">
                        Tạo một file <code>index.html</code> với:
                    </p>
                    <ul style="margin: 10px 0 10px 20px; color: #4b5563;">
                        <li>Header với logo và menu</li>
                        <li>Main content với một bài viết</li>
                        <li>Footer với thông tin liên hệ</li>
                    </ul>
                </div>
            </div>

            <div class="actions">
                <button id="completeBtn" class="btn" onclick="completeLesson()">✅ Hoàn thành bài học</button>
            </div>
        </div>
    </div>

    <script>
        function completeLesson() {
            alert("Chúc mừng! Bạn đã hoàn thành bài học Ngày 1.");
            window.location.href = "../index.html";
        }
    </script>
</body>

</html>
```

## File: public/lessons/day2.html
```html
<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ngày 2 - CSS Cơ Bản & Flexbox</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/lesson-style.css">
</head>

<body>
    <div class="container">
        <div class="header">
            <h1>📅 Tháng 1 - Ngày 2</h1>
            <p>Học cách style với CSS và layout với Flexbox</p>
        </div>

        <div class="content">
            <a href="../index.html" class="btn"
                style="display: inline-block; text-decoration: none; margin-bottom: 20px;">
                ⬅️ Quay lại Lộ trình
            </a>

            <div class="section">
                <div class="section-title">1. CSS Cơ Bản</div>
                <p>CSS (Cascading Style Sheets) là ngôn ngữ định dạng trang web.</p>
                <div class="code-block">
                    /* Cách viết CSS */<br>
                    selector {<br>
                    &nbsp;&nbsp;property: value;<br>
                    }
                </div>
                <p>Ví dụ:</p>
                <div class="code-block">
                    .button {<br>
                    &nbsp;&nbsp;background: blue;<br>
                    &nbsp;&nbsp;color: white;<br>
                    &nbsp;&nbsp;padding: 10px 20px;<br>
                    &nbsp;&nbsp;border-radius: 5px;<br>
                    }
                </div>
            </div>

            <div class="section">
                <div class="section-title">2. Flexbox Layout</div>
                <p>Flexbox giúp layout dễ dàng hơn:</p>
                <div class="code-block">
                    .container {<br>
                    &nbsp;&nbsp;display: flex;<br>
                    &nbsp;&nbsp;justify-content: space-between;<br>
                    &nbsp;&nbsp;align-items: center;<br>
                    }
                </div>
                <p>Các thuộc tính quan trọng:</p>
                <div class="concept-card">
                    <ul class="topic-list">
                        <li class="topic-item">
                            <div class="topic-text">
                                <span class="highlight">display: flex</span> - Bật flex mode
                            </div>
                        </li>
                        <li class="topic-item">
                            <div class="topic-text">
                                <span class="highlight">flex-direction</span> - Hướng layout
                            </div>
                        </li>
                        <li class="topic-item">
                            <div class="topic-text">
                                <span class="highlight">justify-content</span> - Căn chỉnh ngang
                            </div>
                        </li>
                        <li class="topic-item">
                            <div class="topic-text">
                                <span class="highlight">align-items</span> - Căn chỉnh dọc
                            </div>
                        </li>
                    </ul>
                </div>
                <p>Thử nghiệm với Flexbox:</p>
                <div class="demo-wrapper">
                    <!-- Cột điều khiển -->
                    <div class="controls">
                        <div class="control-group">
                            <label for="flex-direction">flex-direction:</label>
                            <select id="flex-direction" onchange="updateFlexboxPreview()">
                                <option value="row">row</option>
                                <option value="row-reverse">row-reverse</option>
                                <option value="column" selected>column</option> <!-- Default theo ảnh của bạn -->
                                <option value="column-reverse">column-reverse</option>
                            </select>
                        </div>

                        <div class="control-group">
                            <label for="justify-content">justify-content:</label>
                            <select id="justify-content" onchange="updateFlexboxPreview()">
                                <option value="flex-start" selected>flex-start</option>
                                <option value="center">center</option>
                                <option value="flex-end">flex-end</option>
                                <option value="space-between">space-between</option>
                                <option value="space-around">space-around</option>
                                <option value="space-evenly">space-evenly</option>
                            </select>
                        </div>

                        <div class="control-group">
                            <label for="align-items">align-items:</label>
                            <select id="align-items" onchange="updateFlexboxPreview()">
                                <option value="stretch" selected>stretch</option>
                                <option value="flex-start">flex-start</option>
                                <option value="center">center</option>
                                <option value="flex-end">flex-end</option>
                                <option value="baseline">baseline</option>
                            </select>
                        </div>
                    </div>

                    <!-- Cột hiển thị -->
                    <div class="preview-area">
                        <span class="preview-label">Kết quả (Preview)</span>
                        <!-- Lưu ý: Mình set style mặc định khớp với các option selected ở trên -->
                        <div id="flexbox-preview"
                            style="flex-direction: column; justify-content: flex-start; align-items: stretch; gap: 20px;">
                            <div class="flex-item item-1">Item 1</div>
                            <div class="flex-item item-2">Item 2</div>
                            <div class="flex-item item-3">Item 3</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="section-title">🎯 Bài tập về nhà</div>
                <div class="project-card">
                    <div class="project-header">
                        <div class="project-title">Tạo navigation bar responsive</div>
                    </div>
                    <p style="margin-top: 10px; line-height: 1.6;">
                        Tạo một file <code>navbar.html</code> với:
                    </p>
                    <ul style="margin: 10px 0 10px 20px; color: #4b5563;">
                        <li>Logo bên trái</li>
                        <li>Menu items bên phải</li>
                        <li>Responsive cho mobile</li>
                    </ul>
                </div>
            </div>

            <div class="actions">
                <button class="btn" onclick="window.location.href='day1.html'">⬅️ Quay lại ngày 1</button>
                <button class="btn" onclick="window.location.href='day3.html'">Tiếp tục ngày 3 ➡️</button>
            </div>
        </div>
    </div>

    <script>
        function updateFlexboxPreview() {
            const flexDirection = document.getElementById('flex-direction').value;
            const justifyContent = document.getElementById('justify-content').value;
            const alignItems = document.getElementById('align-items').value;

            const preview = document.getElementById('flexbox-preview');

            preview.style.flexDirection = flexDirection;
            preview.style.justifyContent = justifyContent;
            preview.style.alignItems = alignItems;
        }
    </script>
</body>

</html>
```

## File: public/index.html
```html
<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🚀 Lộ Trình Web Development</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
        }

        /* Header */
        .header {
            text-align: center;
            color: white;
            margin-bottom: 40px;
            animation: fadeInDown 0.6s ease;
        }

        .header h1 {
            font-size: 3em;
            font-weight: 800;
            margin-bottom: 10px;
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .header p {
            font-size: 1.3em;
            opacity: 0.95;
            font-weight: 500;
        }

        .progress-wrapper {
            max-width: 600px;
            margin: 30px auto 0;
            background: rgba(255, 255, 255, 0.2);
            padding: 20px;
            border-radius: 15px;
            backdrop-filter: blur(10px);
        }

        .progress-bar {
            background: rgba(255, 255, 255, 0.3);
            height: 40px;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #10b981, #059669);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 1.1em;
            transition: width 0.5s ease;
            box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
        }

        /* Auth Section */
        .auth-section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: white;
            padding: 20px 30px;
            border-radius: 15px;
            margin-bottom: 30px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
            animation: fadeIn 0.6s ease 0.2s both;
        }

        .user-info {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 600;
            color: #1f2937;
        }

        .btn {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 12px 28px;
            border-radius: 25px;
            font-weight: 600;
            font-size: 0.95em;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 25px rgba(102, 126, 234, 0.4);
        }

        /* Today's Lesson */
        .today-lesson {
            background: white;
            border-radius: 20px;
            padding: 35px;
            margin-bottom: 30px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
            animation: fadeIn 0.6s ease 0.3s both;
        }

        .today-lesson h2 {
            font-size: 1.8em;
            color: #1f2937;
            margin-bottom: 25px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .lesson-card {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            border-radius: 15px;
            padding: 30px;
            display: grid;
            grid-template-columns: 100px 1fr;
            gap: 25px;
            align-items: center;
            transition: all 0.3s ease;
        }

        .lesson-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }

        .lesson-number {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            width: 100px;
            height: 100px;
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 1.1em;
            box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
        }

        .lesson-info h3 {
            font-size: 1.5em;
            color: #92400e;
            margin-bottom: 10px;
        }

        .lesson-info p {
            color: #78350f;
            margin-bottom: 15px;
            font-size: 1.05em;
        }

        .lesson-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 12px 25px;
            border-radius: 25px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .lesson-link:hover {
            transform: translateX(5px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }

        /* Month Sections */
        .month-section {
            background: white;
            border-radius: 20px;
            overflow: hidden;
            margin-bottom: 30px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
            animation: fadeIn 0.6s ease 0.4s both;
        }

        .month-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 25px 35px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .month-title {
            font-size: 1.8em;
            font-weight: 700;
        }

        .month-progress {
            background: rgba(255, 255, 255, 0.3);
            padding: 8px 20px;
            border-radius: 20px;
            font-weight: 600;
            backdrop-filter: blur(10px);
        }

        .month-content {
            padding: 35px;
        }

        .section-title {
            font-size: 1.4em;
            color: #667eea;
            margin-bottom: 20px;
            font-weight: 700;
        }

        /* Topic Items */
        .topic-list {
            list-style: none;
            display: grid;
            gap: 12px;
        }

        .topic-item {
            background: #f9fafb;
            padding: 18px 20px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            gap: 15px;
            cursor: pointer;
            transition: all 0.3s ease;
            border-left: 4px solid transparent;
        }

        .topic-item:hover {
            background: #f3f4f6;
            transform: translateX(5px);
            border-left-color: #667eea;
        }

        .topic-item.completed {
            background: #ecfdf5;
            border-left-color: #10b981;
        }

        .checkbox {
            width: 28px;
            height: 28px;
            border: 3px solid #d1d5db;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            transition: all 0.3s ease;
        }

        .topic-item.completed .checkbox {
            background: #10b981;
            border-color: #10b981;
        }

        .checkbox::after {
            content: '✓';
            color: white;
            font-weight: bold;
            font-size: 1.2em;
            display: none;
        }

        .topic-item.completed .checkbox::after {
            display: block;
        }

        .topic-text {
            flex: 1;
            font-size: 1.05em;
            color: #374151;
            font-weight: 500;
        }

        .inline-lesson-link {
            color: #667eea;
            text-decoration: none;
            font-weight: 600;
            padding: 4px 12px;
            background: rgba(102, 126, 234, 0.1);
            border-radius: 6px;
            transition: all 0.2s ease;
            font-size: 0.9em;
        }

        .inline-lesson-link:hover {
            background: rgba(102, 126, 234, 0.2);
        }

        /* Project Cards */
        .project-card {
            background: #f9fafb;
            border-radius: 12px;
            padding: 25px;
            margin-bottom: 15px;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }

        .project-card:hover {
            border-color: #667eea;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
        }

        .project-card.completed {
            background: #ecfdf5;
            border-color: #10b981;
        }

        .project-header {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 12px;
        }

        .project-title {
            flex: 1;
            font-size: 1.2em;
            font-weight: 700;
            color: #1f2937;
        }

        .project-status {
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 0.9em;
            font-weight: 600;
            background: #fef3c7;
            color: #92400e;
        }

        .project-card.completed .project-status {
            background: #d1fae5;
            color: #065f46;
        }

        .project-desc {
            color: #6b7280;
            line-height: 1.6;
            padding-left: 43px;
        }

        /* Stats */
        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 30px 0;
        }

        .stat-card {
            background: white;
            padding: 30px;
            border-radius: 15px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
        }

        .stat-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .stat-number {
            font-size: 3em;
            font-weight: 800;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 10px;
        }

        .stat-label {
            color: #6b7280;
            font-size: 1.1em;
            font-weight: 600;
        }

        /* Notes */
        .notes-section {
            background: white;
            padding: 30px;
            border-radius: 15px;
            margin: 30px 0;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .notes-title {
            font-size: 1.4em;
            color: #1f2937;
            margin-bottom: 15px;
            font-weight: 700;
        }

        .notes-content {
            width: 100%;
            min-height: 120px;
            padding: 15px;
            border: 2px solid #e5e7eb;
            border-radius: 10px;
            font-family: inherit;
            font-size: 1em;
            resize: vertical;
            transition: border-color 0.3s ease;
        }

        .notes-content:focus {
            outline: none;
            border-color: #667eea;
        }

        /* Actions */
        .actions {
            text-align: center;
            padding: 30px;
        }

        .actions .btn {
            margin: 0 8px;
        }

        /* Animations */
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-30px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Responsive */
        @media (max-width: 768px) {
            .header h1 {
                font-size: 2em;
            }

            .lesson-card {
                grid-template-columns: 1fr;
                text-align: center;
            }

            .lesson-number {
                margin: 0 auto;
            }

            .auth-section {
                flex-direction: column;
                gap: 15px;
                text-align: center;
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <h1>🚀 Lộ Trình Web Development</h1>
            <p>Hành trình 2-3 tháng để trở thành Web Developer</p>

            <div class="progress-wrapper">
                <div class="progress-bar">
                    <div class="progress-fill" id="overallProgress" style="width: 0%">0%</div>
                </div>
            </div>
        </div>

        <!-- Auth Section -->
        <div class="auth-section">
            <div class="user-info" id="userInfo" style="display: none;">
                👤 <span id="userEmail"></span>
            </div>
            <div id="loginPrompt">🔔 Đăng nhập để lưu tiến độ lên cloud!</div>
            <div>
                <button class="btn" id="loginBtn" onclick="signInWithGoogle()">🔐 Đăng nhập</button>
                <button class="btn" id="logoutBtn" onclick="signOut()" style="display: none;">🚪 Đăng
                    xuất</button>
            </div>
        </div>

        <!-- Today's Lesson -->
        <div class="today-lesson">
            <h2>📖 Bài học hôm nay</h2>
            <div class="lesson-card">
                <div class="lesson-number">Ngày 4</div>
                <div class="lesson-info">
                    <h3>CSS Grid Layout</h3>
                    <p>Làm chủ CSS Grid - Công cụ layout mạnh mẽ nhất</p>
                    <a href="lessons/day4.html" class="lesson-link">
                        Bắt đầu học
                        <span>→</span>
                    </a>
                </div>
            </div>
        </div>

        <!-- Month 1 -->
        <div class="month-section">
            <div class="month-header">
                <div class="month-title">📚 Tháng 1 - Nền Tảng Web</div>
                <div class="month-progress" id="month1Progress">0/10</div>
            </div>
            <div class="month-content">
                <h3 class="section-title">Kiến thức cần học:</h3>
                <ul class="topic-list">
                    <li class="topic-item" onclick="toggleTopic(this)">
                        <div class="checkbox"></div>
                        <span class="topic-text">
                            📝 Ngày 1: HTML5 - Cấu trúc và semantic tags
                            <a href="lessons/day1.html" class="inline-lesson-link">Xem bài học</a>
                        </span>
                    </li>
                    <li class="topic-item" onclick="toggleTopic(this)">
                        <div class="checkbox"></div>
                        <span class="topic-text">
                            📝 Ngày 2: CSS Cơ bản - Selectors, Flexbox
                            <a href="lessons/day2.html" class="inline-lesson-link">Xem bài học</a>
                        </span>
                    </li>
                    <li class="topic-item" onclick="toggleTopic(this)">
                        <div class="checkbox"></div>
                        <span class="topic-text">
                            📝 Ngày 3: CSS Cơ bản & Box Model
                            <a href="lessons/day3.html" class="inline-lesson-link">Xem bài học</a>
                        </span>
                    </li>
                    <li class="topic-item" onclick="toggleTopic(this)">
                        <div class="checkbox"></div>
                        <span class="topic-text">
                            📝 Ngày 4: CSS Grid Layout
                            <a href="lessons/day4.html" class="inline-lesson-link">Xem bài học</a>
                        </span>
                    </li>
                    <li class="topic-item" onclick="toggleTopic(this)">
                        <div class="checkbox"></div>
                        <span class="topic-text">Ngày 5: JavaScript cơ bản - Biến và kiểu dữ liệu</span>
                    </li>
                    <li class="topic-item" onclick="toggleTopic(this)">
                        <div class="checkbox"></div>
                        <span class="topic-text">Ngày 6: JavaScript cơ bản - Functions</span>
                    </li>
                    <li class="topic-item" onclick="toggleTopic(this)">
                        <div class="checkbox"></div>
                        <span class="topic-text">Ngày 7: JavaScript cơ bản - Array và Object</span>
                    </li>
                    <li class="topic-item" onclick="toggleTopic(this)">
                        <div class="checkbox"></div>
                        <span class="topic-text">Ngày 8: JavaScript cơ bản - DOM manipulation</span>
                    </li>
                </ul>

                <h3 class="section-title" style="margin-top: 30px;">Dự án thực hành:</h3>
                <div class="project-card" onclick="toggleTopic(this)">
                    <div class="project-header">
                        <div class="checkbox"></div>
                        <div class="project-title">Landing Page Công Ty</div>
                        <div class="project-status">Đang làm</div>
                    </div>
                    <div class="project-desc">Tạo trang giới thiệu công ty với header, about, services, contact form
                    </div>
                </div>
                <div class="project-card" onclick="toggleTopic(this)">
                    <div class="project-header">
                        <div class="checkbox"></div>
                        <div class="project-title">Website Bán Hàng Đơn Giản</div>
                        <div class="project-status">Đang làm</div>
                    </div>
                    <div class="project-desc">Trang sản phẩm với filter, shopping cart cơ bản</div>
                </div>
            </div>
        </div>

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


        <!-- Stats -->
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

        <!-- Notes -->
        <div class="notes-section">
            <h3 class="notes-title">📝 Ghi chú học tập</h3>
            <textarea class="notes-content" id="notes" placeholder="Viết ghi chú của bạn ở đây..."></textarea>
        </div>

        <!-- Actions -->
        <div class="actions">
            <button class="btn" onclick="alert('Lưu tiến độ')">💾 Lưu tiến độ</button>
            <button class="btn" onclick="alert('Reset')">🔄 Reset tất cả</button>
            <button class="btn" onclick="alert('Xuất dữ liệu')">📤 Xuất dữ liệu</button>
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
