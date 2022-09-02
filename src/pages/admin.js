import styles from '../styles/Home.module.css'
import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import {HeadComponent} from "../components/HeadComponent";

import {Amplify} from 'aws-amplify';
import {withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from "../aws-exports";

Amplify.configure(awsExports);

import {Auth} from 'aws-amplify';
import {UsersContacts} from "../components/admin/UsersContacts";

async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

function Home() {
    return (
        <>
            <div style={{
                marginTop: '10vh',
                height: '90vh',
            }}>
                <UsersContacts signOut={signOut}/>
            </div>
        </>
    )
}

export default withAuthenticator(Home);