import { useState } from "react";
import { useHistory, useParams } from "react-router";

function Detail(props) {
  let { id } = useParams();
  let history = useHistory();

  let 찾은상품 = props.shoes.find(function (상품) {
    return 상품.id == id;
  });

  let 찾는사진 = props.사진.find(function (사진) {
    return 사진.id == id;
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={찾는사진.photo} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <button className="btn btn-danger">주문하기</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}
export default Detail;
