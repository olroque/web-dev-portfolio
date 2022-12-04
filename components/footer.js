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
                                    <a target="blank" href="https://github.com/olroque">
                                        <span>
                                            GitHub
                                        </span>
                                    </a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <a target="blank" href="https://www.linkedin.com/in/omarroque/">
                                        <span>
                                            LinkedIn
                                        </span>
                                    </a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <a target="blank" href="https://leetcode.com/oroque/">
                                        <span>
                                            LeetCode
                                        </span>
                                    </a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </footer>
    )
}