import React from 'react';
import './css/header.css';
function Header() {
    const public_path = `${process.env.PUBLIC_URL}/images`;
return(
<header>
    <h1><img src={`${public_path}/logo.png`} alt="" id="link-top"/></h1>
    
    <div id="code">金融機関コード:0917</div>
    <div id="font-size">
        <div id="moji-size">文字サイズ</div>
        <div id="syou"><img src={`${public_path}/fontsize_s.png`} alt=""/> </div>
        <div id="tyuu"><img src={`${public_path}/fontsize_m.png`}  alt=""/> </div>
        <div id="dai"><img  src={`${public_path}/fontsize_l.png`}  alt=""/> </div>
    </div>
    <div>
        <div id="eigo">
            <div id="global"><u>global site</u></div>
            <div id="site-map"><u>site map</u></div>
        </div>
        <div>
            <div id="search" ><input type="text" placeholder="検索ワードを入力"></input></div> 
            <input type="image"src={`${public_path}/search.png`} id="button" alt=""></input> 
        </div>
    </div>
</header>
);
}
export default Header