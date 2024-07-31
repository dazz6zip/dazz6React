import React from "react";

// Member Component
const Member = ({ memberData }) => {
  return (
    <tr>
      <td>{memberData.irum}</td>
      <td>{memberData.junhwa}</td>
    </tr>
  );
};

// Main Component
const MultiData = () => {
  const members = [
    { irum: "이름1", junhwa: "111-1111" },
    { irum: "이름2", junhwa: "222-2222" },
    { irum: "이름3", junhwa: "333-3333" },
  ];
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>이름</th>
          <th>전화번호</th>
        </tr>
      </thead>
      <tbody>
        {/* 배열 렌더링시 각 요소에 고유 키(Key) 추가 */}
        {members.map((m, index) => (
          <Member Key={index} memberData={m}></Member>
        ))}
      </tbody>
    </table>
  );
};

export default MultiData;
