import React, { useState } from "react";
function MyForm() {
  const [formData, setFormData] = useState({ irum: "", nai: "", menu: "푸딩" });
  const dataChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const dataSubmit = (e) => {
    e.preventDefault();
    const { nai } = formData; // formData 객체에서 nai 추출, nai 변수에 치환

    if (!Number(nai) || isNaN(Number(nai))) {
      // 나이 입력 자료 검사
      alert("숫자만 입력 가능합니다.");
    } else {
      alert("처리 성공");
    }
  };

  return (
    <>
      <b>{formData.irum}</b> 님의 나이는 <b>{formData.nai}</b>살입니다.
      <br />
      <b>{formData.menu}</b> 을(를) 선택하셨습니다.
      <form onSubmit={dataSubmit}>
        이름 : <input type="text" name="irum" onInput={dataChange}></input>
        <br />
        나이 : <input type="text" name="nai" onInput={dataChange}></input>
        <br />
        메뉴 :{" "}
        <select name="menu" value={formData.menu} onInput={dataChange}>
          <option value="케이크">케이크</option>
          <option value="푸딩">푸딩</option>
          <option value="쿠키">쿠키</option>
        </select>
        <br />
        <button type="submit">등록</button>
      </form>
    </>
  );
}
export default MyForm;
