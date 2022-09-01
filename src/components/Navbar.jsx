export function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-light fixed-top px-5">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">LaptLand</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#whyus">Why us</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#brands">Brands we sell</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#contact-form">Contact us</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#map">Find us</a>
                        </li>
                    </ul>

                    {/*<div className="d-flex">*/}
                    {/*    hello*/}
                    {/*</div>*/}

                </div>
            </div>
        </nav>
    )
}