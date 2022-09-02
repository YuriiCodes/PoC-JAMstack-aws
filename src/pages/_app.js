import '../styles/globals.css';
import {Amplify} from "aws-amplify";
import config from '../aws-exports';
import {AmplifyProvider} from "@aws-amplify/ui-react";
import "bootstrap/dist/css/bootstrap.css";
import {Layout} from "../components/Layout";

Amplify.configure(config)

function MyApp({Component, pageProps}) {
    return (
        <AmplifyProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AmplifyProvider>)
}

export default MyApp
