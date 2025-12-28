class SimpleQuiz {
    constructor(lessonId, totalQuestions) {
        this.lessonId = lessonId;
        this.total = totalQuestions;
        this.form = document.getElementById('quizForm');
        this.feedback = document.getElementById('quiz-feedback');
        this.completeBtn = document.getElementById('completeBtn');
    }

    check(answers) {
        let score = 0;
        let allAnswered = true;

        document.querySelectorAll('.option-label').forEach(label => {
            label.classList.remove('correct', 'wrong');
        });

        for (let q in answers) {
            const selected = this.form.querySelector(`input[name="${q}"]:checked`);
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
            this.showFeedback('warning', '⚠️ Vui lòng trả lời hết các câu hỏi!');
            return;
        }

        if (score === this.total) {
            this.showFeedback('success', '🎉 Xuất sắc! Bạn đã nắm vững bài học!');
            this.unlockComplete();
        } else {
            this.showFeedback('error', `❌ Bạn đúng ${score}/${this.total} câu. Hãy thử lại nhé!`);
            this.lockComplete();
        }
    }

    showFeedback(type, message) {
        const colors = {
            success: { bg: '#dcfce7', text: '#166534' },
            error: { bg: '#fee2e2', text: '#991b1b' },
            warning: { bg: '#fef3c7', text: '#92400e' }
        };

        this.feedback.style.display = 'block';
        this.feedback.style.background = colors[type].bg;
        this.feedback.style.color = colors[type].text;
        this.feedback.textContent = message;
    }

    unlockComplete() {
        this.completeBtn.style.opacity = '1';
        this.completeBtn.style.pointerEvents = 'auto';
        this.completeBtn.textContent = '✅ Đã hiểu & Hoàn thành!';
    }

    lockComplete() {
        this.completeBtn.style.opacity = '0.5';
        this.completeBtn.style.pointerEvents = 'none';
    }

    complete(message) {
        alert(message);
        window.location.href = "../index.html";
    }
}