import React,{Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import '../css/Gnb.css'

class Gnb extends Component {

    render(){
        return(
            <Fragment>
                <div className="gnb_wrap">
                    <ul className="gnb_left">
                        <li><NavLink exact to ={"/main"}>Home</NavLink></li>
                        <li><NavLink to ={"/foster"}>임시 보호</NavLink></li>
                        <li><NavLink to ={"/adoption"}>입양</NavLink></li>
                        <li><NavLink to ={"/secondUse"}>중고물품</NavLink></li>
                        <li><NavLink to ={"/recommendation"}>추천 상품</NavLink></li>
                        <li><NavLink to ={"/talktalk"}>스토리 톡톡</NavLink></li>
                    </ul>
                    <ul className="gnb_right">
                        <li><NavLink to ={"/login"}>로그인</NavLink></li>
                        <li><NavLink to ={"/join"}>회원가입</NavLink></li>
                    </ul>
                </div>
            </Fragment>
        );
    }
}

export default Gnb;
