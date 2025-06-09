let score = 0;

// Charger un emoji aléatoire
async function loadEmoji() {
    try {
        const res = await fetch('/api/random-emoji');
        const data = await res.json();

        document.getElementById('emoji').textContent = data.emoji;

        const optionsDiv = document.getElementById('options');
        optionsDiv.innerHTML = '';

        data.options.forEach(option => {
            const button = document.createElement('button');
            button.type = 'button';
            button.textContent = option;
            button.addEventListener('click', () => submitGuess(option));
            optionsDiv.appendChild(button);
        });

    } catch (error) {
        console.error('Erreur lors du chargement de l\'emoji:', error);
    }
}

// Envoyer la réponse de l'utilisateur
async function submitGuess(guess) {
    try {
        const res = await fetch('/api/guess', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ guess }),
        });

        const data = await res.json();

        const feedbackDiv = document.getElementById('feedback');
        if (data.correct) {
            feedbackDiv.textContent = '✅ Bonne réponse !';
            score++;
        } else {
            feedbackDiv.textContent = `❌ Mauvaise réponse. La bonne réponse était : ${data.correctAnswer}`;
        }

        document.getElementById('score').textContent = `Score: ${score}`;

        setTimeout(() => {
            feedbackDiv.textContent = '';
            loadEmoji();
        }, 1500);

    } catch (error) {
        console.error('Erreur lors de l\'envoi de la réponse:', error);
    }
}

window.addEventListener('DOMContentLoaded', loadEmoji);
