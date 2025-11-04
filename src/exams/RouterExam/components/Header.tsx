import { Link, Outlet } from "react-router-dom";

function Layouts(){
    return (
        <div>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/abouts"}>Abouts</Link></li>
            </ul>
            <Outlet />
        </div>
    );
}

/**
 * Outlet => 현재 path, URL과 매치되는 컴포넌트로 대체되는 역할
 */

export default Layouts;