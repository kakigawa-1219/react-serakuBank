
import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {signOut} from './reducks/users/operations';
import {TransitionButton} from './components/UIkit';
const API = () => {
    const dispatch = useDispatch();
    const [items, setItem] = useState(Object);
    const [times, setTime] = useState(Object);
       useEffect(() => {
        fetch("https://api.exchangeratesapi.io/latest")
        .then(res => res.json())
        .then(json => {
          setItem({
            items: json.rates
          });
          setTime({
              times: json.date
            });
        });
       },[])  
        console.log("A");
     var JPY= (Object.keys(items).map(key => (
        items[key].JPY)
       
      ));
      var USD= (Object.keys(items).map(key => (
        items[key].USD)
      ));

      var time= (Object.keys(times).map(key => (
        times[key])
      ));
      
      
const exchange = (JPY/USD).toFixed(3);
    return(
        <div>
              <div>
                <h2 className="center" >為替　米ドル→日本円</h2>
                  <p className="center" > {exchange}円</p>
                  <p className="center">最新更新日：{time}</p>
             
            </div>

          
            <TransitionButton
        label={"ログアウト"}
        onClick={() => dispatch(signOut())} 
        />
        </div>
        

    )
}

export default API

