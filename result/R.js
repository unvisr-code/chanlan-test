document.addEventListener("DOMContentLoaded", () => {
    const resultImage = document.querySelector(".result-image");
    const resultTitle = document.querySelector(".question");
    const resultDescription = document.querySelector(".sub-question");

    // localStorage에서 topCategory 가져오기
    const topCategory = localStorage.getItem("topCategory");

    // 카테고리별 이미지 및 설명 설정
    const categoryMap = {
        "facilities": { title: "work 찬란이", image: "/src/facilities.png", description: "취업? 내가 시켜줄게! 특기가 취업인 찬란이 입니다!" },
        "policy": { title: "policy 찬란이", image: "/src/policy.png", description: "정책은 나한테 맡겨! 정책 전문가 찬란이입니다!" },
        "culture": { title: "culture 찬란이", image: "/src/Culture.png", description: "문화 예술 분야에 특화된 찬란이입니다!" },
        "communication, welfare": { title: "communication 찬란이", image: "/src/welfare.png", description: "소통과 복지 전문가 찬란이입니다!" },
        "employment, education": { title: "employment 찬란이", image: "/src/Employment.png", description: "교육 및 취업 지원에 특화된 찬란이입니다!" }
    };

    // topCategory가 존재하고 유효할 경우 해당 이미지 및 설명 설정
    if (topCategory && categoryMap[topCategory]) {
        const categoryData = categoryMap[topCategory];
        resultImage.style.backgroundImage = `url('${categoryData.image}')`;
        resultTitle.innerText = categoryData.title;
        resultDescription.innerText = categoryData.description;
    } else {
        resultTitle.innerText = "결과를 불러오는 데 문제가 발생했습니다.";
        resultDescription.innerText = "";
    }
});

// 슬라이더 잠금 해제 기능
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

    // 잠금 해제 후 추가 동작을 원한다면 이곳에 추가 코드 작성
}

// "모든 마스코트 보기" 버튼 이벤트
document.querySelector(".option").addEventListener("click", () => {
    window.location.href = "/all_mascots/All.html";
});
