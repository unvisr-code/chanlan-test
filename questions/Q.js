// 질문 목록
const questions = [{
    "question": "친구와 여행할 때 중요하게\n 생각하는 것은?",
    "options": [
        {"answer": "숙소", "weight": {"facilities": 1}},
        {"answer": "관광지 평점", "weight": {"policy": 1}},
        {"answer": "즐길거리(음식)", "weight": {"culture": 1}},
        {"answer": "친구 의견", "weight": {"communication": 1}},
        {"answer": "안전", "weight": {"employment": 1}}
    ]
},
{
    "question": "내가 복전 할 수 있다면\n 하고 싶은 전공은?",
    "options": [
        {"answer": "건축학과", "weight": {"facilities": 1}},
        {"answer": "정치외교학과", "weight": {"policy": 1}},
        {"answer": "레크레이션학과", "weight": {"culture": 1}},
        {"answer": "미디어 커뮤니케이션학", "weight": {"communication": 1}},
        {"answer": "교육학과", "weight": {"education": 1}}
    ]
},
{
    "question": "이 중 한 명과 연애해야 한다면?",
    "options": [
        {"answer": "집 있는 애인", "weight": {"facilities": 1}},
        {"answer": "데이트 코스 짜오는 연인", "weight": {"policy": 1}},
        {"answer": "관심사가 잘 맞는 애인", "weight": {"culture": 1}},
        {"answer": "대화가 잘 통하는 애인", "weight": {"communication": 1}},
        {"answer": "취업한 애인", "weight": {"employment": 1}}
    ]
},
{
    "question": "이중 한 명과 친해질 수 있다면?",
    "options": [
        {"answer": "건설공", "weight": {"facilities": 1}},
        {"answer": "정치인", "weight": {"policy": 1}},
        {"answer": "축제 MC", "weight": {"culture": 1}},
        {"answer": "사회봉사자", "weight": {"welfare": 1}},
        {"answer": "교사", "weight": {"education": 1}}
    ]
},
{
    "question": "이중 한 명과 친해질 수 있다면?",
    "options": [
        {"answer": "건설공", "weight": {"facilities": 1}},
        {"answer": "정치인", "weight": {"policy": 1}},
        {"answer": "축제 MC", "weight": {"culture": 1}},
        {"answer": "사회봉사자", "weight": {"welfare": 1}},
        {"answer": "교사", "weight": {"education": 1}}
    ]
},
{
    "question": "학교 생활 하면서 실현 됐으면\n 좋겠는 것은?",
    "options": [
        {"answer": "지하 캠퍼스", "weight": {"facilities": 1}},
        {"answer": "4년간 수강신청 올클", "weight": {"policy": 1}},
        {"answer": "잔디밭 세종대", "weight": {"culture": 1}},
        {"answer": "친구 100명", "weight": {"communication": 1}},
        {"answer": "전공교수님과 베프", "weight": {"education": 1}}
    ]
},
{
    "question": "당신이 요식업 창업을\n 시작한다면 무엇을 가장\n 중요하게 생각할 것인가?",
    "options": [
        {"answer": "인테리어", "weight": {"facilities": 1}},
        {"answer": "가게 메뉴얼", "weight": {"policy": 1}},
        {"answer": "사람들의 메뉴 선호도", "weight": {"culture": 1}},
        {"answer": "가게 SNS", "weight": {"communication": 1}},
        {"answer": "알바생 뽑기", "weight": {"employment": 1}}
    ]
}];

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

// 질문 순서 섞기
shuffle(questions);

// 초기 질문 표시
displayQuestion();

// 진행 바 업데이트 함수
function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const progressPercent = document.getElementById("progress-percent");
    const progressIcon = document.getElementById("progress-icon");

    // 마지막 질문에서는 86%로 유지
    const progressPercentage = (currentQuestion === totalQuestions - 1)
        ? 86
        : (currentQuestion / totalQuestions) * 100;

    progressBar.style.width = progressPercentage + '%';
    progressPercent.innerHTML = `${progressPercentage.toFixed(0)}%`;

    // progress-icon의 위치 업데이트
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

// 답변 처리 함수
function handleAnswer(weight) {
    for (let key in weight) {
        scores[key] = (scores[key] || 0) + weight[key];
    }
    currentQuestion++;

    // 모든 질문에 답변 완료 후 100%로 업데이트
    if (currentQuestion === totalQuestions) {
        updateProgressBar(); // 100%로 업데이트
        disableOptions(); // 모든 옵션 비활성화
        determineCategory();  // 결과 표시
    } else {
        displayQuestion();
    }
}

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



// 카테고리 결정 및 결과 표시
function determineCategory() {
    const topCategory = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

    // 로딩 화면 표시
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.innerHTML = `
        <div class="popup-content">
            <p>나에게 맞는 공약을<br> 찾는중이에요!</p>
            <div class="loading-images"></div> <!-- 순차 이미지 애니메이션 -->
        </div>
    `;
    document.body.appendChild(popup);

    // 순차적으로 이미지 보여주는 함수 호출
    startLoadingImages();

    // 4.5초 후에 팝업을 제거하고 결과 페이지로 이동
    setTimeout(() => {
        document.body.removeChild(popup); // 팝업 제거

        // 최고 카테고리를 localStorage에 저장
        localStorage.setItem("topCategory", topCategory);

        // 결과 페이지로 이동
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

    // 랜덤으로 3개의 이미지를 선택
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


// 결과 표시 함수
// 결과 표시 함수
function displayResults(category) {
    document.getElementById("progress-bar").style.width = '100%';
    document.getElementById("progress-percent").innerHTML = '100%';
    const resultImage = document.getElementById("result-image");
    const resultDepartment = document.getElementById("result-department");

    // 카테고리 이름을 파일 경로에 맞게 변환
    const categoryMap = {
        "facilities": "facilities.png",
        "policy": "policy.png",
        "culture": "culture.png",
        "communication": "communication.png",
        "employment": "employment.png",
        "welfare": "welfare.png",
        "education": "education.png"
    };

    // 결과 이미지 설정
    resultImage.style.display = 'block';
    resultImage.style.backgroundImage = `url('/src/${categoryMap[category]}')`;

    // 결과 텍스트 및 설명 추가
    resultDepartment.innerHTML = `<div class="result-text">${category} 공약을 추천드려요!</div>`;
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
