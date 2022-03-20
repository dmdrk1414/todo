const dayName = document.querySelector(".day-name-container");
const scheduleContainer = document.querySelector(".schedule-main-container");
const SUBJECT_ID = "subject";

// 요일 스케줄위에함수
const dayArr = ["월", "화", "수", "목", "금"];
function dayNameFunc() {
  for (let i = 0; i < 5; i++) {
    const div = document.createElement("div");
    div.classList.add(`dayitem_${dayArr[i]}`);
    dayName.appendChild(div);
    div.innerHTML = `${dayArr[i]}`;
  }
}

const timeCheckContainer = document.querySelector(
  ".schedule-time-check-container"
);
// 시간표옆에 시간체크
function timeCheckFunc() {
  for (let i = 1; i <= 9; i++) {
    const div = document.createElement("div");
    div.innerHTML = `${i}시`;
    timeCheckContainer.appendChild(div);
  }
}

// schedule 표 만들기 div
function scheduleFunc() {
  for (let i = 1; i <= 9; i++) {
    const div = document.createElement("div");
    div.classList.add(`scheduleDiv_container_${i}`);
    div.classList.add(`scheduleDiv_container`);
    scheduleContainer.appendChild(div);
    const divContainer = document.querySelector(`.scheduleDiv_container_${i}`);

    for (let j = 1; j <= 5; j++) {
      const div = document.createElement("div");
      divContainer.appendChild(div);
      div.innerHTML = "test";
    }
  }
}

// select DayOption
const daySelect = document.querySelector("#daySelect");
function makeDayOption() {
  for (let i = 0; i < 5; i++) {
    const option = document.createElement("option");
    option.value = `${dayArr[i]}요일`;
    option.innerHTML = `${dayArr[i]}요일`;
    daySelect.appendChild(option);
  }
}

// select timeOption
const timeSelect = document.querySelector("#timeSelect");
function makeOption() {
  for (let i = 1; i <= 9; i++) {
    const option = document.createElement("option");
    option.value = `${i}시`;
    option.innerHTML = `${i}시`;
    timeSelect.appendChild(option);
  }
}

// input 과목이름 엔터 submit 처리
const subForm = document.querySelector("#subForm");
const subInput = document.querySelector("#subForm input");
let subjectArr = [];
function handleSubFormSubmit(event) {
  event.preventDefault();
  const tempObject = {
    day: daySelect.value,
    time: timeSelect.value,
    value: subInput.value,
  };
  subjectArr.push(tempObject);
  localStorage.setItem(SUBJECT_ID, JSON.stringify(subjectArr)); // 저장
}
// 로컬호스트에 저장시 string타입으로
const saveSchedule = localStorage.getItem(SUBJECT_ID);
if (saveSchedule !== null) {
  const parseSubject = JSON.parse(saveSchedule);
  subjectArr = parseSubject;
}
subForm.addEventListener("submit", handleSubFormSubmit);

// call 함수
function scheduleCall() {
  timeCheckFunc();
  dayNameFunc();
  scheduleFunc();

  makeDayOption();
  makeOption();
}

scheduleCall();
