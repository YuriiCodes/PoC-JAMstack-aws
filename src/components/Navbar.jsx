import Link from "next/link";

export function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-light fixed-top px-5">
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand">LaptLand</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link  href="/#whyus">
                                <a className="nav-link" aria-current="page">Why us</a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link  href="/#brands">
                                <a className="nav-link">Brands we sell</a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/#contact-form">
                                <a className="nav-link">Contact us</a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/#map">
                                <a className="nav-link">Find us</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}