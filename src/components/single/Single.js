import React,{Component} from "react"
import axios from "axios"
import {SingleWarp} from"./SingleStyle"
import Head from "../head/Head"
import Foot from "../foot/Foot"
class Single extends Component{
 state={
     list:[]
 }
    render(){
        return(
            <div>
                <Head></Head>
                <SingleWarp>

                {
                    this.state.list.map((item)=>{
                        return(
                            <div key={item.id}>
                               <h2>{item.title}</h2>
                                <div>{item.desc}</div>
                            </div>
                        )
                    })
                }
                </SingleWarp>
                <Foot></Foot>
            </div>


        )
    }
    componentDidMount(){
        axios.get("/data/test.json").then((res)=>{
            let num =this.props.match.params.id;
             let list=res.data.singleList.splice(num-1,1);
             this.setState({
                 list:list
             })
        })
    }
}

export default Single