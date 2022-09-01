import styles from '../styles/Home.module.css'
import {Navbar} from "../components/Navbar";
import {ProductScreen} from "../components/ProductScreen";
import {Features} from "../components/Features";
import {CardGroup} from "../components/CardGroup";
import {ContactUsForm} from "../components/ContactUsForm";
import {Footer} from "../components/Footer";
import {HeadComponent} from "../components/HeadComponent";

export default function Home() {
    return (
        <div className={styles.container}>
            <HeadComponent />
            <main className={styles.main + "container"}>
                <Navbar />
                <ProductScreen />
                <Features />
                <CardGroup />
                <br />
                <ContactUsForm />
            </main>

            <Footer />
        </div>
    )
}
