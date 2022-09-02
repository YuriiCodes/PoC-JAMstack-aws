import styles from "../styles/Home.module.css";
import {HeadComponent} from "./HeadComponent";
import {Navbar} from "./Navbar";
import {ProductScreen} from "./ProductScreen";
import {Features} from "./Features";
import {CardGroup} from "./CardGroup";
import {ContactUsForm} from "./ContactUsForm";
import {Map} from "./Map";
import {Footer} from "./Footer";

export function Layout(props) {
    return (
        <div className={styles.container}>
            <HeadComponent />
            <main className={styles.main + "container"}>
                <Navbar />
                {props.children}
            </main>

            <Footer />
        </div>
    )
}