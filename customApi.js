import { DataStore } from '@aws-amplify/datastore';
import { Contact } from './models';

export  const SavePost = async () => {
    await DataStore.save(
        new Contact({
            "name": "Lorem ipsum dolor sit amet",
            "number": "(555) 123-6789",
            "studentID": "Lorem ipsum dolor sit amet",
            "message": "Lorem ipsum dolor sit amet",
            "phone": "(555) 123-6789"
        })
    );
}