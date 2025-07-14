

        document.getElementById('submitBtn').addEventListener('click', function() {
            // Score calculation
            let score = 0;
            const detailedResults = [];
            
            // Check identification questions (1-15)
            const identificationInputs = document.querySelectorAll('.answer-input');
            identificationInputs.forEach((input, index) => {
                const userAnswer = input.value.trim().toLowerCase();
                const correctAnswer = input.dataset.answer.toLowerCase();
                
                if (userAnswer === correctAnswer) {
                    score++;
                    detailedResults.push(`<p class="correct">Question ${index + 1}: Correct!</p>`);
                } else {
                    detailedResults.push(`<p class="incorrect">Question ${index + 1}: Incorrect. Correct answer: "${input.dataset.answer}"</p>`);
                }
            });
            
            // Check multiple choice (16-25)
            for (let i = 16; i <= 25; i++) {
                const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
                if (selectedOption && selectedOption.hasAttribute('data-correct')) {
                    score++;
                    detailedResults.push(`<p class="correct">Question ${i}: Correct!</p>`);
                } else {
                    const correctOption = document.querySelector(`input[name="q${i}"][data-correct]`).value;
                    detailedResults.push(`<p class="incorrect">Question ${i}: Incorrect. Correct answer: ${String.fromCharCode(96 + correctOption.charCodeAt(0) - 96)})</p>`);
                }
            }
            
            // Check true/false (26-30)
            for (let i = 26; i <= 30; i++) {
                const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
                if (selectedOption && selectedOption.hasAttribute('data-correct')) {
                    score++;
                    detailedResults.push(`<p class="correct">Question ${i}: Correct!</p>`);
                } else {
                    const correctOption = document.querySelector(`input[name="q${i}"][data-correct]`).value === 't' ? 'True' : 'False';
                    detailedResults.push(`<p class="incorrect">Question ${i}: Incorrect. Correct answer: ${correctOption}</p>`);
                }
            }
            
            // Display results
            document.getElementById('score').textContent = score;
            document.getElementById('detailedResults').innerHTML = detailedResults.join('');
            document.getElementById('results').style.display = 'block';
            
            // Scroll to results
            document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
        });
 