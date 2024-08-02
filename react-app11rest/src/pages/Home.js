import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>🍥 메인 페이지</h2>
      <h3>공지사항</h3>
      <ul>
        <li>
          <Link to="/members">회원목록</Link>
        </li>
      </ul>
    </div>
  );
}
