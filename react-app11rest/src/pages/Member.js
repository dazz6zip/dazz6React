import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/custom.css";

export default function Member() {
  const [members, setMembers] = useState([]);
  const refresh = () => {
    // Ajax 요청 (Get 방식) 설정
    axios
      .get("/members")
      .then((res) => {
        // 서버로부터 응담된 데이터를 이용해 state 수정
        setMembers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    refresh(); // Ajax 요청 처리
  }, []);

  // 삭제 버튼 클릭시 이벤트 핸들러 함수
  const handleDelete = (num) => {
    // Ajax 요청 (Delete 방식) 설정
    axios
      .delete("/members/" + num)
      .then((res) => {
        // 삭제 후 목록 보기
        refresh();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 페이지 이동 함수
  const navigate = useNavigate(); // 페이지 이동 함수
  // Link : 단순하게 페이지 이동을 할 경우 사용
  // useNavigate() : 특정 이벤트가 실행되면 동작하도록 하거나 추가적인 로직이 필요한 경우 사용

  return (
    <div className="memberdiv">
      <h2>🍥 회원 목록</h2>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>주소</th>
            <th>수정</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {members.map((m) => (
            <tr key={m.num}>
              <td>{m.num}</td>
              <td>{m.name}</td>
              <td>{m.addr}</td>
              <td>
                <button
                  onClick={() => {
                    navigate(`/members/${m.num}/edit`); // Ajax 요청 아님, 페이지 이동
                  }}
                >
                  ✏️
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handleDelete(m.num);
                  }}
                >
                  ✂️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <Link to="/">메인</Link>&ensp;
      <Link to="/members/new">회원 추가</Link>&ensp;
    </div>
  );
}
