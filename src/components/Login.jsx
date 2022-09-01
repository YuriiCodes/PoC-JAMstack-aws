import {useState} from "react";
import {Auth} from "aws-amplify";

 export function Login(props) {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    return (
        <form className="form-inline " style={{
            marginTop: '15vh',
        }} onSubmit={async (e) => {
            e.preventDefault();
            console.log(email, pass)

            try {
                const user = await Auth.signIn(email, pass);
            } catch (error) {
                console.log('error signing in', error);
            }

            console.log("submitted");
        }}>
            <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="inputMail" >Email</label>
                <input type="email" className="form-control" id="inputMail" placeholder="Email" name="email" onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="inputPassword2" className="sr-only">Password</label>
                <input type="password" className="form-control" id="inputPassword2" placeholder="Password" name="password" onChange={e => setPass(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary mb-2">Confirm identity</button>
        </form>
    )
}
