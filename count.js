let timeLeft;
        let timerId = null;
        const timerDisplay = document.getElementById('timer');

        function updateDisplay(seconds) {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const secs = seconds % 60;
            timerDisplay.textContent = 
                `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }

        function startTimer() {
            if (timerId) return; // Prevent multiple timers

            const minutesInput = document.getElementById('minutes').value;
            if (!minutesInput || minutesInput <= 0) {
                alert('Please enter a valid number of minutes');
                return;
            }

            timeLeft = Math.floor(minutesInput * 60);
            updateDisplay(timeLeft);

            timerId = setInterval(() => {
                timeLeft--;
                updateDisplay(timeLeft);

                if (timeLeft <= 0) {
                    clearInterval(timerId);
                    timerId = null;
                    alert('Timer finished!');
                }
            }, 1000);
        }

        function stopTimer() {
            if (timerId) {
                clearInterval(timerId);
                timerId = null;
            }
        }

        function resetTimer() {
            stopTimer();
            timeLeft = 0;
            updateDisplay(0);
            document.getElementById('minutes').value = '';
        }