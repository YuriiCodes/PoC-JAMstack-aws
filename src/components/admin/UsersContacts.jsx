import {useEffect, useState} from "react";
import {DataStore} from '@aws-amplify/datastore';
import {Storage} from 'aws-amplify'
import {Contact} from "../../models";

export function UsersContacts(props) {
    const [userData, setUserData] = useState("");
    useEffect(() => {
        async function fetchContacts() {
            const models = await DataStore.query(Contact);
            const modelsWithImages = []
            for (const model of models) {
                try {
                    const modelImage = await Storage.get(model.studentID)
                    modelsWithImages.push({ ...model, image: modelImage})
                } catch(err) {
                    console.log(err)
                }
            }
            setUserData(modelsWithImages);
            console.log(modelsWithImages);
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
                    <li><img src={data.image}/></li>
                </ul>
            )): <p>Loading</p> }
        </div>

    )
}