import Link from "next/link";
import { useState } from "react";
import { Logo } from "../Logo";
import { useRouter } from "next/router";

function TopIsland() {
    const [floatingIslandIsVisible, setFloatingIslandIsVisible] = useState(false);
    const router = useRouter();
    const activePage = router.pathname;

    return (
        <>
            <div className="topIsland__KWf1">
                <header className="topIslandHeader__KWf1">
                    <Link href={"/"}>
                        <div className="topIslandLogoContainer__KWf1">
                            <Logo />
                        </div>
                    </Link>
                    <div className="topIslandMenu__KWf1">
                        <ul className="topIslandMenuList__KWf1">
                            <li>
                                <Link href={"/"}>
                                    <span className={`menuLink ${activePage === "/" ? "active" : null}`}>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/marketplace"}>
                                    <span className={`menuLink ${activePage === "/marketplace" ? "active" : null}`}>Marketplace</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/trends"}>
                                    <span className={`menuLink ${activePage === "/trends" ? "active" : null}`}>Trends</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="actionButtons__KWf1">
                        <button className="topIslandCreateNFTButton__KWf1">
                            <span>Create</span>
                        </button>
                    </div>
                    <div className="menuToggler__KWf1" onClick={() => setFloatingIslandIsVisible(!floatingIslandIsVisible)}>
                        <svg viewBox="0 0 24 12">
                            <rect width="24" height="2"></rect>
                            <rect y="5" width="24" height="2"></rect>
                            <rect y="10" width="24" height="2"></rect>
                        </svg>
                    </div>
                </header>
                <div className={`floatIsland__KWf1 ${floatingIslandIsVisible ? "visible" : null}`}>
                    <div className="floatingIslandHeader__KWf1">
                        <div className="toggleFloatingIslandVisibility__KWf1" onClick={() => setFloatingIslandIsVisible(!floatingIslandIsVisible)}>
                            <div className="closeIcon__KWf1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="m292.2 256 109.9-109.9c10-10 10-26.2 0-36.2s-26.2-10-36.2 0L256 219.8 146.1 109.9c-10-10-26.2-10-36.2 0s-10 26.2 0 36.2L219.8 256 109.9 365.9c-10 10-10 26.2 0 36.2 5 5 11.55 7.5 18.1 7.5s13.1-2.5 18.1-7.5L256 292.2l109.9 109.9c5 5 11.55 7.5 18.1 7.5s13.1-2.5 18.1-7.5c10-10 10-26.2 0-36.2z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <ul className="floatingIslandMenuList__KWf1">
                        <li className="menuLinkItem__KWf1">
                            <Link href={"/"}>
                                <span className={`menuLink ${activePage === "/" ? "active" : null}`}>Home</span>
                            </Link>
                        </li>
                        <li className="menuLinkItem__KWf1">
                            <Link href={"/marketplace"}>
                                <span className={`menuLink ${activePage === "/marketplace" ? "active" : null}`}>Marketplace</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/trends"}>
                                <span className={`menuLink ${activePage === "/trends" ? "active" : null}`}>Trends</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TopIsland;