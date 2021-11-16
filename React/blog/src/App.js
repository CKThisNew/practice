import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState(["한국맛집", "캐나다맛집", "일본맛집"]);
  let [클릭, 클릭변경] = useState(0);
  let [modal, modal변경] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발발</div>
      </div>
      <div className="list">
        <h3>
          {글제목[0]}
          <span
            onClick={() => {
              클릭변경(클릭 + 1);
            }}
          >
            👍🏻 {클릭}
          </span>
        </h3>
        <p>2월 11일</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 12일</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>2월 13일</p>
        <hr />
      </div>

      <button
        onClick={() => {
          modal변경(!modal);
        }}
      >
        버튼
      </button>

      {modal === true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <>
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상제 내용</p>
      </div>
      <div></div>
    </>
  );
}

export default App;
