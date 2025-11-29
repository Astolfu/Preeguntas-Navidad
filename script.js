// Quiz Questions - Disguised as personality questions but actually about gift preferences
const questions = [
    {
        question: "🎄 ¿Con qué objeto mágico te gustaría despertar en Navidad?",
        options: [
            { text: "Un amuleto suave y adorable que puedas abrazar", value: "plushies", category: "regalo" },
            { text: "Un libro de hechizos antiguos lleno de historias", value: "mangas", category: "regalo" },
            { text: "Una cesta de dulces y delicias mágicas", value: "food", category: "regalo" },
            { text: "Merch de tu artista o banda favorita", value: "music", category: "regalo" },
            { text: "Una joya brillante o accesorio especial", value: "accessories", category: "regalo" }
        ]
    },
    {
        question: "❄️ ¿Qué actividad navideña te hace más feliz?",
        options: [
            { text: "Acurrucarte con algo suave mientras ves películas", value: "plushies", category: "regalo" },
            { text: "Leer historias increíbles junto a la chimenea", value: "mangas", category: "regalo" },
            { text: "Probar todas las comidas y postres navideños", value: "food", category: "regalo" },
            { text: "Escuchar tu música favorita todo el día", value: "music", category: "regalo" },
            { text: "Arreglarte con ropa y accesorios festivos", value: "accessories", category: "regalo" }
        ]
    },
    {
        question: "🎁 Si fueras un personaje navideño, ¿qué tesoro guardarías?",
        options: [
            { text: "Una colección de criaturas mágicas adorables", value: "plushies", category: "regalo" },
            { text: "Una biblioteca de aventuras fantásticas", value: "mangas", category: "regalo" },
            { text: "Recetas secretas de los mejores platillos del mundo", value: "food", category: "regalo" },
            { text: "Accesorios únicos y hermosos de todo el mundo", value: "accessories", category: "regalo" }
        ]
    },
    {
        question: "⭐ ¿Qué te haría sonreír más al abrir un regalo?",
        options: [
            { text: "Algo suavecito que te haga sentir en las nubes", value: "plushies", category: "regalo" },
            { text: "Una historia visual increíble para perderte en ella", value: "mangas", category: "regalo" },
            { text: "Algo delicioso que puedas saborear", value: "food", category: "regalo" },
            { text: "Algo que puedas usar y lucir con estilo", value: "accessories", category: "regalo" }
        ]
    },
    {
        question: "🌟 ¿Qué tipo de magia navideña prefieres?",
        options: [
            { text: "La calidez de un abrazo reconfortante", value: "plushies", category: "regalo" },
            { text: "La aventura de mundos de fantasía", value: "mangas", category: "regalo" },
            { text: "El placer de sabores extraordinarios", value: "food", category: "regalo" },
            { text: "La confianza de verte increíble", value: "accessories", category: "regalo" }
        ]
    },
    {
        question: "🎅 ¿Qué NO te gustaría encontrar en tu regalo navideño?",
        options: [
            { text: "Cosas prácticas y aburridas sin personalidad", value: "practical", category: "no_regalo" },
            { text: "Ropa que no es tu estilo o talla incorrecta", value: "wrong_clothes", category: "no_regalo" },
            { text: "Artículos genéricos sin ningún pensamiento detrás", value: "generic", category: "no_regalo" },
            { text: "Cosas demasiado infantiles o serias", value: "age_inappropriate", category: "no_regalo" }
        ]
    },
    {
        question: "🔔 ¿Qué regalo definitivamente NO quieres recibir?",
        options: [
            { text: "Electrodomésticos o cosas para el hogar", value: "appliances", category: "no_regalo" },
            { text: "Perfumes o fragancias que no elegiste tú", value: "perfumes", category: "no_regalo" },
            { text: "Tarjetas de regalo sin personalización", value: "gift_cards", category: "no_regalo" },
            { text: "Decoración o adornos que no van contigo", value: "decorations", category: "no_regalo" }
        ]
    },
    {
        question: "✨ En una noche perfecta de Navidad, tú estarías...",
        options: [
            { text: "Abrazando algo super tierno viendo series", value: "plushies", category: "regalo" },
            { text: "Perdida en las páginas de una gran historia", value: "mangas", category: "regalo" },
            { text: "Disfrutando tus snacks y bebidas favoritas", value: "food", category: "regalo" },
            { text: "Cantando tus canciones favoritas a todo volumen", value: "music", category: "regalo" },
            { text: "Sintiéndote hermosa con tus accesorios favoritos", value: "accessories", category: "regalo" }
        ]
    }
];

// Character results based on preferences
const characters = {
    plushies: {
        icon: "🧸",
        title: "¡Eres el Espíritu de la Ternura Navideña!",
        description: "Tienes un corazón lleno de calidez y amor. Te encanta la comodidad y las cosas que te hacen sentir abrazada y feliz. Eres como un abrazo navideño personalizado.",
        traits: [
            "Aprecias los detalles tiernos y adorables",
            "Te encanta la comodidad y la calidez",
            "Valoras los gestos que muestran cariño",
            "Eres dulce y apreciativa"
        ]
    },
    mangas: {
        icon: "📚",
        title: "¡Eres el Guardián de Historias Navideñas!",
        description: "Tu imaginación no tiene límites y te encanta perderte en mundos fantásticos. Eres aventurera, creativa y siempre estás buscando la próxima gran historia.",
        traits: [
            "Tienes una imaginación vibrante",
            "Amas las aventuras y nuevas historias",
            "Aprecias el arte visual y narrativo",
            "Eres creativa y soñadora"
        ]
    },
    food: {
        icon: "🍰",
        title: "¡Eres la Reina de las Delicias Navideñas!",
        description: "Para ti, la Navidad está llena de sabores increíbles y momentos deliciosos. Disfrutas de la buena comida y sabes apreciar los placeres simples de la vida.",
        traits: [
            "Aprecias los buenos sabores",
            "Disfrutas de experiencias sensoriales",
            "Eres una conocedora de lo delicioso",
            "Sabes disfrutar el momento presente"
        ]
    },
    accessories: {
        icon: "💎",
        title: "¡Eres la Estrella Brillante de la Navidad!",
        description: "Tienes estilo único y sabes exactamente qué te hace brillar. Te encanta expresarte a través de tu apariencia y siempre destacas con elegancia.",
        traits: [
            "Tienes un sentido de estilo único",
            "Te gusta verte y sentirte bien",
            "Aprecias la belleza y los detalles",
            "Eres confiada y expresiva"
        ]
    },
    music: {
        icon: "🎵",
        title: "¡Eres el Alma Musical de la Navidad!",
        description: "La música es tu lenguaje del corazón. Cada canción cuenta tu historia y te conectas profundamente con los artistas que amas. Vives la vida con tu soundtrack personal.",
        traits: [
            "La música es parte esencial de tu vida",
            "Te conectas emocionalmente con las canciones",
            "Aprecias a los artistas que te inspiran",
            "Tienes pasión y energía vibrante"
        ]
    }
};

// Quiz State
let currentQuestion = 0;
let answers = {
    regalo: {},
    no_regalo: [],
    favoriteArtist: '',
    top3Gifts: ''
};
let selectedMusic = false;

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressFill = document.getElementById('progress-fill');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const restartBtn = document.getElementById('restart-btn');
const adminPanel = document.getElementById('admin-panel');
const closeAdminBtn = document.getElementById('close-admin');
const clearResultsBtn = document.getElementById('clear-results');
const adminResults = document.getElementById('admin-results');

// Initialize
totalQuestionsSpan.textContent = questions.length;

// Event Listeners
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);
closeAdminBtn.addEventListener('click', closeAdmin);
clearResultsBtn.addEventListener('click', clearResults);

// Secret admin panel shortcut (Ctrl+Shift+A)
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        openAdmin();
    }
});

// Start Quiz
function startQuiz() {
    welcomeScreen.classList.remove('active');
    quizScreen.classList.add('active');
    currentQuestion = 0;
    answers = {
        regalo: {},
        no_regalo: [],
        favoriteArtist: '',
        top3Gifts: ''
    };
    selectedMusic = false;
    showQuestion();
}

// Show Question
function showQuestion() {
    const question = questions[currentQuestion];
    questionText.textContent = question.question;
    currentQuestionSpan.textContent = currentQuestion + 1;

    // Update progress bar - Add 2 for conditional questions (music artist + top 3)
    const totalQuestions = questions.length + 2;
    const progress = ((currentQuestion + 1) / totalQuestions) * 100;
    progressFill.style.width = `${progress}%`;

    // Clear previous options
    optionsContainer.innerHTML = '';

    // Create option buttons
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option.text;
        button.addEventListener('click', () => selectOption(option));
        optionsContainer.appendChild(button);

        // Stagger animation
        setTimeout(() => {
            button.style.animation = 'fadeIn 0.4s ease-in-out';
        }, index * 100);
    });
}

// Select Option
function selectOption(option) {
    // Store answer
    if (option.category === 'regalo') {
        if (!answers.regalo[option.value]) {
            answers.regalo[option.value] = 0;
        }
        answers.regalo[option.value]++;

        // Track if music was selected
        if (option.value === 'music') {
            selectedMusic = true;
        }
    } else if (option.category === 'no_regalo') {
        answers.no_regalo.push(option.value);
    }

    // Move to next question
    currentQuestion++;

    if (currentQuestion < questions.length) {
        setTimeout(() => {
            showQuestion();
        }, 300);
    } else {
        // After all regular questions, show conditional questions
        setTimeout(() => {
            if (selectedMusic) {
                showArtistQuestion();
            } else {
                showTop3Question();
            }
        }, 300);
    }
}

// Show Artist Question (conditional)
function showArtistQuestion() {
    questionText.textContent = "🎤 ¿Cuál es tu artista o banda favorita?";
    currentQuestionSpan.textContent = questions.length + 1;

    const totalQuestions = questions.length + 2;
    const progress = ((questions.length + 1) / totalQuestions) * 100;
    progressFill.style.width = `${progress}%`;

    optionsContainer.innerHTML = `
        <input type="text" id="artist-input" class="text-input" placeholder="Escribe el nombre de tu artista o banda favorita...">
        <button id="artist-submit" class="btn btn-primary" style="margin-top: 1rem;">Continuar →</button>
    `;

    document.getElementById('artist-submit').addEventListener('click', () => {
        const artistInput = document.getElementById('artist-input');
        answers.favoriteArtist = artistInput.value.trim();
        setTimeout(() => {
            showTop3Question();
        }, 300);
    });

    // Allow Enter key to submit
    document.getElementById('artist-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            document.getElementById('artist-submit').click();
        }
    });
}

// Show Top 3 Gifts Question
function showTop3Question() {
    questionText.textContent = "🎁 ¿Cuáles son tus 3 regalos favoritos que te gustaría recibir esta Navidad?";
    currentQuestionSpan.textContent = questions.length + 2;

    const totalQuestions = questions.length + 2;
    const progress = (totalQuestions / totalQuestions) * 100;
    progressFill.style.width = `${progress}%`;

    optionsContainer.innerHTML = `
        <textarea id="top3-input" class="text-input" rows="5" placeholder="Escribe tus 3 regalos favoritos, uno por línea...\n\nEjemplo:\n1. Un peluche de mi serie favorita\n2. Chocolates gourmet\n3. Una sudadera aesthetic"></textarea>
        <button id="top3-submit" class="btn btn-primary" style="margin-top: 1rem;">Ver mi Resultado 🎄</button>
    `;

    document.getElementById('top3-submit').addEventListener('click', () => {
        const top3Input = document.getElementById('top3-input');
        answers.top3Gifts = top3Input.value.trim();
        setTimeout(() => {
            showResults();
        }, 300);
    });
}

// Show Results
function showResults() {
    // Calculate most preferred gift
    let maxCount = 0;
    let preferredGift = 'plushies';

    for (const [gift, count] of Object.entries(answers.regalo)) {
        if (count > maxCount) {
            maxCount = count;
            preferredGift = gift;
        }
    }

    // Get character result
    const character = characters[preferredGift];

    // Save results to localStorage with timestamp
    saveResults(preferredGift, answers.no_regalo, answers.favoriteArtist, answers.top3Gifts);

    // Display results
    document.getElementById('result-icon').textContent = character.icon;
    document.getElementById('result-title').textContent = character.title;
    document.getElementById('result-description').textContent = character.description;

    const traitsList = document.getElementById('result-traits-list');
    traitsList.innerHTML = '';
    character.traits.forEach(trait => {
        const li = document.createElement('li');
        li.textContent = trait;
        traitsList.appendChild(li);
    });

    // Display user's custom answers (for screenshot)
    const userAnswersDiv = document.getElementById('user-answers');
    let userAnswersHtml = '';

    // Show favorite artist if they chose music
    if (answers.favoriteArtist) {
        userAnswersHtml += `
            <div class="user-answer-section">
                <h3>🎤 Mi Artista/Banda Favorita:</h3>
                <p class="user-answer-text">${answers.favoriteArtist}</p>
            </div>
        `;
    }

    // Show top 3 gifts (always shown)
    if (answers.top3Gifts) {
        userAnswersHtml += `
            <div class="user-answer-section">
                <h3>🎁 Mis 3 Regalos Favoritos de Navidad:</h3>
                <pre class="user-answer-text">${answers.top3Gifts}</pre>
            </div>
        `;
    }

    userAnswersDiv.innerHTML = userAnswersHtml;

    // Switch screens
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
}

// Save Results to LocalStorage
function saveResults(preferredGift, dislikedGifts, favoriteArtist, top3Gifts) {
    const results = JSON.parse(localStorage.getItem('quizResults') || '[]');

    const timestamp = new Date().toLocaleString('es-MX', {
        timeZone: 'America/Mexico_City',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    results.push({
        timestamp,
        preferredGift,
        dislikedGifts,
        allAnswers: answers.regalo,
        favoriteArtist: favoriteArtist || '',
        top3Gifts: top3Gifts || ''
    });

    localStorage.setItem('quizResults', JSON.stringify(results));
}

// Restart Quiz
function restartQuiz() {
    resultScreen.classList.remove('active');
    welcomeScreen.classList.add('active');
}

// Open Admin Panel
function openAdmin() {
    adminPanel.classList.add('active');
    displayAdminResults();
}

// Close Admin Panel
function closeAdmin() {
    adminPanel.classList.remove('active');
}

// Display Admin Results
function displayAdminResults() {
    const results = JSON.parse(localStorage.getItem('quizResults') || '[]');

    if (results.length === 0) {
        adminResults.innerHTML = '<p style="text-align: center; opacity: 0.7;">No hay resultados todavía 🎁</p>';
        return;
    }

    adminResults.innerHTML = '';

    results.reverse().forEach((result, index) => {
        const resultDiv = document.createElement('div');
        resultDiv.className = 'result-item';

        const giftNames = {
            plushies: 'Peluches / Cosas suaves y adorables',
            mangas: 'Mangas / Libros / Historias',
            food: 'Comida / Dulces / Snacks',
            music: 'Música / Merch de artistas',
            accessories: 'Accesorios / Joyería / Ropa'
        };

        const nogiftNames = {
            practical: 'Cosas prácticas sin personalidad',
            wrong_clothes: 'Ropa equivocada',
            generic: 'Regalos genéricos',
            age_inappropriate: 'Cosas muy infantiles o serias',
            appliances: 'Electrodomésticos',
            perfumes: 'Perfumes no elegidos por ella',
            gift_cards: 'Tarjetas de regalo',
            decorations: 'Decoración'
        };

        let allAnswersHtml = '<p><strong>Desglose de respuestas:</strong></p><ul>';
        for (const [gift, count] of Object.entries(result.allAnswers)) {
            allAnswersHtml += `<li>${giftNames[gift]}: ${count} veces</li>`;
        }
        allAnswersHtml += '</ul>';

        let dislikedHtml = '<p><strong>NO le gustaría:</strong></p><ul>';
        result.dislikedGifts.forEach(dislike => {
            dislikedHtml += `<li>${nogiftNames[dislike] || dislike}</li>`;
        });
        dislikedHtml += '</ul>';

        let artistHtml = '';
        if (result.favoriteArtist) {
            artistHtml = `<p><strong>🎤 Artista/Banda favorita:</strong> ${result.favoriteArtist}</p>`;
        }

        let top3Html = '';
        if (result.top3Gifts) {
            top3Html = `<p><strong>🎁 Top 3 Regalos Favoritos:</strong></p><pre style="white-space: pre-wrap; background: rgba(0,0,0,0.2); padding: 0.5rem; border-radius: 8px; margin-top: 0.5rem;">${result.top3Gifts}</pre>`;
        }

        resultDiv.innerHTML = `
            <h4>Resultado ${results.length - index}</h4>
            <p><strong>Fecha:</strong> ${result.timestamp}</p>
            <p><strong>Preferencia principal:</strong> ${giftNames[result.preferredGift]}</p>
            ${allAnswersHtml}
            ${dislikedHtml}
            ${artistHtml}
            ${top3Html}
        `;

        adminResults.appendChild(resultDiv);
    });
}

// Clear Results
function clearResults() {
    if (confirm('¿Estás seguro de que quieres borrar todos los resultados?')) {
        localStorage.removeItem('quizResults');
        displayAdminResults();
    }
}
