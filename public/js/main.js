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