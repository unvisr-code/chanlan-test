document.addEventListener("DOMContentLoaded", () => {
    const resultImage = document.querySelector(".result-image");
    const resultTitle = document.querySelector(".question");
    const resultDescription = document.querySelector(".sub-question");

    // localStorage에서 topCategory 가져오기
    const topCategory = localStorage.getItem("topCategory");

    const categoryMap = {
        "facilities": { title: "work 찬란이", image: "/src/facilities.png", description: "취업? 내가 시켜줄게! 특기가 취업인 찬란이 입니다!" },
        "policy": { title: "policy 찬란이", image: "/src/policy.png", description: "정책은 나한테 맡겨! 정책 전문가 찬란이입니다!" },
        "culture": { title: "culture 찬란이", image: "/src/Culture.png", description: "문화 예술 분야에 특화된 찬란이입니다!" },
        "communication, welfare": { title: "communication 찬란이", image: "/src/welfare.png", description: "소통과 복지 전문가 찬란이입니다!" },
        "employment, education": { title: "employment 찬란이", image: "/src/Employment.png", description: "교육 및 취업 지원에 특화된 찬란이입니다!" }
    };

    if (topCategory && categoryMap[topCategory]) {
        const categoryData = categoryMap[topCategory];
        resultImage.style.backgroundImage = `url('${categoryData.image}')`;
        resultTitle.innerText = categoryData.title;
        resultDescription.innerText = categoryData.description;
    } else {
        resultTitle.innerText = "결과를 불러오는 데 문제가 발생했습니다.";
        resultDescription.innerText = "";
    }

    // 슬라이더 텍스트 애니메이션을 위한 각 글자에 span 태그 추가
    const sliderPlaceholder = document.querySelector(".slider-placeholder");
    const text = "밀어서 마스코트 알아보기";
    sliderPlaceholder.innerHTML = [...text].map(
        (char, i) => `<span style="--i: ${i}">${char}</span>`
    ).join("");
});

// 슬라이더 잠금 해제 기능 및 터치/드래그 설정
const slider = document.getElementById("slider");
const lockMessage = document.getElementById("lockMessage");
let isDragging = false;

slider.addEventListener("mousedown", startDragging);
slider.addEventListener("touchstart", startDragging, { passive: true });

document.addEventListener("mousemove", onDragging);
document.addEventListener("touchmove", onDragging, { passive: true });

document.addEventListener("mouseup", stopDragging);
document.addEventListener("touchend", stopDragging);

function startDragging(e) {
    isDragging = true;
}

function onDragging(e) {
    if (!isDragging) return;

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const container = slider.parentElement;
    const containerRect = container.getBoundingClientRect();
    const sliderRect = slider.getBoundingClientRect();
    let newLeft = clientX - containerRect.left - sliderRect.width / 2;

    if (newLeft < 0) newLeft = 0;
    if (newLeft > containerRect.width - sliderRect.width) newLeft = containerRect.width - sliderRect.width;

    slider.style.left = `${newLeft}px`;

    // 슬라이더가 텍스트를 지나면 해당 글자를 즉시 숨김 처리
    const spans = document.querySelectorAll(".slider-placeholder span");
    spans.forEach((span) => {
        const spanRect = span.getBoundingClientRect();
        const sliderRightEdge = newLeft + sliderRect.width;

        // 슬라이더의 오른쪽 가장자리가 각 글자의 왼쪽 가장자리를 지나면 글자를 즉시 숨김
        if (sliderRightEdge > spanRect.left) {
            span.style.opacity = "0";
        } else {
            span.style.opacity = "1";
        }
    });

    if (newLeft >= containerRect.width - sliderRect.width) {
        unlock();
    }
}

function stopDragging() {
    if (isDragging) {
        // 슬라이더가 처음 위치로 돌아오면 모든 텍스트를 다시 표시
        slider.style.left = "0px";
        resetTextOpacity();
        isDragging = false;
    }
}

function resetTextOpacity() {
    document.querySelectorAll(".slider-placeholder span").forEach((span) => {
        span.style.opacity = "1";
    });
}

function unlock() {
    slider.style.backgroundColor = "#76C7C0";
    lockMessage.style.display = "block";
    isDragging = false;

    openBottomSheet();
}

// 바텀시트 열기 함수
function openBottomSheet() {
    document.getElementById("bottomSheet").classList.add("show");
    document.getElementById("bottomSheet").classList.remove("hidden");
    document.querySelector(".option").classList.add("hidden");
}

// 바텀시트 닫기 함수
function closeBottomSheet() {
    const bottomSheet = document.getElementById("bottomSheet");

    // 닫기 애니메이션을 위해 'hide' 클래스를 추가하고 'show' 클래스를 제거
    bottomSheet.classList.remove("show");
    bottomSheet.classList.add("hide");

    // 애니메이션 종료 후 'hidden' 클래스를 추가하여 완전히 숨기기
    bottomSheet.addEventListener("animationend", () => {
        bottomSheet.classList.add("hidden");
        bottomSheet.classList.remove("hide");
    }, { once: true });

    // 슬라이더 및 텍스트 초기화
    slider.style.left = "0px";
    slider.style.backgroundColor = "";
    lockMessage.style.display = "none";
    resetTextOpacity();
    isDragging = false;
    document.querySelector(".option").classList.remove("hidden");
}

// "모든 마스코트 보기" 버튼 이벤트
document.querySelector(".option").addEventListener("click", () => {
    window.location.href = "/all_mascots/All.html";
});
