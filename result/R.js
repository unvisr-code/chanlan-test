document.addEventListener("DOMContentLoaded", () => {
    const resultImage = document.querySelector(".result-image");
    const resultTitle = document.querySelector(".question");
    const resultDescription = document.querySelector(".sub-question");

    // localStorage에서 topCategory 가져오기
    const topCategory = localStorage.getItem("topCategory");

    // 브라우저 언어 감지
    const userLanguage = navigator.language || navigator.userLanguage;
    const lang = userLanguage.split('-')[0]; // "en" 또는 "ko"

    // 카테고리 맵
    const categoryMap = {
        "facilities": {
            title: lang === 'en' ? "Facilities Chanlan" : "시설 찬란이",
            image: "/src/facilities.png",
            description: lang === 'en' ? "I specialize in facilities!" : "취업? 내가 시켜줄게! 특기가 취업인 찬란이 입니다!"
        },
        "policy": {
            title: lang === 'en' ? "Policy Chanlan" : "정책 찬란이",
            image: "/src/policy.png",
            description: lang === 'en' ? "Leave the policies to me!" : "정책은 나한테 맡겨! 정책 전문가 찬란이입니다!"
        },
        "culture": {
            title: lang === 'en' ? "Culture Chanlan" : "문화 찬란이",
            image: "/src/culture.png",
            description: lang === 'en' ? "I’m specialized in culture and arts!" : "문화 예술 분야에 특화된 찬란이입니다!"
        },
        "communication": {
            title: lang === 'en' ? "Communication Chanlan" : "소통 찬란이",
            image: "/src/communication.png",
            description: lang === 'en' ? "I excel in communication!" : "소통 전문가 찬란이입니다!"
        },
        "welfare": {
            title: lang === 'en' ? "Welfare Chanlan" : "복지 찬란이",
            image: "/src/welfare.png",
            description: lang === 'en' ? "Valuing welfare and equality." : "복지와 평등을 중요시하는 찬란이입니다."
        },
        "education": {
            title: lang === 'en' ? "Education Chanlan" : "교육 찬란이",
            image: "/src/education.png",
            description: lang === 'en' ? "Got questions? Ask me! I love teaching more than anyone." : "모르는거? 나한테 물어봐! 누구보다 가르치는걸 좋아하는 찬란이 입니다."
        },
        "employment": {
            title: lang === 'en' ? "Employment Chanlan" : "취업 찬란이",
            image: "/src/employment.png",
            description: lang === 'en' ? "I specialize in employment support!" : "교육 및 취업 지원에 특화된 찬란이입니다!"
        }
    };

    if (topCategory && categoryMap[topCategory]) {
        const categoryData = categoryMap[topCategory];
        resultImage.style.backgroundImage = `url('${categoryData.image}')`;
        resultTitle.innerText = categoryData.title;
        resultDescription.innerText = categoryData.description;
    } else {
        resultTitle.innerText = lang === 'en' ? "There was a problem loading the results." : "결과를 불러오는 데 문제가 발생했습니다.";
        resultDescription.innerText = "";
    }

    // 슬라이더 텍스트 애니메이션을 위한 각 글자에 span 태그 추가
    const sliderPlaceholder = document.querySelector(".slider-placeholder");
    const text = lang === 'en' ? "Swipe to learn more" : "밀어서 마스코트 알아보기";
    sliderPlaceholder.innerHTML = [...text].map(
        (char, i) => `<span style="--i: ${i}">${char}</span>`
    ).join("");

    // "모든 마스코트 보기" 버튼 이벤트 리스너 추가
    const optionButton = document.querySelector(".option");
    optionButton.textContent = lang === 'en' ? "View All Mascots" : "모든 마스코트 보기";
    optionButton.addEventListener("click", () => {
        window.location.href = "/all_mascots/All.html";
    });

    // 바텀시트 텍스트 설정
    bottomSheetText.textContent = lang === 'en' ? "Coming soon!" : "준비중이에요!";

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

    // 언어에 따라 "모든 마스코트 보기" 버튼 텍스트 변경
    const optionText = document.querySelector(".option");
    const lang = navigator.language.split('-')[0];
    optionText.textContent = lang === 'en' ? "View All Mascots" : "모든 마스코트 보기";
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
}

// "닫기" 버튼 텍스트 변경
const closeButton = document.querySelector(".close-button");
const lang = navigator.language.split('-')[0];
closeButton.textContent = lang === 'en' ? "Close" : "닫기";
