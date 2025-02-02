const textElement = document.querySelector(".multiple-text");
const texts = [
    "Frontend Developer",
    "Video Editor",
    "Web Designer",
    // "Web Enthusiast"
];

let currentIndex = 0;
let textLength = 0;
let isErasing = false;

function changeText() {
    const currentText = texts[currentIndex];
    if (isErasing) {
        // Erase text character by character
        textElement.textContent = currentText.substring(0, textLength);
        textLength--;
        if (textLength === 0) {
            isErasing = false;
            currentIndex = (currentIndex + 1) % texts.length;  // Loop to the next text
        }
    } else {
        // Type text character by character
        textElement.textContent = currentText.substring(0, textLength);
        textLength++;
        if (textLength === currentText.length) {
            isErasing = true;  // Start erasing once the text is fully typed
        }
    }
}

// Change text every 100ms (typing speed)
setInterval(changeText, 100);
