import React, { useState, useEffect } from "react";

const MyAjax = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  /* fetch를 사용하여 jsp 자료(Apatche Server) 읽기 */
  // Ajax 처리 성공시 isLoaded, items 갱신
  useEffect(() => {
    fetch("/wDazz6React01/abc.jsp", { method: "get" })
      /* JavaScript 기본 : SOP (Same Origin Policy, 동일 출처 정책) - 같은 도메인만 가능
        다른 출처의 리소스가 필요하다면 CORS(Cross Origin Reesource Sharing, 교차 출처 리소스 공유) 사용
        A server <-> B server는 CORS 에러가 나지 않음
        CORS 처리 : Package.json에 //"proxy": "http://localhost:80"// 등록 */
      .then((res) => {
        // resolver
        if (!res.ok) {
          throw new Error("network response was not ok");
        }
        return res.json();
      })
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.products);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []); // 의존성 배열을 비워 초기 한 번만 실행

  /* error -> error message, isLoaded = false -> Loading message, etc -> item */
  if (error) {
    return <div>ERROR : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map((item) => (
          <li>
            {item.code} {item.name} {item.price}
          </li>
        ))}
      </ul>
    );
  }
};

export default MyAjax;
