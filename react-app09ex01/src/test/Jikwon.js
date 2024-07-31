import React, { useEffect, useState } from "react";

const Jikwon = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [jikwons, setJikwons] = useState([]);
  useEffect(() => {
    fetch("/wDazz6React01/test.jsp", { method: "get" })
      .then((res) => {
        if (!res.ok) {
          throw new Error("network response was not ok");
        }
        return res.json();
      })
      .then(
        (result) => {
          setIsLoaded(true);
          setJikwons(result.jikwon);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>ERROR : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <br />
        <table>
          <tr>
            <th>사번</th>
            <th>직원명</th>
            <th>부서명</th>
            <th>직급</th>
          </tr>
          {jikwons.map((j) => (
            <tr>
              <td>{j.no}</td>
              <td>{j.name}</td>
              <td>{j.bname}</td>
              <td>{j.jik}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={4}>
              <i className="allcount">인원수 : {jikwons.length}명</i>
            </td>
          </tr>
        </table>
      </div>
    );
  }
};

export default Jikwon;
