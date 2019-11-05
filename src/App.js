import React from 'react';
import {GlobalStyle} from "./style";
import {HashRouter as Router,Link,Route}from "react-router-dom"
import Index from "./components/index/Index"
import Detail from "./components/detail/Detail"
import Single from "./components/single/Single"
import Login from "./components/login/Login"
function App() {
  return (
    <div className="App">

       <Router>
           <Route path="/" component={App}>
           <Route exact path="/" component={Index}></Route>
           <Route path="/detail" component={Detail}></Route>
               <Route path="/single/:id" component={Single}></Route>
               <Route path="/login" component={Login}></Route>
           </Route>
       </Router>
    </div>
  );
}

export default App;
