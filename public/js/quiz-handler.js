// Config cho mỗi lesson
const LESSON_CONFIG = {
    day5: {
        id: 'day5',
        totalQuestions: 4,
        answers: { q1: 'correct', q2: 'correct', q3: 'correct', q4: 'correct' },
        completionMsg: "Bạn đã hoàn thành bài học Ngày 5.\n\n✅ JavaScript là gì và cách sử dụng\n✅ Khai báo biến với let và const\n✅ Các kiểu dữ liệu cơ bản\n✅ Sử dụng console.log() để debug"
    },
    day6: {
        id: 'day6',
        totalQuestions: 5,
        answers: { q1: 'correct', q2: 'correct', q3: 'correct', q4: 'correct', q5: 'correct' },
        completionMsg: "Bạn đã hoàn thành bài học Ngày 6.\n\n✅ Function là gì và tại sao cần dùng\n✅ Cách khai báo function\n✅ Parameters và Return values\n✅ Default parameters\n✅ Cách tái sử dụng code hiệu quả"
    },
    day7: {
        id: 'day7',
        totalQuestions: 5,
        answers: { q1: 'correct', q2: 'correct', q3: 'correct', q4: 'correct', q5: 'correct' },
        completionMsg: "Bạn đã hoàn thành bài học Ngày 7.\n\n✅ Array (Mảng) là gì và cách sử dụng\n✅ Cách khai báo và truy cập Array\n✅ Các phương thức quan trọng: push, pop, shift, unshift\n✅ Sử dụng forEach() để lặp qua mảng\n✅ Quản lý danh sách dữ liệu hiệu quả"
    }
};

function initQuiz(lessonKey) {
    const config = LESSON_CONFIG[lessonKey];
    window.LESSON_ID = config.id;
    window.QUIZ_CONFIG = config;
}

function checkQuiz() {
    const config = QUIZ_CONFIG;
    const form = document.getElementById('quizForm');
    const feedback = document.getElementById('quiz-feedback');
    const completeBtn = document.getElementById('completeBtn');
    let score = 0;

    let pointsEarned = 0, pointsLost = 0, newCorrect = 0, alreadyCorrect = 0;

    document.querySelectorAll('.option-label').forEach(label => 
        label.classList.remove('correct', 'wrong')
    );

    let allAnswered = true;

    for (let q in config.answers) {
        const selected = form.querySelector(`input[name="${q}"]:checked`);
        if (!selected) { allAnswered = false; continue; }

        const parent = selected.parentElement;
        const wasAlreadyAnswered = typeof isQuestionAnswered === 'function' && 
                                   isQuestionAnswered(LESSON_ID, q);

        if (selected.value === config.answers[q]) {
            parent.classList.add('correct');
            score++;

            if (wasAlreadyAnswered) {
                alreadyCorrect++;
            } else {
                newCorrect++;
                pointsEarned += 10;
                if (typeof markQuestionAnswered === 'function') {
                    markQuestionAnswered(LESSON_ID, q);
                }
            }
        } else {
            parent.classList.add('wrong');
            pointsLost += 5;
        }
    }

    if (!allAnswered) {
        feedback.style.display = 'block';
        feedback.style.background = '#fef3c7';
        feedback.style.color = '#92400e';
        feedback.textContent = '⚠️ Vui lòng trả lời hết các câu hỏi!';
        return;
    }

    if (typeof addPoints === 'function') {
        if (pointsEarned > 0) addPoints(pointsEarned, 'quiz_correct');
        if (pointsLost > 0) subtractPoints(pointsLost, 'quiz_wrong');
    }

    feedback.style.display = 'block';

    if (score === config.totalQuestions) {
        const wasQuizCompleted = typeof isQuizCompleted === 'function' && 
                                 isQuizCompleted(LESSON_ID);
        let bonusPoints = 0;

        if (!wasQuizCompleted) {
            bonusPoints = 50;
            if (typeof addPoints === 'function') addPoints(50, 'perfect_quiz');
            if (typeof markQuizCompleted === 'function') markQuizCompleted(LESSON_ID);
        }

        feedback.style.background = '#dcfce7';
        feedback.style.color = '#166534';

        let resultMsg = '🎉 Xuất sắc! Bạn đã nắm vững bài học!<br>';
        if (pointsEarned > 0 || bonusPoints > 0) {
            resultMsg += `<span style="font-size: 0.9em;">`;
            if (newCorrect > 0) resultMsg += `+${pointsEarned} điểm mới`;
            if (alreadyCorrect > 0) resultMsg += ` (${alreadyCorrect} câu đã đúng)`;
            if (bonusPoints > 0) resultMsg += ` + ${bonusPoints} bonus`;
            resultMsg += `</span>`;
        } else {
            resultMsg += `<span style="font-size: 0.9em;">Bạn đã làm bài này trước đó!</span>`;
        }

        feedback.innerHTML = resultMsg;
        completeBtn.style.opacity = '1';
        completeBtn.style.pointerEvents = 'auto';
        completeBtn.textContent = '✅ Đã hiểu & Hoàn thành!';
    } else {
        feedback.style.background = '#fee2e2';
        feedback.style.color = '#991b1b';

        let resultMsg = `❌ Bạn đúng ${score}/${config.totalQuestions} câu.`;
        resultMsg += `<span style="font-size: 0.9em;"> (`;
        if (newCorrect > 0) resultMsg += `+${pointsEarned} mới`;
        if (alreadyCorrect > 0) resultMsg += ` ${alreadyCorrect} đã đúng`;
        if (pointsLost > 0) resultMsg += ` -${pointsLost} sai`;
        resultMsg += `)</span><br>Hãy đọc lại bài học và thử lại nhé!`;

        feedback.innerHTML = resultMsg;
        completeBtn.style.opacity = '0.5';
        completeBtn.style.pointerEvents = 'none';
    }
}

function completeLesson() {
    const config = QUIZ_CONFIG;
    const wasCompleted = typeof isLessonCompleted === 'function' && 
                         isLessonCompleted(LESSON_ID);

    let message = "🎉 Chúc mừng! " + config.completionMsg;

    if (!wasCompleted) {
        if (typeof addPoints === 'function') addPoints(20, 'complete_lesson');
        if (typeof markLessonCompleted === 'function') markLessonCompleted(LESSON_ID);
        message = "🎉 Chúc mừng!\n\n+20 điểm hoàn thành bài học!\n\n" + config.completionMsg;
    } else {
        message = "🎉 Chúc mừng!\n\n(Bạn đã nhận điểm hoàn thành trước đó)\n\n" + config.completionMsg;
    }

    alert(message);
    window.location.href = "../index.html";
}