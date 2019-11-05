import React,{Component} from 'react';
import {HomeWrap,Logo,Option,Span,Input,Right} from "./HeadStyle"
import {connect} from 'react-redux'
import {HashRouter as Router,Link,Route}from "react-router-dom"
import * as headAction from "./headAction"
function add(flag) {
    if(flag==true){
        return(
            <div>
            <span>陶瓷</span>
            <span>水泥制品</span>
           <span>极简工艺</span>
            </div>
        )
    }else{
        return null
    }
}

function Head(props){
     const {flag,InpFocus,InpBlur}=props
        return(
            
             <HomeWrap>
                 <Logo></Logo>
                 <Option>
                        <Router>
                            <Span><Link to="/login">登录</Link></Span>
                         <Span><Link to="/">首页</Link></Span>
                         <Span><Link to="/detail">详情界面</Link></Span>
                        </Router>

                 </Option>
                 <Right>
                     <Input  className={flag==true?'active':''}
                             onFocus={InpFocus}
                             onBlur={InpBlur}
                      />
                     <span className="glyphicon glyphicon-search ico"></span>

                         {add(flag)}

                 </Right>
             </HomeWrap>
        )




}
const stateToProps= (state)=>{
    return{
        flag:state.head.flag
    }

}
const  dispathToProps=(dispath)=>({

        InpFocus(){

            dispath(headAction.onFoucus())
        },
        InpBlur(){

            dispath(headAction.onBlur())
        }

})
export default connect(stateToProps,dispathToProps) (Head)