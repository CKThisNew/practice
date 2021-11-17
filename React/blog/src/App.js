import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState(["한국맛집", "캐나다맛집", "일본맛집"]);
  let [클릭, 클릭변경] = useState([0, 2, 4]);
  let [날짜, 날짜변경] = useState(["2월18일", "2월 19일", "2월 20일"]);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState("");

  function 개별따봉(i) {
    let newArray = [...클릭];
    newArray[i]++;
    클릭변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발발</div>
      </div>
      {글제목.map((a, i) => {
        return (
          <div className="list" key={i}>
            <h3
              onClick={() => {
                누른제목변경(i);
              }}
            >
              {a}
              <span
                onClick={() => {
                  개별따봉(i);
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

      <div className="publish">
        <input
          onChange={(e) => {
            입력값변경(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let 새로운글제목 = [...글제목];
            새로운글제목.unshift(입력값);
            글제목변경(새로운글제목);
            let 추가된따봉수 = [...클릭];
            추가된따봉수.unshift(0);
            클릭변경(추가된따봉수);
          }}
        >
          저장
        </button>
      </div>

      <button
        onClick={() => {
          modal변경(!modal);
        }}
      >
        버튼
      </button>
      {modal === true ? (
        <Modal 글제목={글제목} 날짜={날짜} 누른제목={누른제목} />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <>
      <div className="modal">
        <h2>{props.글제목[props.누른제목]}</h2>
        <p>{props.날짜[0]}</p>
        <p>상제 내용</p>
      </div>
      <div></div>
    </>
  );
}

export default App;
