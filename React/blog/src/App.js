/* eslint-disable */
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "함양 여행지",
    "제주도 여행지",
    "광주 여행지",
  ]);

  let [추천수, 추천수변경] = useState(0);

  let [모달, 모달변경] = useState(false);

  let [누른제목, 누른제목변경] = useState(0);

  let [입력, 입력변경] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {글제목.map((a, i) => {
        return (
          <div className="list" key={i}>
            <h3
              onClick={() => {
                누른제목변경(i);
              }}
            >
              {a}{" "}
              <span
                onClick={() => {
                  추천수변경(추천수 + 1);
                }}
              >
                👍🏻
              </span>
              <span>{추천수}</span>
            </h3>

            <p>10월 3일 발간</p>
            <hr />
          </div>
        );
      })}

      <div className="publish">
        <input
          onChange={(e) => {
            입력변경(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            let copyArray = [...글제목];
            copyArray.push(입력);
            글제목변경(copyArray);
          }}
        >
          저장
        </button>
      </div>

      <button
        onClick={() => {
          모달변경(!모달);
        }}
      >
        열닫버튼
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
      <p>내용</p>
      <p>본문</p>
    </div>
  );
}

export default App;
