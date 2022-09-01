const BG_URL = "https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1287&dpr=2";
import styles from "./ProductScreen.module.css"

export function ProductScreen(props) {
    return (
        <div

            className={"shadow-lg content position-relative overflow-hidden mt-3 text-center bg-light d-flex justify-content-center  align-items-center jumbotron"
            }
            // style={{
            //     display: 'block',
            //     backgroundImage: `url(${BG_URL})`,
            //     backgroundPosition: 'center',
            //     backgroundSize: 'cover',
            //     // filter: 'blur(5px)',
            //     backdropFilter: 'blur(5px)',
            //     backgroundRepeat: 'no-repeat'
            // }}
        >
            <div style={{
                display: 'block',
                backgroundImage: `url(${BG_URL})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                filter: 'blur(3px)',
                backdropFilter: 'blur(3px)',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%',
            }}></div>
            <div className="col-md-5 p-lg-5 mx-auto my-5">
                <h1 className="display-4 fw-normal">Welcome to LaptLand👋</h1>
                <p className="lead fw-normal">You won't resist buying from us. Our prices are simply stunning.</p>
                <a className="btn btn-outline-secondary" href="src/components/productScreen#ProductScreen.jsx">Explore
                    avaliable brands</a>
            </div>
            <div className="product-device shadow-sm d-none d-md-block"></div>
            <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
    )
}