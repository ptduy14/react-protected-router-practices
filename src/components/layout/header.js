import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <ul style={{display: 'flex', listStyle: 'none'}}>
        <li style={{paddingRight: '8px'}}>
          <Link to={"/"}>Home</Link>
        </li>
        <li style={{padding: '0 8px'}}>
          <Link to={"/about"}>About</Link>
        </li>
        <li style={{padding: '0 8px'}}>
            <Link to={'/logout'}>Logout</Link>
        </li>
      </ul>
    </div>
  );
}
