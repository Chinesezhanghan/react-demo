import styled from 'styled-components';
import logo from './../../static/logo.jpg'
export const HomeWrap = styled.div`
  width:100%;
  height:60px;
  background-color:#ccc;
`;
export const Logo = styled.div`
  width:120px;
  height:60px;
   float: left;
  margin-left: 20px;
  background:url(${logo});
  background-size:cover
`;
export const Option = styled.div`
  margin-left: 150px;
  float: left;
  width: 200px;
  height: 60px;
  
`;
export const Span = styled.span`
  font-size: 16px;
   line-height: 60px;
   margin-left: 30px;
`;
export const Right = styled.div`
position: relative;
  float: right;
  margin-right: 150px;
  height: 60px;
  .ico{
  position: absolute;
  right: 20px;
  top:28px;
  }
  div{
  float: left;
  margin-left: 500px;
  height: 60px;
  text-align: center;
  span{
  font-size: 16px;
  margin-left: 10px;
  line-height: 70px;
  }
  }
`;
export const Input = styled.input.attrs({placeholder:"请输入内容"})`
width: 160px;
height: 30px;
boder:none;
outline: none;
border-radius:20px;
margin-top: 20px;
margin-left: 40px;
padding-left: 20px;
background-color: #ddd;
transition: 1s;
&.active{
width: 200px;
transition: 1s;
}
`;
