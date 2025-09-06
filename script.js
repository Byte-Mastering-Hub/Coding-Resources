document.addEventListener('DOMContentLoaded', () => {
    // --- Typing Animation Logic ---
    const texts = ["HTML", "CSS", "JavaScript", "Python", "C"];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';
    const speed = 150;
    const typingElement = document.querySelector('.typing');

    function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        typingElement.textContent = letter;

        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000); // Longer pause after a word is typed
        } else {
            setTimeout(type, speed);
        }
    }
    type(); // Start the typing animation

    // --- Dynamic Content Loading Logic ---
    const logoGrid = document.getElementById('logoGrid');
    const resourceContainer = document.getElementById('resourceContainer');
    
    // An object to hold the HTML content for each language page
    const resourceContent = {
        'html-content': `
            <section class="content-section">
                <button class="back-button">&larr; Back to Home</button>
                <h1>HTML Tutorial and Notes</h1>
                <h2>HTML Tutorial Video</h2>
                <div class="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/k2DSi1zGEc8?si=ux0fGHlOSEniqMjb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div class="notes-section">
                    <h2>About HTML</h2>
                    <p>HTML (HyperText Markup Language) is the standard language for creating web pages. It provides the structure for web content. Key concepts include:</p>
                    <ul>
                        <li>HTML tags define the elements of a webpage.</li>
                        <li>Common tags include: <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;div&gt;</code>, and <code>&lt;img&gt;</code>.</li>
                        <li>Attributes like <code>src</code> for images and <code>href</code> for links provide additional information.</li>
                    </ul>
                </div>
            </section>
        `,
        'css-content': `
            <section class="content-section">
                <button class="back-button">&larr; Back to Home</button>
                <h1>CSS Tutorial and Notes</h1>
                <h2>CSS Tutorial Video</h2>
                <div class="video-container">
                     <iframe width="560" height="315" src="https://www.youtube.com/embed/ESnrn1kAD4E?si=jKt1Qge0h-HQVXxI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div class="notes-section">
                    <h2>About CSS</h2>
                    <p>CSS (Cascading Style Sheets) is used to style and layout web pages. It controls the visual appearance of HTML elements. Key concepts include:</p>
                    <ul>
                        <li>CSS allows you to apply styles like colors, fonts, and spacing to HTML elements.</li>
                        <li>Selectors like <code>element</code>, <code>class</code> (<code>.classname</code>), and <code>id</code> (<code>#idname</code>) target specific HTML elements.</li>
                        <li>Common properties include <code>color</code>, <code>font-size</code>, <code>margin</code>, and <code>padding</code>.</li>
                    </ul>
                </div>
            </section>
        `,
        'js-content': `
            <section class="content-section">
                <button class="back-button">&larr; Back to Home</button>
                <h1>JavaScript Tutorial and Notes</h1>
                <h2>JavaScript Tutorial Video</h2>
                <div class="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/VlPiVmYuoqw?si=y8Mq8pAUlEPl1STp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div class="notes-section">
                    <h2>About JavaScript</h2>
                    <p>JavaScript is a programming language used to create interactive effects within web browsers. It adds behavior to web pages. Key concepts include:</p>
                    <ul>
                        <li>JavaScript can change HTML content and styles dynamically.</li>
                        <li>Common features include variables, functions, loops, and events.</li>
                        <li>JavaScript is the foundation of web technologies like React, Angular, and Node.js.</li>
                    </ul>
                </div>
            </section>
        `,
        'python-content': `
            <section class="content-section">
                <button class="back-button">&larr; Back to Home</button>
                <h1>Python Tutorial and Notes</h1>
                <h2>Python Tutorial Video</h2>
                <div class="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/UrsmFxEIp5k?si=xnyuqQhbG4-dYTHg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div class="notes-section">
                    <h2>About Python</h2>
                    <p>Python is a high-level, interpreted programming language known for its simplicity and versatility. Key concepts include:</p>
                    <ul>
                        <li>Python uses a clean and readable syntax with indentation to define code blocks.</li>
                        <li>It supports object-oriented, procedural, and functional programming paradigms.</li>
                        <li>Common libraries: <code>numpy</code>, <code>pandas</code>, <code>Django</code>, and <code>Flask</code>.</li>
                    </ul>
                </div>
            </section>
        `,
        'c-content': `
            <section class="content-section">
                <button class="back-button">&larr; Back to Home</button>
                <h1>C Tutorial and Notes</h1>
                <h2>C Tutorial Video</h2>
                <div class="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/aZb0iu4uGwA?si=pprlGzME8NeBU8S4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div class="notes-section">
                    <h2>About C Language</h2>
                    <p>C is a general-purpose, procedural programming language that has influenced many other languages. Key concepts include:</p>
                    <ul>
                        <li>C uses structured programming with functions and procedures.</li>
                        <li>Common concepts: pointers, arrays, loops, and memory management.</li>
                        <li>C provides low-level access to memory and is often used in operating system development.</li>
                    </ul>
                </div>
            </section>
        `
    };

    logoGrid.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        const targetLink = e.target.closest('a');
        if (!targetLink) return;

        const targetId = targetLink.dataset.target;
        if (resourceContent[targetId]) {
            // Fade out logo grid
            logoGrid.style.opacity = '0';
            setTimeout(() => {
                logoGrid.style.display = 'none';
                
                // Show the resource content
                resourceContainer.innerHTML = resourceContent[targetId];
                resourceContainer.style.display = 'block';
                setTimeout(() => {
                    resourceContainer.style.opacity = '1';
                }, 50); // Small delay to trigger transition
            }, 500); // Match this with CSS transition time
        }
    });

    resourceContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('back-button')) {
            // Fade out resource content
            resourceContainer.style.opacity = '0';
            setTimeout(() => {
                resourceContainer.style.display = 'none';
                resourceContainer.innerHTML = ''; // Clear content

                // Show the logo grid
                logoGrid.style.display = 'flex';
                setTimeout(() => {
                    logoGrid.style.opacity = '1';
                }, 50);
            }, 500);
        }
    });
});
