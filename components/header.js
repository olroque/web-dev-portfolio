import Link from "next/link";

export default function Header() {

    function toggleMenu() {
        if (document.getElementById("test").style.display == "flex") 
        {
            document.getElementById("test").style.display = "none";
        }
        else 
        {
            document.getElementById("test").style.display = "flex";
        }
    }

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
                    <div onClick={toggleMenu} className="nav-menu-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                    </div>
                </nav>
            </div>
            <div id="test" className="collapsible-menu">
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
        </header>
    )
}





// export default function Header() {
//     return (
//         <header>
//             {/* Navigation Bar */}
//             <div className="site-header">
//                 <nav>
//                     {/* Logo */}
//                     <div className="logo-container">
//                         <Link href="/">
//                             <p className="logo">ROQUE</p>
//                         </Link>
//                     </div>
//                     {/* Nav Links */}
//                     <div className="nav-links-container">
//                         <ul className="nav-links">
//                             <li className="nav-link">
//                                 <Link href="/portfolio">
//                                     <p className="nav-link-item">Portfolio</p>
//                                 </Link>
//                             </li>
//                             <li className="nav-link">
//                                 <Link href="/about">
//                                     <p className="nav-link-item">About</p>
//                                 </Link>
//                             </li>
//                             <li className="nav-link">
//                                 <Link href="/contact">
//                                     <p className="nav-link-item">Contact</p>
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="nav-menu-icon">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
//                     </div>
//                 </nav>
//             </div>
//         </header>
//     )
// }