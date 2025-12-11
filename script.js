(function() {
    const state = {
        timer: 60,
        current_word: '',
        word_correct: 0,
        error_words: 0
    };
    
    document.addEventListener('DOMContentLoaded', getParagraph);

    // DOM elements
    const displayParagraphSection = document.getElementById('text-to-type-display'); 

    async function getParagraph() {
        // Fetch random paragraph
        // // Fetch paragraphs
        const paragraphs = await fetchData();
        // // Get random paragraph
        const randomParagraph = paragraphs[Math.floor(Math.random() * paragraphs.length + 1)].paragraph;
        // Display paragraph
        displayParagraph(randomParagraph);
    };

    async function fetchData() {
        return fetch('./paragraphs.json')
            .then(resp => {
                if(!resp.ok) {
                    return new Error('Unable to fetch data. Please retry.');
                };
                return resp.json();
            });
    };

    function displayParagraph(paragraph) {
        displayParagraphSection.replaceChildren();

        const paragraphElement = document.createElement('h3');
        paragraphElement.innerHTML = paragraph;
        
        displayParagraphSection.appendChild(paragraphElement);
        return;
    };

}) ()
