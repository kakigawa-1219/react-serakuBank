import React, {useCallback,useState} from 'react';
import {useDispatch} from 'react-redux';
import {PrimaryButton, Input} from '../components/UIkit';
import {signUp} from '../reducks/users/operations';
import '../css/login.css'
const SignUp = () => {
    const dispatch  = useDispatch();
    const   [username, setUsername] = useState(""),
            [email, setEmail] = useState(""),
            [password, setPassword] = useState(""),
            [confirmPassword, setConfirmPassword] = useState("");

    const inputUsername = useCallback( (event) => {
        setUsername(event.target.value)
    },[setUsername]);

    const inputEmail = useCallback( (event) => {
        setEmail(event.target.value)
    },[setEmail]);

    const inputPassword = useCallback( (event) => {
        setPassword(event.target.value)
    },[setPassword]);

    const inputConfirmPassword = useCallback( (event) => {
        setConfirmPassword(event.target.value)
    },[setConfirmPassword]);

    return (
        <div>
            <h2 className="center" >アカウント登録</h2>
            <div></div>
            <Input 
                fullWidth={true}
                label={"ユーザ名"}
                margin="dense"
                multiline={false}
                required={true}
                rows={1}
                value={username}
                type={"text"}
                onChange={inputUsername}
            />
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
            <Input 
                fullWidth={true}
                label={"パスワード(確認用)"}
                margin="dense"
                multiline={false}
                required={true}
                rows={1}
                value={confirmPassword}
                type={"password"}
                onChange={inputConfirmPassword}
            />
            <div>
                <PrimaryButton
                label={"登録"}
                onClick={() => dispatch(signUp(username, email, password, confirmPassword))} 
                />
            </div>
        </div>
    )
}
export default SignUp