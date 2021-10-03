/* eslint-disable */
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "아라동 여행지 추천",
    "삼양 여행지 추천",
    "함덕 여행지 추천",
  ]);

  let [따봉, 따봉변경] = useState(0);

  function 제목바꾸기() {
    let newArray = [...글제목];
    newArray[0] = "삼양 여행지 추천";

    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={제목바꾸기}>버튼</button>
      <div className="list">
        <h3>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            ❤️
          </span>
          {따봉}
        </h3>
        <p> 10월 3일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p> 10월 3일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p> 10월 3일 발행</p>
        <hr />
      </div>
      <Modal></Modal>
    </div>
  );
}

//반복출현하는 HTML 덩어리들을 컴포넌트로 만들어주면좋다
// 자주 변경되는 HTML UI들
// 다른 페이지로 만들 때 컴포넌트 사용

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
