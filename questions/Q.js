// 질문 목록
const questions = [{
    "question": "친구와 여행할 때 중요하게 생각하는 것은?",
    "options": [
        {"answer": "숙소", "weight": {"시설": 1}},
        {"answer": "관광지 평점", "weight": {"정책": 1}},
        {"answer": "즐길거리", "weight": {"문화": 1}},
        {"answer": "친구 의견", "weight": {"소통,복지": 1}},
        {"answer": "안전", "weight": {"취업,교육": 1}}
    ]
},
{
    "question": "내가 복전 할 수 있다면 하고 싶은 전공은?",
    "options": [
        {"answer": "건축학과", "weight": {"시설": 1}},
        {"answer": "정치외교학과", "weight": {"정책": 1}},
        {"answer": "레크레이션학과", "weight": {"문화": 1}},
        {"answer": "미디어 커뮤니케이션학", "weight": {"소통,복지": 1}},
        {"answer": "교육학과", "weight": {"취업,교육": 1}}
    ]
},
{
    "question": "이 중 한 명과 연애해야 한다면?",
    "options": [
        {"answer": "집 있는 애인", "weight": {"시설": 1}},
        {"answer": "데이트 코스 짜오는 연인", "weight": {"정책": 1}},
        {"answer": "관심사가 잘 맞는 애인", "weight": {"문화": 1}},
        {"answer": "대화가 잘 통하는 애인", "weight": {"소통,복지": 1}},
        {"answer": "취업한 애인", "weight": {"취업,교육": 1}}
    ]
},
{
    "question": "이중 한 명과 친해질 수 있다면?",
    "options": [
        {"answer": "건설공", "weight": {"시설": 1}},
        {"answer": "정치인", "weight": {"정책": 1}},
        {"answer": "축제 MC", "weight": {"문화": 1}},
        {"answer": "사회봉사자", "weight": {"소통,복지": 1}},
        {"answer": "교사", "weight": {"취업,교육": 1}}
    ]
},
{
    "question": "학교 생활 하면서 실현 됐으면 좋겠는 것은?",
    "options": [
        {"answer": "지하 캠퍼스", "weight": {"시설": 1}},
        {"answer": "4년간 수강신청 올클", "weight": {"정책": 1}},
        {"answer": "잔디밭 세종대", "weight": {"문화": 1}},
        {"answer": "친구 100명", "weight": {"소통,복지": 1}},
        {"answer": "전공교수님과 베프", "weight": {"취업,교육": 1}}
    ]
},
{
    "question": "당신이 요식업 창업을 시작한다면 무엇을 가장 중요하게 생각할 것인가?",
    "options": [
        {"answer": "인테리어", "weight": {"시설": 1}},
        {"answer": "가게 메뉴얼", "weight": {"정책": 1}},
        {"answer": "사람들의 메뉴 선호도", "weight": {"문화": 1}},
        {"answer": "가게 SNS", "weight": {"소통,복지": 1}},
        {"answer": "알바생 뽑기", "weight": {"취업,교육": 1}}
    ]
}];

// 질문과 세부 질문
let currentQuestion = 0;
const scores = { "문화": 0, "학술": 0, "체육": 0, "종교": 0, "공연": 0, "봉사": 0 };
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

    const progressPercentage = (currentQuestion / totalQuestions) * 100; 
    progressBar.style.width = progressPercentage + '%';
    progressPercent.innerHTML = `${progressPercentage.toFixed(0)}%`;

    // Progress icon 위치 업데이트
    progressIcon.style.left = `calc(${progressPercentage}% - 10px)`; // 진행률에 따라 아이콘 위치 설정
}



// handleAnswer 함수에서 진행 상태 업데이트 함수 호출
function handleAnswer(weight) {
    for (let key in weight) {
        scores[key] = (scores[key] || 0) + weight[key];
    }
    currentQuestion++;
    currentQuestion < totalQuestions ? displayQuestion() : determineCategory();
    updateProgressBar(); // 답변할 때마다 진행 상태 업데이트
}

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

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
    displayResults(topCategory);
}

// 결과 표시
async function displayResults(category) {
    document.getElementById("progress-bar").style.width = '100%';
    document.getElementById("progress-percent").innerHTML = '100%';
    const resultImage = document.getElementById("result-image");
    const resultDepartment = document.getElementById("result-department");

    // 결과 이미지 설정
    resultImage.style.display = 'block';
    resultImage.style.backgroundImage = `url('/src/${category}.png')`;

    // 결과 텍스트 및 설명 추가
    resultDepartment.innerHTML = `<div class="result-text">${category} 분과를 추천드려요!</div>`;
}

// 보조 함수
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 초기 질문 표시
displayQuestion();
