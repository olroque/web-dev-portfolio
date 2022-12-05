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
                            <il className="nav-link">
                                <Link href="/portfolio">
                                    <p className="nav-link-item">Portfolio</p>
                                </Link>
                            </il>
                            <il className="nav-link">
                                <Link href="/about">
                                    <p className="nav-link-item">About</p>
                                </Link>
                            </il>
                            <il className="nav-link">
                                <Link href="/contact">
                                    <p className="nav-link-item">Contact</p>
                                </Link>
                            </il>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}