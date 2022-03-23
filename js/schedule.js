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
      div.id = `${dayArr[j - 1]}요일_${i}시`;
      divContainer.appendChild(div);

      let IdArr = []; // Id을 day와 hour로 배열분리
      const getDivId = div.id;
      let sliceGetId = getDivId.slice(0, 3);
      IdArr.push(sliceGetId);
      sliceGetId = getDivId.slice(4, 6);
      IdArr.push(sliceGetId);
      const IdDay = IdArr[0]; // div 의 Id을 Day로 만든 변수
      const IdHour = IdArr[1]; // div 의 Id을 Hour로 만든 변수

      const dayStorage = localStorage.getItem(IdArr[0]); // day 기준으로 storyage을 가져온것
      const hourStorage = localStorage.getItem(IdArr[1]); // hour 기준으로 storyage을 가져온것

      const saveLocal = localStorage.getItem(SUBJECT_ID); // storage을 KEY : subject 을 기준으로 value을 가져온 것
      const parseSaveLocal = JSON.parse(saveLocal); // 객체로 변환한 saveLocal 값
      let arrSaveLocal = Object.entries(parseSaveLocal); // parseSaveLocal 객체값을 배열로 만든 배열
      arrSaveLocal = arrSaveLocal.map((each) => ({
        day: each[1].day,
        hour: each[1].time,
        value: each[1].value,
      }));
      console.log(arrSaveLocal);
      console.log(
        arrSaveLocal.find((e) => {
          return e.day === IdDay && e.hour === IdHour;
        })
      );
      div.innerHTML = `test`;
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
  console.log(subjectArr);
}
// 로컬호스트에 저장시 string타입으로
const saveSchedule = localStorage.getItem(SUBJECT_ID);

// subjectArr 는 시작할때 항상 처음으로 정해져있다. 그래서 스토리지에 있는걸 배열에 넣는다.
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
