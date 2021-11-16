import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState(["한국맛집", "캐나다맛집", "일본맛집"]);
  let [클릭, 클릭변경] = useState([0, 2, 4]);
  let [날짜, 날짜변경] = useState(["2월18일", "2월 19일", "2월 20일"]);
  let [modal, modal변경] = useState(false);

  function 따봉들변경(i) {
    let new클릭Array = [...클릭];
    new클릭Array[i]++;
    클릭변경(new클릭Array);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발발</div>
      </div>

      {글제목.map((a, i) => {
        return (
          <div className="list" key={i}>
            <h3>
              {a}
              <span
                onClick={() => {
                  따봉들변경(i);
                }}
              >
                👍🏻 {클릭[i]}
              </span>
            </h3>
            <p>{날짜[i]}</p>
            <hr />
          </div>
        );
      })}

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
