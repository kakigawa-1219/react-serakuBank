import React from 'react';
import {useDispatch} from 'react-redux';
//URL遷移
import {push} from 'connected-react-router';
import '../css/index.css';
const Login = () => {
    const dispatch = useDispatch();
    return(
        <div>
            <h2 className="center" >ログイン</h2>
            <button onClick = { () => dispatch(push('/'))}>
                ログインする
            </button>
        </div>
    )
}

export default Login