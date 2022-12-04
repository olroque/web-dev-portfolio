import Link from "next/link";

export default function Footer() {
    return (
        <footer className="root">
            <div className="border-line">
                <section className="footer-content-container">
                    <div className="footer-col">
                        <ul>
                            <li>
                                <p>
                                    <Link href="/">
                                        <span>
                                            Portfolio
                                        </span>
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link href="/">
                                        <span>
                                            About
                                        </span>
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link href="/">
                                        <span>
                                            Contact
                                        </span>
                                    </Link>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <p>
                            <Link href="/">
                                <span className="logo">ROQUE</span>
                            </Link>
                        </p>
                    </div>
                    <div className="footer-col">
                        <ul>
                            <li>
                                <p>
                                    <Link href="/">
                                        <span>
                                            GitHub
                                        </span>
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link href="/">
                                        <span>
                                            LinkedIn
                                        </span>
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link href="/">
                                        <span>
                                            Blog
                                        </span>
                                    </Link>
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </footer>
    )
}