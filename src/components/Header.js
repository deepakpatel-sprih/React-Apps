import logo from "../public/images/airbnb-logo.png"

export default function Header() {
    return(
        <nav className="nav">
            <img src={logo} className="logo" alt="loading..." />
        </nav>
    )
}