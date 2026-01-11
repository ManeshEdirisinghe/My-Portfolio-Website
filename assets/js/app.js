const flashlight = document.getElementById('flashlight');
const cursorCircle = document.getElementById('cursor-circle');

// Only enable custom cursor on non-touch devices
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (!isTouchDevice) {
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;

        flashlight.style.transform = `translate(${x - 110}px, ${y - 110}px)`;
        cursorCircle.style.transform = `translate(${x}px, ${y}px)`;
    });

    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => {
            flashlight.style.width = '300px';
            flashlight.style.height = '300px';
            cursorCircle.style.width = '25px';
            cursorCircle.style.height = '25px';
        });

        el.addEventListener('mouseleave', () => {
            flashlight.style.width = '220px';
            flashlight.style.height = '220px';
            cursorCircle.style.width = '15px';
            cursorCircle.style.height = '15px';
        });
    });
} else {
    // Hide cursor elements on touch devices
    flashlight.style.display = 'none';
    cursorCircle.style.display = 'none';
}
