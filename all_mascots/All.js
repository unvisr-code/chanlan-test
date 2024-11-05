// 마스코트 정보를 정의합니다.
const mascotInfo = {
    "employment": {
        title: {
            ko: "취업 찬란이",
            en: "Employment Chanlan"
        },
        description: {
            ko: "일을 사랑하고, 여러분의 취업을 응원하는 찬란이입니다.",
            en: "Passionate about work, here to support your career."
        }
    },
    "education": {
        title: {
            ko: "교육 찬란이",
            en: "Education Chanlan"
        },
        description: {
            ko: "모르는거? 나한테 물어봐! 누구보다 가르치는걸 좋아하는 찬란이 입니다.",
            en: "Got questions? Ask me! I love teaching more than anyone."
        }
    },
    "culture": {
        title: {
            ko: "문화 찬란이",
            en: "Culture Chanlan"
        },
        description: {
            ko: "문화와 예술을 사랑하는 찬란이입니다.",
            en: "I love culture and the arts."
        }
    },
    "communication": {
        title: {
            ko: "소통 찬란이",
            en: "Communication Chanlan"
        },
        description: {
            ko: "소통과 이해에 힘쓰는 찬란이입니다.",
            en: "Dedicated to communication and understanding."
        }
    },
    "welfare": {
        title: {
            ko: "복지 찬란이",
            en: "Welfare Chanlan"
        },
        description: {
            ko: "복지와 평등을 중요시하는 찬란이입니다.",
            en: "Valuing welfare and equality."
        }
    },
    "facilities": {
        title: {
            ko: "시설 찬란이",
            en: "Facilities Chanlan"
        },
        description: {
            ko: "안전하고 편리한 장소를 책임지는 찬란이입니다.",
            en: "Ensuring safe and convenient facilities."
        }
    },
    "policy": {
        title: {
            ko: "정책 찬란이",
            en: "Policy Chanlan"
        },
        description: {
            ko: "법과 규칙을 준수하며 정의로운 찬란이입니다.",
            en: "Dedicated to law and fairness."
        }
    }
};

// 팝업을 표시하는 함수
function showPopup(type) {
    const popup = document.getElementById("popup");
    const titleElement = document.getElementById("popup-title");
    const descriptionElement = document.getElementById("popup-description");
    const viewButton = document.querySelector(".popup-buttons .view-button");

    // 브라우저 언어 감지
    const userLanguage = navigator.language || navigator.userLanguage;
    const lang = userLanguage.split('-')[0] === 'en' ? 'en' : 'ko'; // "en" 또는 "ko"로 설정

    // 선택된 마스코트 정보를 팝업에 설정
    const info = mascotInfo[type];
    titleElement.innerText = info.title[lang];
    descriptionElement.innerText = info.description[lang];

    // "공약 보기" 버튼에 맞는 텍스트와 URL을 설정
    viewButton.innerText = lang === 'en' ? "View Policy" : "공약 보기";
    viewButton.onclick = () => {
        window.location.href = `https://chanlan-sejong.kr/${type}`;
    };

    // 닫기 버튼 텍스트도 설정
    document.querySelector(".popup-buttons button").innerText = lang === 'en' ? "Close" : "닫기";

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

// 페이지가 로드될 때 도구 설명 메시지와 footer 텍스트, mascot-grid 텍스트를 설정하는 함수
document.addEventListener("DOMContentLoaded", () => {
    const tooltip = document.querySelector(".tooltip-message");
    const footerText = document.querySelector(".footer-text");
    const userLanguage = navigator.language || navigator.userLanguage;
    const lang = userLanguage.split('-')[0] === 'en' ? 'en' : 'ko';

    // Tooltip 메시지 설정
    tooltip.innerText = lang === 'en' ? "Click on each mascot to learn more!" : "각 마스코트를 클릭해보세요!";
    tooltip.classList.remove("hidden");

    // Footer 텍스트 설정
    footerText.innerText = lang === 'en' 
        ? "38th Student Council Election Campaign Team,\n Candidate No. N, Chanlan" 
        : "제38대 총학생회 선거운동본부 기호 n번 찬란";

    // 각 마스코트 항목의 텍스트를 언어 설정에 따라 업데이트
    document.querySelectorAll(".mascot-item").forEach((item) => {
        const type = item.getAttribute("data-type");
        const info = mascotInfo[type];
        const nameElement = item.querySelector("p");
        nameElement.innerText = info.title[lang];
    });

    // 2초 후에 tooltip을 완전히 숨기기 위해 hidden 클래스를 다시 추가
    setTimeout(() => {
        tooltip.classList.add("hidden");
    }, 2000); // fadeInOut 애니메이션 시간에 맞춰 2초 후에 숨김
});
