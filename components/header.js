import Link from "next/link";

export default function Header() {

    function toggleNavMenu() {
        if (document.getElementById("collapsible-menu").style.display == "flex") 
        {
            document.getElementById("collapsible-menu").style.display = "none";
            document.getElementById("nav-button-open").style.display = "block";
            document.getElementById("nav-button-close").style.display = "none";
        }
        else 
        {
            document.getElementById("collapsible-menu").style.display = "flex";
            document.getElementById("nav-button-open").style.display = "none";
            document.getElementById("nav-button-close").style.display = "block";            
        }
    }

    function closeNavMenu() {
        document.getElementById("collapsible-menu").style.display = "none";
        document.getElementById("nav-button-open").style.display = "block";
        document.getElementById("nav-button-close").style.display = "none";
    }

    return (
        <header>
            {/* Navigation Bar */}
            <div className="site-header">
                <nav>
                    {/* Logo */}
                    <div className="logo-container">
                        <Link href="/" onClick={closeNavMenu}>
                            <p className="logo">ROQUE</p>
                        </Link>
                    </div>
                    {/* Nav Links */}
                    <div className="nav-links-container">
                        <ul className="nav-links">
                            <li className="nav-link">
                                <Link href="/portfolio">
                                    <p className="nav-link-item">Portfolio</p>
                                </Link>
                            </li>
                            <li className="nav-link">
                                <Link href="/about">
                                    <p className="nav-link-item">About</p>
                                </Link>
                            </li>
                            <li className="nav-link">
                                <Link href="/contact">
                                    <p className="nav-link-item">Contact</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div onClick={toggleNavMenu} className="nav-menu-icon">
                        <svg id="nav-button-open" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                        <svg id="nav-button-close" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
                    </div>
                </nav>
            </div>
            <div id="collapsible-menu" className="collapsible-menu">
                <ul className="nav-links">
                    <li className="nav-link">
                        <Link href="/portfolio" onClick={closeNavMenu}>
                            <p className="nav-link-item">Portfolio</p>
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link href="/about" onClick={closeNavMenu}>
                            <p className="nav-link-item">About</p>
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link href="/contact" onClick={closeNavMenu}>
                            <p className="nav-link-item">Contact</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}