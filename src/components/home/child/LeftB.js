import React,{Component} from 'react';
import { Buttom} from '../HomeStyle'
import {HashRouter as Router,Link,Route}from "react-router-dom"
import {connect} from 'react-redux'
class LeftB extends Component {


    render() {
        return (
            <div>
                <Buttom>
                    {
                       this.props.bulist.map((item)=>{
                           return(
                               <Link to={`single/${item.id}`}key={item.id} >
                               <div  className="buttom">
                               <img src={item.src} alt=""/>
                               <div className="list">
                               <h3>{item.title}</h3>
                           <span>{item.desc}</span>
                           </div>
                              </div>
                               </Link>
                           )
                       })
                    }

                </Buttom>

            </div>
        )

    }
}
const  stateToProps=(state)=>{
    return{
        bulist:state.home.bulist
    }
}
export default connect( stateToProps,null)(LeftB)