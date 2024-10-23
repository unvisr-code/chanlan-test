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
}
];

const subCategoryQuestions = {
    '공연': [
        {
            "question": "공연에서 어떤 역할을 하고 싶나요?",
            "options": [
                {"answer": "노래 부르기", "weight": {"음악연주": 1}},
                {"answer": "공연(춤, 연극)", "weight": {"공연예술": 1}}
            ]
        },
        {
            "question": "공연 후 어떤 성취감을 느낄 것 같나요?",
            "options": [
                {"answer": "함께 만든 노력의 결과물", "weight": {"음악연주": 1}},
                {"answer": "연습의 결과를 무대에서 실현", "weight": {"공연예술": 1}}
            ]
        },
        {
            "question": "더 선호하는 공연 장소는 어디인가요?",
            "options": [
                {"answer": "길거리 버스킹, 광장", "weight": {"음악연주": 1}},
                {"answer": "무대, 공연장", "weight": {"공연예술": 1}}
            ]
        }
    ],
    '문화': [
        {
            "question": "어떤 종류의 문화 활동을 좋아하나요?",
            "options": [
                {"answer": "스스로 탐구하는 문화 활동", "weight": {"창작예술": 1}},
                {"answer": "다른 사람들과 어울리는 문화 활동", "weight": {"문화": 1}}
            ]
        },
        {
            "question": "문화 활동 중 가장 기억에 남는 경험은 무엇인가요?",
            "options": [
                {"answer": "작품 전시회 참여", "weight": {"창작예술": 1}},
                {"answer": "문화 축제 참석", "weight": {"문화": 1}}
            ]
        },
        {
            "question": "문화 활동을 통해 얻고 싶은 것은 무엇인가요?",
            "options": [
                {"answer": "개인적 창의력과 표현력 향상", "weight": {"창작예술": 1}},
                {"answer": "다양한 문화 체험과 사회적 연결", "weight": {"문화": 1}}
            ]
        }
    ],
    // '봉사': [
    //     {
    //         "question": "어떤 봉사 활동을 선호하나요?",
    //         "options": [
    //             {"answer": "교육 봉사", "weight": {"봉사": 1}},
    //             {"answer": "환경 봉사", "weight": {"봉사": 1}}
    //         ]
    //     },
    //     {
    //         "question": "봉사 활동의 주된 목적은 무엇인가요?",
    //         "options": [
    //             {"answer": "사회적 기여", "weight": {"봉사": 1}},
    //             {"answer": "개인적 성취", "weight": {"봉사": 1}}
    //         ]
    //     }
    // ],
    // '종교': [
    //     {
    //         "question": "종교 활동에서 어떤 역할을 선호하나요?",
    //         "options": [
    //             {"answer": "예배 참여", "weight": {"종교": 1}},
    //             {"answer": "기도 모임", "weight": {"종교": 1}}
    //         ]
    //     },
    //     {
    //         "question": "종교 활동 중 어떤 것을 더 선호하나요?",
    //         "options": [
    //             {"answer": "봉사 활동", "weight": {"종교": 1}},
    //             {"answer": "교회 모임", "weight": {"종교": 1}}
    //         ]
    //     }
    // ],
    '체육': [
        {
            "question": "체육 활동을 선택할 때 가장 중요한 요소는 무엇인가요?",
            "options": [
                {"answer": "팀과의 협력", "weight": {"구기체육": 1}},
                {"answer": "개인적 도전", "weight": {"생활체육": 1}},
                {"answer": "기술 연습, 심신 단련", "weight": {"무술체육": 1}}
            ]
        },
        {
            "question": "체육 활동을 통해 얻고 싶은 신체적 변화는 무엇인가요?",
            "options": [
                {"answer": "근력과 팀워크 향상", "weight": {"구기체육": 1}},
                {"answer": "지구력과 체력 향상", "weight": {"생활체육": 1}},
                {"answer": "유연성 및 강인함", "weight": {"무술체육": 1}}
            ]
        },
        {
            "question": "체육 활동을 할 때 가장 중요하게 생각하는 것은 무엇인가요?",
            "options": [
                {"answer": "전략과 기술", "weight": {"구기체육": 1}},
                {"answer": "운동의 즐거움", "weight": {"생활체육": 1}},
                {"answer": "정신 집중과 훈련", "weight": {"무술체육": 1}}
            ]
        }
    ],
    '학술': [
        {
            "question": "학술 활동을 통해 가장 얻고 싶은 것은 무엇인가요?",
            "options": [
                {"answer": "기술적 숙련도", "weight": {"정보과학": 1}},
                {"answer": "폭 넓은 탐구", "weight": {"학술교양": 1}}
            ]
        },
        {
            "question": "학술 활동 중 어떤 환경에서 가장 효율적으로 공부하나요?",
            "options": [
                {"answer": "조용하고 집중된 환경", "weight": {"정보과학": 1}},
                {"answer": "서로 의견을 교환할 수 있는 환경", "weight": {"학술교양": 1}}
            ]
        },
        {
            "question": "학술 활동을 통해 배우고 싶은 기술이나 지식은 무엇인가요?",
            "options": [
                {"answer": "알고리즘과 데이터 구조", "weight": {"정보과학": 1}},
                {"answer": "비판적 사고와 분석", "weight": {"학술교양": 1}}
            ]
        }
    ]
};


let currentQuestion = 0;
let subQuestionIndex = 0;
let currentCategory = '';
const scores = { "문화": 0, "학술": 0, "체육": 0, "종교": 0, "공연": 0, "봉사": 0 };
let subCategoryScores = {};
let totalQuestions = questions.length; // 전체 질문 수
let totalSubQuestions = 0; // 세부분과 질문 수

// 세부 분과 설명 객체
const subCategoryDescriptions = {
    '종교': '다양한 종교 활동을 통해 신앙을 나누고<br>삶의 가르침을 배우는 분과입니다.',
    '봉사': '다양한 봉사 활동을 통해 사회에 기여하고<br>나눔의 가치를 실천하는 분과입니다.',
    '정보과학': '정보 과학을 탐구하며<br>여러 첨단 기술을 학습하고 응용하는 분과입니다.',
    '학술교양': '다양한 학문과 교양 지식을 탐구하며<br>경험과 지적 성장을 추구하는 분과입니다.',
    '창작예술': '창의력을 통한 예술을 표현할 수 있는 분과입니다.',
    '문화': '다양한 문화 생활을 함께 즐기며<br>추억을 쌓아가는 분과입니다.',
    '생활체육': '이색적인 스포츠를 일상 속에서<br>함께 즐길 수 있는 분과입니다.',
    '음악연주': '서로 다른 악기로<br>아름다운 화음을 만들어가는 분과입니다.',
    '공연예술': '수많은 연습으로 빛나는 무대를 만들어가는 분과입니다.',
    '구기체육': '같은 스포츠를 좋아하는 사람들과 함께<br>열정을 나누는 분과입니다.',
    '무술체육': '함께 무술을 연마하며 심신을 단련하는 분과입니다.'
};

// 초기 질문 표시
displayQuestion();

// 진행 바 업데이트 함수
function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const progressPercent = document.getElementById("progress-percent");
    const progressIcon = document.getElementById("progress-icon");

    const currentTotalQuestions = totalQuestions + totalSubQuestions;
    const currentAnsweredQuestions = currentQuestion + subQuestionIndex;
    const progressPercentage = (currentAnsweredQuestions / currentTotalQuestions) * 100;

    progressBar.style.width = progressPercentage + '%';
    progressPercent.innerHTML = `${progressPercentage.toFixed(0)}%`;
    progressIcon.style.left = `calc(${progressPercentage}% - 10px)`;
}

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.innerHTML = questions[currentQuestion].question;
    optionsElement.innerHTML = "";

    let options = questions[currentQuestion].options;
    const dontKnowOption = options.find(option => option.answer === "잘 모르겠음");
    options = options.filter(option => option.answer !== "잘 모르겠음");
    shuffle(options);
    options.push(dontKnowOption); // "잘 모르겠음"을 맨 아래로 이동

    options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option.answer;
        button.className = "option";
        button.onclick = () => handleAnswer(option.weight);
        optionsElement.appendChild(button);
    });

    updateProgressBar(); // 진행 바 업데이트
}

function handleAnswer(weight) {
    for (let key in weight) {
        if (weight.hasOwnProperty(key)) {
            scores[key] += weight[key];
        }
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        determineCategory();
    }
}

function determineCategory() {
    const topCategory = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    currentCategory = topCategory;
    if (subCategoryQuestions[currentCategory]) {
        subCategoryScores = {};
        subQuestionIndex = 0;
        totalSubQuestions = subCategoryQuestions[currentCategory].length; // 세부분과 질문 수 추가
        displaySubCategoryQuestion();
    } else {
        displayResults(currentCategory);
    }
}

function displaySubCategoryQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.innerHTML = subCategoryQuestions[currentCategory][subQuestionIndex].question;
    optionsElement.innerHTML = "";

    subCategoryQuestions[currentCategory][subQuestionIndex].options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option.answer;
        button.className = "option";
        button.onclick = () => handleSubAnswer(option.weight);
        optionsElement.appendChild(button);
    });

    updateProgressBar(); // 진행 바 업데이트
}

function handleSubAnswer(weight) {
    for (let key in weight) {
        if (weight.hasOwnProperty(key)) {
            subCategoryScores[key] = (subCategoryScores[key] || 0) + weight[key];
        }
    }
    subQuestionIndex++;
    if (subQuestionIndex < subCategoryQuestions[currentCategory].length) {
        displaySubCategoryQuestion();
    } else {
        determineSubCategory();
    }
}

function determineSubCategory() {
    const topSubCategory = Object.keys(subCategoryScores).reduce((a, b) => subCategoryScores[a] > subCategoryScores[b] ? a : b);
    displayResults(topSubCategory);
}

// **수정된 부분 시작**
async function displayResults(subCategory) {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const progressBar = document.getElementById("progress-bar");
    const progressPercent = document.getElementById("progress-percent");
    const progressIcon = document.getElementById("progress-icon");

    const resultImage = document.getElementById("result-image");
    const resultDepartment = document.getElementById("result-department");
    const notionList = document.getElementById("notionList");
    const resultContainer = document.querySelector('.result-container');

    // 배경 이미지 제거
    document.body.classList.add("no-background");

    questionElement.innerHTML = "";
    optionsElement.innerHTML = "";
    progressBar.style.width = '100%';
    progressPercent.innerHTML = '100%';
    progressIcon.style.left = `calc(100% - 10px)`;

    // 결과 이미지 설정
    const imagePath = `/src/${subCategory}.png`;
    resultImage.style.display = 'block';
    resultImage.style.backgroundImage = `url('${imagePath}')`;

    // 결과 텍스트 및 설명 추가
    resultDepartment.innerHTML = `
        <div class="result-text">${subCategory} 분과를 추천드려요!</div>
        <div class="description-text">${subCategoryDescriptions[subCategory]}</div>
    `;

    // "세부 동아리 보기" 버튼 및 다운로드 아이콘 추가
    const showButton = document.createElement("button");
    showButton.className = "show-button";
    showButton.innerText = "세부 동아리 보기";
    
    const downloadButton = document.createElement("button");
    downloadButton.className = "download-button";
    downloadButton.innerHTML = "&#128190;";
    downloadButton.onclick = () => downloadScreenshot();

    const viewAllButton = document.createElement("button");
    viewAllButton.className = "view-all-button";
    viewAllButton.innerText = "모든 분과 동아리 보기";
    viewAllButton.onclick = () => window.location.href = '/';

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";
    buttonContainer.appendChild(showButton);
    buttonContainer.appendChild(downloadButton);
    resultDepartment.appendChild(buttonContainer);
    resultDepartment.appendChild(viewAllButton);

    showButton.onclick = () => {
        if (notionList.style.display === 'block') {
            notionList.style.display = 'none';
            resultContainer.classList.remove("show-content");
            resultContainer.classList.add("center-content");
            showButton.innerText = "세부 동아리 보기";
            downloadButton.style.display = 'inline-block';
            viewAllButton.style.display = 'inline-block';
        } else {
            loadNotionData(subCategory);
            notionList.style.display = 'block';
            notionList.classList.add("notion-list", "show-content");
            resultContainer.classList.add("show-content");
            resultContainer.classList.remove("center-content");
            showButton.innerText = "세부 동아리 닫기";
            downloadButton.style.display = 'none';
            viewAllButton.style.display = 'none';
        }
    };

    // 바로 데이터를 로딩 시작.
    loadNotionData(subCategory);
}








// 스크린샷 다운로드 함수 추가
function downloadScreenshot() {
    // 버튼의 상태를 명시적으로 설정
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        const computedStyle = window.getComputedStyle(button);
        button.style.backgroundColor = computedStyle.backgroundColor;
        button.style.color = computedStyle.color;
        button.style.border = computedStyle.border;
        button.style.padding = computedStyle.padding;
        // 필요에 따라 추가적인 스타일 속성도 설정 가능
    });

    html2canvas(document.body, {
        useCORS: true, // 외부 이미지 리소스 문제가 있을 경우 사용
        backgroundColor: null // 배경색을 투명하게 설정하려면 null로 설정
    }).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'screenshot.png';
        link.click();
    }).catch(error => {
        console.error('Screenshot download failed:', error);
    });
}


// **수정된 부분 끝**

// 나머지 기존 코드 계속 이어짐...






// **수정된 부분 끝**

async function loadNotionData(subCategory) {
    try {
        // Fetch data from the server
        const response = await fetch('/api/fetchNotionData');
        const data = await response.json();
        console.log('Fetched data:', data); // 데이터를 확인하기 위해 콘솔에 출력
        const notionList = document.querySelector('#notionList');
        notionList.innerHTML = '';
        data.results.forEach(page => {
            const subDepartment = page.properties['세부 분과']?.rich_text?.[0]?.plain_text || 'No SubDepartment';
            console.log('SubDepartment:', subDepartment); // 필터링 조건 확인
            if (subDepartment !== subCategory) {
                return; // 필터링: 가장 높은 가중치 세부 분과와 일치하지 않는 경우 건너뜀
            }
            const listItem = document.createElement('div');
            listItem.className = 'list-item';
            const logoImg = document.createElement('img');
            const logoUrl = page.properties['로고']?.files?.[0]?.external?.url || '';
            if (logoUrl) {
                logoImg.src = logoUrl;
            } else {
                logoImg.alt = 'No logo';
            }
            const listItemContent = document.createElement('div');
            listItemContent.className = 'list-item-content';
            const clubName = document.createElement('h2');
            clubName.textContent = page.properties['동아리명']?.title?.[0]?.plain_text || 'No Name';
            const departmentBox = document.createElement('div');
            departmentBox.className = 'department-box';
            departmentBox.textContent = `${subDepartment}`;
            const description = document.createElement('p');
            description.textContent = page.properties['한줄소개']?.rich_text?.[0]?.plain_text || 'No Description';
            const representative = document.createElement('p');
            representative.textContent = `대표자 성함: ${page.properties['대표자 성함']?.rich_text?.[0]?.plain_text || 'N/A'}`;
            const address = document.createElement('p');
            address.textContent = `동아리방 주소: ${page.properties['동아리방 주소']?.rich_text?.[0]?.plain_text || 'N/A'}`;
            // 추가 데이터 표시
            const recruitmentPeriod = document.createElement('p');
            const startDate = page.properties['모집 시작일']?.date?.start || 'N/A';
            const endDate = page.properties['모집 마감일']?.date?.start || 'N/A';
            recruitmentPeriod.textContent = `모집 기간: ${startDate} ~ ${endDate}`;

            const applicationButton = document.createElement('button');
            const applicationUrl = page.properties['신청방법']?.url || '#';

            if (isTodayBetweenDates(startDate, endDate)) {
                applicationButton.textContent = '지원하기 !';
                applicationButton.style.backgroundColor = '#F2A0B0';
                applicationButton.style.color = 'white';
                applicationButton.onclick = () => window.open(applicationUrl, '_blank');
            } else {
                const daysLeft = calculateDaysLeft(startDate);
                applicationButton.textContent = `D-${daysLeft}`;
                applicationButton.style.backgroundColor = 'white';
                applicationButton.style.color = '#F2A0B0';
                applicationButton.style.border = '1px solid #F2A0B0';
                applicationButton.onclick = () => showPopup(`${daysLeft}일 뒤에 지원 가능합니다!`, clubName.textContent);
            }

            const curriculum = document.createElement('div');
            curriculum.className = 'curriculum-bar-container';
            const curriculumBar = document.createElement('div');
            curriculumBar.className = 'curriculum-bar';

            const curriculumText = page.properties['커리큘럼']?.rich_text?.[0]?.plain_text || 'N/A';

            // 커리큘럼 텍스트를 월별로 분리
            const curriculumItems = curriculumText.split('\n');
            const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
            let monthDetails = {};

            curriculumItems.forEach(item => {
                const month = months.find(m => item.startsWith(m));
                if (month) {
                    if (!monthDetails[month]) {
                        monthDetails[month] = [];
                    }
                    monthDetails[month].push(item.trim());
                }
            });

            const activeMonths = months.filter(month => monthDetails[month]);

            activeMonths.forEach((month, index) => {
                const monthPoint = document.createElement('div');
                monthPoint.className = 'month-point';
                monthPoint.textContent = month.slice(0, -1); // "월" 제거하여 숫자만 표시
                
                // Adjust left position to ensure the last point is correctly aligned
                let leftPosition = (index / (activeMonths.length - 1)) * 100;

                // Shift the last point slightly to the left
                if (index === activeMonths.length - 1) {
                    leftPosition -= 2; // Adjust this value as needed
                }

                monthPoint.style.left = `${leftPosition}%`;

                const detailDiv = document.createElement('div');
                detailDiv.className = 'month-detail';
                detailDiv.innerHTML = monthDetails[month].join('<br>');

                monthPoint.appendChild(detailDiv);
                curriculumBar.appendChild(monthPoint);

                // 모바일에서는 클릭 시 디테일 표시 후 1.5초 뒤에 사라지게 설정,1.3초로 변경
                if (window.innerWidth <= 600) {
                    monthPoint.addEventListener('click', () => {
                        detailDiv.style.display = 'block';
                        setTimeout(() => {
                            detailDiv.classList.add('fade-out');
                            setTimeout(() => {
                                detailDiv.style.display = 'none';
                                detailDiv.classList.remove('fade-out');
                            }, 500); // duration of fade-out animation
                        }, 1300);
                    });
                }
            });

            curriculum.appendChild(curriculumBar);

            listItemContent.appendChild(clubName);
            listItemContent.appendChild(departmentBox);
            listItemContent.appendChild(description);
            listItemContent.appendChild(representative);
            listItemContent.appendChild(address);
            listItemContent.appendChild(recruitmentPeriod);

            // 버튼과 커리큘럼 바를 가로로 배치
            const actionContainer = document.createElement('div');
            actionContainer.className = 'action-container';
            actionContainer.appendChild(applicationButton);
            actionContainer.appendChild(curriculum);

            listItemContent.appendChild(actionContainer);

            listItem.appendChild(logoImg);
            listItem.appendChild(listItemContent);

            notionList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching data from Notion:', error);
        const notionList = document.querySelector('#notionList');
        notionList.innerHTML = `<p>데이터를 가져오는 중 오류가 발생했습니다. 나중에 다시 시도해주세요.</p>`;
    }
}

// 초기 질문 표시
displayQuestion();

// 보조 함수
function calculateDaysLeft(startDate) {
    const today = new Date();
    const start = new Date(startDate);
    const difference = start.getTime() - today.getTime();
    const daysLeft = Math.ceil(difference / (1000 * 3600 * 24));
    return daysLeft;
}

function isTodayBetweenDates(startDate, endDate) {
    const today = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    return today >= start && today <= end;
}

function showPopup(message, clubName) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    const popupContent = document.createElement('div');
    popupContent.className = 'popup-content';

    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    popupContent.appendChild(messageElement);

    // 전화번호 입력 칸 추가
    const phoneInput = document.createElement('input');
    phoneInput.type = 'tel';
    phoneInput.placeholder = '총동아리연합회 카톡 채널을 추가하고 전화번호를 입력해주시면 카톡을 드릴게요!';
    phoneInput.className = 'phone-input';
    popupContent.appendChild(phoneInput);

    const closeButton = document.createElement('button');
    closeButton.textContent = '확인';
    closeButton.className = 'popup-button';
    closeButton.onclick = async () => {
        const phoneNumber = phoneInput.value;
        console.log('Entered phone number:', phoneNumber); // 로그 추가
        if (phoneNumber) {
            const isSaved = await savePhoneNumber(clubName, phoneNumber);
            if (isSaved) {
                window.location.href = 'http://pf.kakao.com/_xjsxmXG';
            } else {
                alert('전화번호 저장에 실패했습니다.');
            }
        }
        document.body.removeChild(popup);
    };
    popupContent.appendChild(closeButton);

    popup.appendChild(popupContent);
    document.body.appendChild(popup);
}

async function savePhoneNumber(clubName, phoneNumber) {
    console.log('savePhoneNumber function called');
    const pageUrl = window.location.href; // 현재 페이지 URL 가져오기
    try {
        const response = await fetch('/api/savePhoneNumber', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ clubName, phoneNumber, pageUrl })
        });
        if (response.ok) {
            console.log('Phone number saved successfully');
            return true;
        } else {
            const errorText = await response.text();
            console.error('Failed to save phone number:', errorText);
            return false;
        }
    } catch (error) {
        console.error('Error:', error);
        return false;
    }
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