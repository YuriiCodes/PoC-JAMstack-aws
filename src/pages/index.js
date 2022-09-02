import styles from '../styles/Home.module.css'
import {Navbar} from "../components/Navbar";
import {ProductScreen} from "../components/ProductScreen";
import {Features} from "../components/Features";
import {CardGroup} from "../components/CardGroup";
import {ContactUsForm} from "../components/ContactUsForm";
import {Footer} from "../components/Footer";
import {HeadComponent} from "../components/HeadComponent";
import {Map} from "../components/Map";
import {Stepper} from "../components/Stepper";

export default function Home() {
    return (
        <>
            <ProductScreen/>
            <Features/>
            <CardGroup/>
            <ContactUsForm/>
            <Map/>
        </>
    )
}
