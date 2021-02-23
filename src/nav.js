import React,{useState} from 'react';
import Dropdown from './dropdown';
function Nav() {
const [active,setActive] = useState(false);
const kojin = (
    <ul className="nav_item">
    <li>普通預金</li>
    <li> 定期預金・積立</li>
    <li> 外貨預金</li>
    <li> 外債</li>
    <li> ファンドラップ</li>
    <li> 個人向け国債</li>
    <li> 退職金運用のご案内</li>
  </ul>
)
const houjin = (
    <ul className="nav_item">
    <li>資金調達</li>
    <li>国際業務・外為取引 </li>
    <li> 福利厚生</li>
    <li> 事業戦略・経営相談</li>
    <li> 振込・入金確認の効率化</li>
    <li> 電子記録債権・手形関連</li>
  </ul>
)
const kabu = (
    <ul className="nav_item">
      <li>せらくグループの概要</li>
      <li> 決算公告</li>
      <li> 社債情報</li>
    </ul>
)
const saiyou = (
    <ul className="nav_item">
      <li>新卒採用</li>
      <li> キャリア採用</li>
      <li> 海外現地採用</li>
      <li> 契約社員のお仕事</li>
      <li> 派遣社員のお仕事</li>
    </ul>

)
const about = (
    <ul className="nav_item">
      <li>ごあいさつ</li>
      <li> 事業内容</li>
      <li> 企業の社会的責任(CSR)</li>
      <li> 役員一覧</li>
      <li> 組織体制</li>
      <li> お問合わせ先</li>
    </ul>
    
)
const [click,setClick] = useState(false);
const handleClick = () => setClick(!click);
    return(
      <>
      <div className={click ? 'toggle_btn active' : 'toggle_btn'} onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    
     
    <div id="nav" className={click ? 'active' : 'inactive'} >
        
      <Dropdown title="個人のお客様"  drop_item={kojin} active={active} setActive={setActive}/>
      <Dropdown title="法人のお客様" drop_item={houjin} active={active} setActive={setActive}/>
      <Dropdown title="株主・投資家の皆様" drop_item={kabu} active={active} setActive={setActive}/>
      <Dropdown title="採用情報" drop_item={saiyou} active={active} setActive={setActive}/>
      <Dropdown title="せらく銀行について" drop_item={about} active={active} setActive={setActive}/>
      </div>
      </>
    );
}

export default Nav