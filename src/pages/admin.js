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
        <div className={styles.container}>
            <HeadComponent/>
            <main className={styles.main + "container"}>
                <Navbar/>

                <div style={{
                    marginTop: '10vh',
                }}>
                    <UsersContacts signOut={signOut}/>
                </div>
            </main>

            <Footer/>
        </div>
    )
}

export default withAuthenticator(Home);