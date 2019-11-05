import  React,{Component} from "react"
import {LoginWrp} from "./LoginStyle"
import { Input,Button } from 'antd';
import axios from "axios"
class Login extends  Component {
    state = {
        username: "",
        password: ""
    }

    inpName(e) {
        this.setState({
            username: e.target.value
        })
    }

    inpPsw(e) {
        this.setState({
            password: e.target.value
        })
    }

    Login() {
        axios.post("/api",{
            username:this.state.username,
            password:this.state.password
        }).then((res)=>{
          console.log(res)
            if(res.data==1){
              this.props.history.push("/")

                localStorage.setItem(this.state.username,this.state.password)
            }else{
                alert("用户名或密码不正确")
                this.props.history.push("/login")

            }
        })
    }


    render(){
        return (
            <LoginWrp>
                <h3>请您登录</h3>
                <Input placeholder="账号" onChange={this.inpName.bind(this)} value={this.state.username}/>
                <Input placeholder="密码" type="password" onChange={this.inpPsw.bind(this)} value={this.state.password}/>
                <br/>
                <Button type="primary" onClick={this.Login.bind(this)}>登录</Button>
            </LoginWrp>
        )

}
}
export  default Login