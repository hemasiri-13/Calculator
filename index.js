let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('btn'));

// ✅ Function to resize font based on content length
function autoResizeFont() {
    const length = display.innerText.length;

    if (length > 15) {
        display.style.fontSize = "1.2rem";
    } else if (length > 10) {
        display.style.fontSize = "1.5rem";
    } else if (length > 6) {
        display.style.fontSize = "2rem";
    } else {
        display.style.fontSize = "2.5rem";
    }
}

buttons.map((button) => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'Clear':
                display.innerText = '';
                break;

            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error";
                }
                break;

            case 'Del':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;

            default:
                display.innerText += e.target.innerText;
        }

        // Call font resize after every update
        autoResizeFont();
    });
});
