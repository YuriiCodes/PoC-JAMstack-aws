import {useEffect, useState} from "react";
import {DataStore} from '@aws-amplify/datastore';
import {Storage} from 'aws-amplify'
import {Contact} from "../../models";
import {ContactBlock} from './ContactBlock';

export function UsersContacts(props) {
    const [userData, setUserData] = useState("");
    useEffect(() => {
        async function fetchContacts() {
            const models = await DataStore.query(Contact);
            const modelsWithImages = []
            for (const model of models) {
                try {
                    if (model.studentID === "") {
                        modelsWithImages.push({ ...model, image: "https://media.istockphoto.com/vectors/no-image-available-icon-vector-id1216251206?k=20&m=1216251206&s=170667a&w=0&h=A72dFkHkDdSfmT6iWl6eMN9t_JZmqGeMoAycP-LMAw4="})
                    } else {
                        const modelImage = await Storage.get(model.studentID)
                        modelsWithImages.push({ ...model, image: modelImage})
                    }
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
        <div className="my-5">
            <div style={{width: '600px', margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <h1>Messages from clients</h1>
                <button onClick={props.signOut} type="button" class="btn btn-secondary" style={{width: '150px'}}> Log out</button>
            </div>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-3 mb-5">
                {userData ? userData.map(data => <ContactBlock data={data}/>): <p>Loading</p> }
            </div>
        </div>

    )
}