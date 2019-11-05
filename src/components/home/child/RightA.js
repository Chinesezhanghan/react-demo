import React,{Component} from 'react';
import {RightTop} from '../HomeStyle'
import {connect} from 'react-redux'
class RightA extends Component {
    state={

    }
    render() {
        return (
            <div>
                <RightTop>
                    {
                        this.props.rList.map((item)=>{
                            return(
                                <div key={item.id}>
                                    <img src={item.src} alt=""/>
                                    <p>{item.p}</p>
                                </div>
                            )
                        })
                    }
                </RightTop>
            </div>
        )

    }
}
const  stateToProps=(state)=>{
    return{
        rList:state.home.rList
    }
}
export default connect( stateToProps,null)(RightA)