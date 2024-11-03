const slider = document.getElementById("slider");
const lockMessage = document.getElementById("lockMessage");
let isDragging = false;

slider.addEventListener("mousedown", (e) => {
    isDragging = true;
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        const container = slider.parentElement;
        const containerRect = container.getBoundingClientRect();
        const sliderRect = slider.getBoundingClientRect();
        let newLeft = e.clientX - containerRect.left - sliderRect.width / 2;

        if (newLeft < 0) newLeft = 0;
        if (newLeft > containerRect.width - sliderRect.width) newLeft = containerRect.width - sliderRect.width;

        slider.style.left = `${newLeft}px`;

        if (newLeft >= containerRect.width - sliderRect.width) {
            unlock();
        }
    }
});

document.addEventListener("mouseup", () => {
    if (isDragging) {
        slider.style.left = "0px";
    }
    isDragging = false;
});

function unlock() {
    slider.style.backgroundColor = "#76C7C0";
    lockMessage.style.display = "block";
    isDragging = false;

    slider.removeEventListener("mousedown", startDragging);
    document.removeEventListener("mousemove", onDragging);
}
