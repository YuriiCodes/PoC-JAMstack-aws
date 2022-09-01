import {useEffect, useState} from "react";
import {DataStore} from '@aws-amplify/datastore';
import {Contact} from "../../models";

export function UsersContacts(props) {
    const [userData, setUserData] = useState("");
    useEffect(() => {
        async function fetchContacts() {
            const models = await DataStore.query(Contact);

            setUserData(models);
            console.log(models);
        }

        fetchContacts()

    }, [])


    return (
        <div>
            <h1> UsersContacts</h1>
            {userData ? userData.map(data => (
                <ul>
                    <li>{data.name}</li>
                    <li>{data.email}</li>
                    <li>{data.phone}</li>
                    <li>{data.message}</li>
                    <li>{data.studentID}</li>
                </ul>
            )): <p>Loading</p> }
        </div>

    )
}