import Link from "next/link";
import { Logo } from "../Logo";

function Footer() {
    return (
        <footer id="footer">
            <div className="footerSuperiorRegion__jH7i">
                <div className="superiorGrid__jh7i">
                    <div>
                        <div className="footerLogo__jH7i">
                            <Logo />
                        </div>
                        <h3 className="footerColumnTitle__jH7i">Subscribe to Our Newsletter</h3>
                        <div className="newsLetterForm__jH7i">
                            <input className="newsLetterFormInput__jH7i" type={"text"} placeholder={ "Enter your email address" } />
                            <button className="newsLetterFormButton__jH7i">
                                <span>Subscribe</span>
                            </button>
                        </div>
                    </div>
                    <div className="footerColumnGroup__jH7i">
                        <div>
                            <h3 className="footerColumnTitle__jH7i">Coinstead</h3>
                            <ul>
                                <li className="footerSiteMapLinkitem__jH7i">
                                    <Link href={"/"}>
                                        <span className={`footerSiteMapLink__jH7i`}>Home</span>
                                    </Link>
                                </li>
                                <li className="footerSiteMapLinkitem__jH7i">
                                    <Link href={"/marketplace"}>
                                        <span className={`footerSiteMapLink__jH7i`}>Marketplace</span>
                                    </Link>
                                </li>
                                <li className="footerSiteMapLinkitem__jH7i">
                                    <Link href={"/trends"}>
                                        <span className={`footerSiteMapLink__jH7i`}>Trends</span>
                                    </Link>
                                </li>
                                <li className="footerSiteMapLinkitem__jH7i">
                                    <Link href={"/"}>
                                        <span className={`footerSiteMapLink__jH7i`}>Careers</span>
                                    </Link>
                                </li>
                                <li className="footerSiteMapLinkitem__jH7i">
                                    <Link href={"/"}>
                                        <span className={`footerSiteMapLink__jH7i`}>Blog</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                        <h3 className="footerColumnTitle__jH7i">Support</h3>
                            <ul>
                                <li className="footerSiteMapLinkitem__jH7i">
                                    <Link href={"/"}>
                                        <span className={`footerSiteMapLink__jH7i`}>Help Center</span>
                                    </Link>
                                </li>
                                <li className="footerSiteMapLinkitem__jH7i">
                                    <Link href={"/marketplace"}>
                                        <span className={`footerSiteMapLink__jH7i`}>Terms of Service</span>
                                    </Link>
                                </li>
                                <li className="footerSiteMapLinkitem__jH7i">
                                    <Link href={"/trends"}>
                                        <span className={`footerSiteMapLink__jH7i`}>Legal</span>
                                    </Link>
                                </li>
                                <li className="footerSiteMapLinkitem__jH7i">
                                    <Link href={"/"}>
                                        <span className={`footerSiteMapLink__jH7i`}>Privacy Policy</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerInferiorRegion__jH7i">
                <p>Copyright &copy; 2022 Coinstead, Inc. All Rights Reserved.</p>
                <div>
                    <ul className="footerSocialLinks__jH7i">
                        <li>
                            <a href="#">
                                <div className="footerLinkIcon__jH7i">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
                                    </svg>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="footerLinkIcon__jH7i">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M433.43 93.222a422.256 422.256 0 0 0-104.216-32.324 1.582 1.582 0 0 0-1.675.792c-4.501 8.005-9.486 18.447-12.977 26.655-39.353-5.892-78.505-5.892-117.051 0-3.492-8.39-8.658-18.65-13.179-26.655a1.643 1.643 0 0 0-1.675-.792c-36.568 6.298-71.562 17.33-104.216 32.324a1.49 1.49 0 0 0-.686.589c-66.376 99.165-84.56 195.893-75.64 291.421.04.467.303.914.666 1.198 43.793 32.161 86.215 51.685 127.848 64.627a1.656 1.656 0 0 0 1.796-.589c9.848-13.449 18.627-27.63 26.154-42.543.444-.873.02-1.909-.888-2.255-13.925-5.282-27.184-11.723-39.939-19.036-1.009-.589-1.09-2.032-.161-2.723a218.562 218.562 0 0 0 7.932-6.217 1.585 1.585 0 0 1 1.655-.224c83.792 38.257 174.507 38.257 257.31 0a1.578 1.578 0 0 1 1.675.203 204.307 204.307 0 0 0 7.952 6.237c.928.691.867 2.134-.141 2.723-12.755 7.456-26.014 13.754-39.959 19.016a1.633 1.633 0 0 0-.867 2.275c7.689 14.892 16.468 29.073 26.134 42.523.404.569 1.13.813 1.796.609 41.835-12.941 84.257-32.466 128.05-64.627a1.64 1.64 0 0 0 .666-1.178c10.676-110.441-17.881-206.376-75.7-291.421a1.299 1.299 0 0 0-.664-.608zM171.094 327.065c-25.227 0-46.014-23.16-46.014-51.604s20.383-51.604 46.014-51.604c25.831 0 46.417 23.364 46.013 51.604 0 28.444-20.384 51.604-46.013 51.604zm170.127 0c-25.226 0-46.013-23.16-46.013-51.604s20.383-51.604 46.013-51.604c25.832 0 46.417 23.364 46.014 51.604 0 28.444-20.181 51.604-46.014 51.604z" />
                                    </svg>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="footerLinkIcon__jH7i">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M8.75 17.612v4.638a.751.751 0 0 0 1.354.444l2.713-3.692zM23.685.139a.75.75 0 0 0-.782-.054l-22.5 11.75a.752.752 0 0 0 .104 1.375l6.255 2.138 13.321-11.39L9.775 16.377l10.483 3.583a.753.753 0 0 0 .984-.599l2.75-18.5a.751.751 0 0 0-.307-.722z" />
                                    </svg>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;