import React,{Component} from 'react';
import Head from "../head/Head"
import Home from "../home/Home"
import Foot from "../foot/Foot"
class Index extends Component{
   render(){
       return(
           <div>
               <Head/>
               <Home/>
               <Foot/>
           </div>
       )
   }
}
export default Index