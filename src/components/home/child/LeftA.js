import React,{Component} from 'react';
import { Middle} from '../HomeStyle'
import {connect} from 'react-redux'
class LeftA extends Component {
    constructor() {
        super()
        this.state = {


        }
    }


    render() {
        return (
                <Middle>
                        {
                            this.props.list.map((item)=>{
                                return(
                                    <div key={item.id.toString()} className="fudong">
                                    <img src={item.src} alt=""/>
                                    <span>{item.txt}</span>
                                    </div>
                                )
                            })
                        }

                </Middle>

        )

    }
}
const  stateToProps=(state)=>{
    console.log(state)
    return{
        list:state.home.list
    }
}
export default connect( stateToProps,null)(LeftA)