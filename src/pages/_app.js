import '../styles/globals.css';
import {Amplify} from "aws-amplify";
import config from '../aws-exports';
import {AmplifyProvider} from "@aws-amplify/ui-react";
import "bootstrap/dist/css/bootstrap.css";
Amplify.configure(config)

function MyApp({Component, pageProps}) {
    return <AmplifyProvider> <Component {...pageProps} /> </AmplifyProvider>
}

export default MyApp
