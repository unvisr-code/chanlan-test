// 마스코트 정보를 정의합니다.
const mascotInfo = {
    "employment": {
        title: "employment 찬란이",
        description: "일을 사랑하고, 여러분의 취업을 응원하는 찬란이입니다."
    },
    "education": {
        title: "education 찬란이",
        description: "모르는거? 나한테 물어봐! 누구보다 가르치는걸 좋아하는 찬란이 입니다."
    },
    "culture": {
        title: "culture 찬란이",
        description: "문화와 예술을 사랑하는 찬란이입니다."
    },
    "communication": {
        title: "communication 찬란이",
        description: "소통과 이해에 힘쓰는 찬란이입니다."
    },
    "welfare": {
        title: "welfare 찬란이",
        description: "복지와 평등을 중요시하는 찬란이입니다."
    },
    "facilities": {
        title: "facilities 찬란이",
        description: "안전하고 편리한 장소를 책임지는 찬란이입니다."
    },
    "policy": {
        title: "policy 찬란이",
        description: "법과 규칙을 준수하며 정의로운 찬란이입니다."
    }
};

// 팝업을 표시하는 함수
function showPopup(type) {
    const popup = document.getElementById("popup");
    const titleElement = document.getElementById("popup-title");
    const descriptionElement = document.getElementById("popup-description");
    const viewButton = document.querySelector(".popup-buttons button.view-button");

    // 선택된 마스코트 정보를 팝업에 설정
    const info = mascotInfo[type];
    titleElement.innerText = info.title;
    descriptionElement.innerText = info.description;

    // "공약 보기" 버튼에 맞는 URL을 설정
    viewButton.onclick = () => {
        window.location.href = `https://chanlan-sejong.kr/${type}`;
    };

    // 팝업 표시
    popup.classList.remove("hidden");
}

// 팝업을 닫는 함수
function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.add("hidden");
}

// 각 마스코트에 클릭 이벤트 추가
document.querySelectorAll(".mascot-item").forEach((item) => {
    item.addEventListener("click", () => {
        const type = item.getAttribute("data-type"); // data-type 속성을 사용하여 유형을 가져옴
        showPopup(type);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const tooltip = document.querySelector(".tooltip-message");
    tooltip.classList.remove("hidden");

    // 2초 후에 tooltip을 완전히 숨기기 위해 hidden 클래스를 다시 추가
    setTimeout(() => {
        tooltip.classList.add("hidden");
    }, 2000); // fadeInOut 애니메이션 시간에 맞춰 2초 후에 숨김
});
