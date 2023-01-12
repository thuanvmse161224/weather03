import { Link } from "react-router-dom";


function Header() {
    return(
    <>
        <nav>
            <ul>
                <li><Link to="/contact">contact</Link></li>
                <li><Link to="/">home</Link></li>

            </ul>

        </nav>
    </>

    )

}



export default Header;