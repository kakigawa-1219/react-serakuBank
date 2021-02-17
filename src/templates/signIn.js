import React, {useCallback,useState} from 'react';
import {useDispatch} from 'react-redux';
import {PrimaryButton, Input} from '../components/UIkit';
import {signIn} from '../reducks/users/operations';
import '../css/login.css';
const SignIn = () => {
    const dispatch  = useDispatch();
    const [email, setEmail] = useState(""),
          [password, setPassword] = useState("");

    const inputEmail = useCallback( (event) => {
        setEmail(event.target.value)
    },[setEmail]);

    const inputPassword = useCallback( (event) => {
        setPassword(event.target.value)
    },[setPassword]);


    return (
        <div className="login" >
            <h2 className="center" >ログイン</h2>
            <div></div>
            <Input 
                fullWidth={true}
                label={"メールアドレス"}
                margin="dense"
                multiline={false}
                required={true}
                rows={1}
                value={email}
                type={"email"}
                onChange={inputEmail}
            />
            <div className="text-space"></div>
            <Input 
                fullWidth={true}
                label={"パスワード"}
                margin="dense"
                multiline={false}
                required={true}
                rows={1}
                value={password}
                type={"password"}
                onChange={inputPassword}
            />
            <div className="text-space"></div>
            <div>
                <PrimaryButton
                label={"ログイン"}
                onClick={() => dispatch(signIn(email, password))} 
                />
            </div>
        </div>
    )
}
export default SignIn