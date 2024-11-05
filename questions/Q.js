// 브라우저 언어 설정 감지
const userLanguage = navigator.language || navigator.userLanguage;
const lang = userLanguage.split('-')[0]; // "en" 또는 "ko"

// 질문 목록
const questions = [
    {
        "question": lang === 'en' ? "What is important to you when traveling with friends?" : "친구와 여행할 때 중요하게\n생각하는 것은?",
        "options": [
            {"answer": lang === 'en' ? "Accommodation" : "숙소", "weight": {"facilities": 1}},
            {"answer": lang === 'en' ? "Tourist spot ratings" : "관광지 평점", "weight": {"policy": 1}},
            {"answer": lang === 'en' ? "Activities" : "즐길거리", "weight": {"culture": 1}},
            {"answer": lang === 'en' ? "Friends' opinions" : "친구 의견", "weight": {"communication": 1}},
            {"answer": lang === 'en' ? "Travel expenses" : "여행 경비", "weight": {"employment": 1}}
        ]
    },
    {
        "question": lang === 'en' ? "If I could double major, I would choose...?" : "내가 복전 할 수 있다면\n하고 싶은 전공은?",
        "options": [
            {"answer": lang === 'en' ? "Architecture" : "건축학과", "weight": {"facilities": 2}},
            {"answer": lang === 'en' ? "Political Science" : "정치외교학과", "weight": {"policy": 2}},
            {"answer": lang === 'en' ? "Media Communication" : "미디어 커뮤니케이션학", "weight": {"communication": 2}},
            {"answer": lang === 'en' ? "Education" : "교육학과", "weight": {"education": 1}},
            {"answer": lang === 'en' ? "Business Administration" : "경영학과", "weight": {"employment": 2}}
        ]
    },
    {
        "question": lang === 'en' ? "Who would you prefer to date?" : "이 중 한 명과 연애해야 한다면?",
        "options": [
            {"answer": lang === 'en' ? "Partner who plans dates" : "데이트 코스 짜오는 연인", "weight": {"policy": 3}},
            {"answer": lang === 'en' ? "Partner with similar interests" : "관심사가 잘 맞는 애인", "weight": {"culture": 2}},
            {"answer": lang === 'en' ? "Good communicator" : "대화가 잘 통하는 애인", "weight": {"communication": 3}},
            {"answer": lang === 'en' ? "Partner who takes initiative" : "솔선수범하는 애인", "weight": {"welfare": 1}},
            {"answer": lang === 'en' ? "Partner with something to learn from" : "배울점 있는 애인", "weight": {"education": 2}}
        ]
    },
    {
        "question": lang === 'en' ? "If you could be friends with someone, who would it be?" : "이중 한 명과 친해질 수 있다면?",
        "options": [
            {"answer": lang === 'en' ? "Construction worker" : "건설공", "weight": {"facilities": 3}},
            {"answer": lang === 'en' ? "Festival MC" : "축제 MC", "weight": {"culture": 3}},
            {"answer": lang === 'en' ? "Volunteer" : "사회봉사자", "weight": {"welfare": 2}},
            {"answer": lang === 'en' ? "Teacher" : "교사", "weight": {"education": 3}},
            {"answer": lang === 'en' ? "Samsung interviewer" : "삼성 면접관", "weight": {"employment": 3}}
        ]
    },
    {
        "question": lang === 'en' ? "What do you hope will be realized in school life?" : "학교 생활 하면서 실현 됐으면\n좋겠는 것은?",
        "options": [
            {"answer": lang === 'en' ? "Underground campus" : "지하 캠퍼스", "weight": {"facilities": 4}},
            {"answer": lang === 'en' ? "Complete course registration" : "4년간 수강신청 올클", "weight": {"policy": 4}},
            {"answer": lang === 'en' ? "Lawn at Sejong University" : "잔디밭 세종대", "weight": {"culture": 4}},
            {"answer": lang === 'en' ? "Expanded lounge facilities" : "휴게시설 확대", "weight": {"welfare": 3}},
            {"answer": lang === 'en' ? "Bestie with my professor" : "전공교수님과 베프", "weight": {"education": 4}}
        ]
    },
    {
        "question": lang === 'en' ? "If you start a restaurant business, what will you prioritize?" : "당신이 요식업 창업을 시작한다면 무엇을 가장 중요하게 생각할 것인가?",
        "options": [
            {"answer": lang === 'en' ? "Interior" : "인테리어", "weight": {"facilities": 5}},
            {"answer": lang === 'en' ? "Store manual" : "가게 메뉴얼", "weight": {"policy": 5}},
            {"answer": lang === 'en' ? "Store's social media" : "가게 SNS", "weight": {"communication": 4}},
            {"answer": lang === 'en' ? "Meal allowances for staff" : "직원 식대", "weight": {"welfare": 4}},
            {"answer": lang === 'en' ? "Interviewing part-timers" : "알바생 면접", "weight": {"employment": 4}}
        ]
    },
    {
        "question": lang === 'en' ? "In a team project, which role would you like to take?" : "팀플 할 때 내가\n맞고 싶은 역할은?",
        "options": [
            {"answer": lang === 'en' ? "Making PPT" : "ppt 제작", "weight": {"culture": 5}},
            {"answer": lang === 'en' ? "Presenting" : "발표", "weight": {"communication": 5}},
            {"answer": lang === 'en' ? "Ice-breaking" : "아이스브레이킹", "weight": {"welfare": 5}},
            {"answer": lang === 'en' ? "Collecting data" : "자료 수집", "weight": {"education": 5}},
            {"answer": lang === 'en' ? "Interviewing professor" : "교수님 인터뷰", "weight": {"employment": 5}}
        ]
    }
];



// 질문 순서 섞기
shuffle(questions);

// 질문과 세부 질문
let currentQuestion = 0;
const scores = {
    "facilities": 0,
    "policy": 0,
    "culture": 0,
    "communication": 0,
    "welfare": 0,
    "employment": 0,
    "education": 0
};
const totalQuestions = questions.length;

// 초기 질문 표시
displayQuestion();

// 질문 표시 함수
function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.style.whiteSpace = "pre-wrap"; // 줄바꿈 처리
    questionElement.innerHTML = questions[currentQuestion].question;
    optionsElement.innerHTML = "";

    questions[currentQuestion].options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option.answer;
        button.className = "option";
        button.onclick = () => handleAnswer(option.weight);
        optionsElement.appendChild(button);
    });

    updateProgressBar(); // 진행 바 업데이트
}

// 답변 처리 함수
function handleAnswer(weight) {
    for (let key in weight) {
        scores[key] = (scores[key] || 0) + weight[key];
    }
    currentQuestion++;

    if (currentQuestion === totalQuestions) {
        updateProgressBar(); // 100%로 업데이트
        disableOptions(); // 모든 옵션 비활성화
        determineCategory();  // 결과 표시
    } else {
        displayQuestion();
    }
}

// 진행 바 업데이트 함수
function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const progressPercent = document.getElementById("progress-percent");
    const progressIcon = document.getElementById("progress-icon");

    const progressPercentage = (currentQuestion === totalQuestions - 1)
        ? 86
        : (currentQuestion / totalQuestions) * 100;

    progressBar.style.width = progressPercentage + '%';
    progressPercent.innerHTML = `${progressPercentage.toFixed(0)}%`;

    progressIcon.style.left = `calc(${progressPercentage}% - 20px)`;
}

// 옵션 버튼을 비활성화하는 함수
function disableOptions() {
    const options = document.querySelectorAll(".option");
    options.forEach(option => {
        option.disabled = true; // 버튼 비활성화
        option.style.cursor = "not-allowed"; // 비활성화 스타일
    });
}

// 카테고리 결정 및 결과 표시
function determineCategory() {
    const topCategory = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    // 로딩 화면 표시
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.innerHTML = `
        <div class="popup-content">
            <p>${lang === 'en' ? "Finding the best Pledge for you..." : "나에게 맞는 공약을 찾는중이에요!"}</p>
            <div class="loading-images"></div>
        </div>
    `;
    document.body.appendChild(popup);

    startLoadingImages(); // 이미지 애니메이션 시작

    setTimeout(() => {
        document.body.removeChild(popup); // 팝업 제거
        localStorage.setItem("topCategory", topCategory); // 최고 카테고리를 localStorage에 저장
        window.location.href = "/result/R.html"; // 결과 페이지로 이동
    }, 4500); // 4.5초 지연
}

// 이미지 순차 애니메이션 함수
function startLoadingImages() {
    const imageContainer = document.querySelector(".loading-images");
    const images = [
        "/src/culture.png",
        "/src/education.png",
        "/src/employment.png",
        "/src/facilities.png",
        "/src/policy.png",
        "/src/welfare.png",
        "/src/communication.png"
    ];

    const selectedImages = [];
    while (selectedImages.length < 3) {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        if (!selectedImages.includes(randomImage)) {
            selectedImages.push(randomImage);
        }
    }

    let currentImageIndex = 0;
    imageContainer.style.backgroundImage = `url(${selectedImages[currentImageIndex]})`;

    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % selectedImages.length;
        imageContainer.style.opacity = "0"; // 페이드 아웃
        setTimeout(() => {
            imageContainer.style.backgroundImage = `url(${selectedImages[currentImageIndex]})`;
            imageContainer.style.opacity = "1"; // 페이드 인
        }, 300); // 0.3초 후 이미지 전환
    }, 1500); // 1.5초마다 이미지 전환
}

// 배열 섞기 보조 함수
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 초기 질문 표시
displayQuestion();
