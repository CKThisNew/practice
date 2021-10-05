/* eslint-disable */
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "전라도 여행",
    "경상도 여행",
    "경기도 여행",
  ]);

  let [추천, 추천변경] = useState(0);

  let [모달, 모달변경] = useState(false);

  let [누른제목, 누른제목변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {글제목.map((a, i) => {
        return (
          <div className="list">
            <h3
              onClick={() => {
                누른제목변경(i);
              }}
            >
              {a}
              <span
                onClick={() => {
                  추천변경(추천 + 1);
                }}
              >
                👍🏻
              </span>
              <span>{추천}</span>
            </h3>
            <span>10월 5일 발행</span>
            <hr />
          </div>
        );
      })}

      <button
        onClick={() => {
          모달변경(!모달);
        }}
      >
        열고닫기
      </button>
      {모달 === true ? (
        <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>내용</p>
    </div>
  );
}

export default App;
