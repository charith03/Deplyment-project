import './Navbar.css';

export default function Navbar(){
    return(
        <nav class="navbar">
            <div class="logo"><li><a href="/">REAL ESTATE</a></li></div>
            <ul class="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li class="services">
                    <a href="/service">Services</a>
                    <ul class="dropdown">
                        <li><a href="/recent">Buy</a></li>
                        <li><a href="/recent1">Rent</a></li>
                        <li><a href="/recent2">Sell</a></li>
                    </ul>
                </li>
                <li><a href="/Login">Login</a></li>
                <li><a href="/reg">Signup</a></li>
            </ul>
        </nav>
    );
}
