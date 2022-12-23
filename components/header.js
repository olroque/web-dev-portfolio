import Link from "next/link";

export default function Header() {
    return (
        <header>
            {/* Navigation Bar */}
            <div className="site-header">
                <nav>
                    {/* Logo */}
                    <div className="logo-container">
                        <Link href="/">
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
                </nav>
            </div>
        </header>
    )
}