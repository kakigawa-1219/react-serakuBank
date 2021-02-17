import {signInAction, signOutAction} from './actions';
import {push} from 'connected-react-router';
import {auth, db} from '../../firebase/index';


export const signIn = (email, password) => {
    return async (dispatch) =>{
        if(email === "" || password === ""){
            alert("未入力があります");
            return false
        }
        return auth.signInWithEmailAndPassword(email,password)
        .then(result => {
                const user = result.user;
                if (!user) {
                    alert('ユーザーIDを取得できません');
                    return false
                }
                    const uid = user.uid;
                return db.collection('users').doc(uid).get()
                    .then(snapshots => {
                        const data = snapshots.data();
                        dispatch(signInAction({
                            isSignedIn:true,
                            role:data.role,
                            uid: uid,
                            username: data.username
                        }));
                        dispatch(push('/'));
                    
                    })
                }
            )
    }
    
}





export const signUp = (username, email, password, confirmPassword) => {

    return async(dispatch) => {
        if(username === "" || email === "" || password === "" || confirmPassword === "" ){
            alert("未入力があります");
            return false
        }
        if (password !== confirmPassword ){
            alert("パスワードが一致していません");
            return false
        }
        return auth.createUserWithEmailAndPassword(email,password).then(result => {
            const user = result.user;

            if(user) {
                const uid = user.uid;
                const userInitialData = {
                    email: email,
                    role: "customer",
                    uid: uid,
                    username: username
                };
                db.collection('users').doc(uid).set(userInitialData).then(() => {
                    dispatch(push('/'));
                })
            }
        })
    }
  
}

export const signOut = () =>{
    return async(dispatch) =>{
        auth.signOut().then(() => {
            dispatch(signOutAction());
        })
    }
}