import React,{Component} from 'react';
import {RightBottom} from '../HomeStyle'
import {connect} from 'react-redux'
class RightB extends Component {
    state={

    }
    render() {
        return (
            <div>
                <RightBottom>
                   <div>
                       <img src="http://asset.ibanquan.com/s/30611/727/footerImgShow_2?v=1568268246_1572510848" alt=""/>
                       <img src="http://asset.ibanquan.com/s/30611/727/footerImgShow_1?v=1568268246_1572510848" alt=""/>
                   </div>
                    <ul>
                        {
                            this.props.blist.map((item,index)=>{
                                return(
                                    <li key={index.toString()}>
                                        {item}
                                    </li>
                                )
                            })
                        }

                    </ul>
                </RightBottom>
            </div>
        )

    }
}
const  stateToProps=(state)=>{
    return{
        blist:state.home.blist
    }
}
export default connect ( stateToProps,null)(RightB)