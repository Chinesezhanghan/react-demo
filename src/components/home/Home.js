import React,{Component} from 'react';
import {HomeWrap,LeftWrap,RightWrap} from "./HomeStyle"
import axios from "axios"
import LeftA from "./child/LeftA"
import LeftB from "./child/LeftB"
import RightA from "./child/RightA"
import RightB from "./child/RightB"
import {connect} from "react-redux"
class Home extends Component {

    render() {
        return (
            <div>
                <HomeWrap>
                    <LeftWrap>
                        <img src="http://asset.ibanquan.com/s/30611/727/index_slide_2?v=1568268246_1572510848" alt=""/>
                        <LeftA ></LeftA>
                        <LeftB></LeftB>
                    </LeftWrap>
                    <RightWrap>
                        <RightA></RightA>
                        <RightB></RightB>
                    </RightWrap>
                </HomeWrap>
            </div>
        )

    }
    componentDidMount(){
        axios.get("/data/getHomeList.json").then((res)=>{
            const data=res.data.data
            const action={
                type:"getdata",
                data
            }
            this.props.getData(action)

        })
}
}

const dispatchToProps=(dispatch)=>({
    getData(action){
        dispatch(action)
    }




    })
export default connect(null,dispatchToProps) (Home)