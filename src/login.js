import React from 'react'
import {TransitionButton} from './components/UIkit';
import {useDispatch} from 'react-redux';
import {push} from 'connected-react-router';

const Login = () => {

    const dispatch  = useDispatch();
        return(
          <div id="login">
                    <h2>インターネットバンキング</h2>
                    <div >せらく銀行インターネットバンキング</div>
                    <TransitionButton
                label={"ログインサービス"}
                onClick={() => dispatch(push('/signIn'))} 
                />
                 <TransitionButton
                label={"初めてログインする方"}
                onClick={() => dispatch(push('/signUp'))} 
                />
                   <div><a href="../">＞パスワード忘れた方はこちら</a></div>
            </div>

        );
    }
 

export default Login