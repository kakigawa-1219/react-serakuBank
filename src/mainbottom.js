import React from 'react'
import TabSum from './tab'
import Accordion from './accordion'
import './css/mainbottom.css'
import Login from './login'
import API from './api'
import {useSelector} from 'react-redux'

const Greeting = () => {
    const selector = useSelector(state => state);
    const isSignedIn = selector.users.isSignedIn;
    if (isSignedIn) {
      return <API />;
    }
    return <Login />;
    
  }

const MainBottom = () =>{
        return(
         <div id="main2">

            <div id="main2_left">
              <Greeting/>
                <div id="service_guide">
                    <h2>サービスのご案内</h2>
                    <ul>
                        <li>店舗<br></br>・<br></br>ATM検索</li>
                        <li>資料請求</li>
                        <li>金利一覧</li>
                        <li>手数料</li>
                        <li>よくある<br></br>ご質問</li>
                        <li>投資信託基準<br></br>価格一覧</li>
                    </ul>

                </div>

                <div id="guide1">
                    <ul>
                        <li>口座開設のご案内</li>
                        <li>金融経済ニュース</li>
                        <li>詐欺に注意！！</li>
                    </ul>
                </div>

                <div id="guide2">
                    <ul>
                        <li>テレビCM・動画のご紹介</li>
                        <li>今から考える教育ローン</li>
                    </ul>
                </div>
                <div id="guide3">
                   <div><img src="./images/caution.png" alt=""></img></div>
                </div>

            </div>
            <div id="main2_right">

                <div id="main2_right_top">
                    <Accordion />
                </div>

                <div id="main2_right_bottom"> 
                   <TabSum/>
                </div>
            </div>
            
         </div>

        );
    }
 

export default MainBottom