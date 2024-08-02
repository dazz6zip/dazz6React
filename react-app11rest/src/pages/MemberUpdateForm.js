import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function MemberUpdateForm() {
  const navigate = useNavigate();
  const { num } = useParams();

  // 수정할 정보 state로 관리
  const [state, setState] = useState({ num: 0, name: "", addr: "" });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  // 추가 버튼 클릭에 대한 이벤트 핸들러
  const handleSave = (e) => {
    // Ajax 요청 (Post 방식) 설정
    axios
      .put("/members/" + num, state)
      .then((res) => {
        if (res.data.isSuccess) {
          navigate("/members");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // Ajax 요청 (Get 방식) 설정
    axios
      .get("/members/" + num)
      .then((res) => {
        // 서버로부터 응담된 데이터를 이용해 state 수정
        // res.data는 {num:1, name:'이름', addr:'주소'} 형태
        setState(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [num]);

  return (
    <div>
      <h2>회원 정보 수정</h2>
      <div>
        <label>이름 : </label>
        <input
          type="text"
          name="name"
          value={state.name}
          onInput={handleChange}
        ></input>
      </div>
      <div>
        <label>주소 : </label>
        <input
          type="text"
          name="addr"
          value={state.addr}
          onInput={handleChange}
        ></input>
      </div>
      <button onClick={handleSave}>수정</button>
    </div>
  );
}
