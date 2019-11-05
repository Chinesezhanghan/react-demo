import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import boot from './static/bootstrap/css/bootstrap.css'
import redue from 'redux'
import { ConfigProvider, DatePicker, message } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import store from './store/store'
import {Provider} from 'react-redux'
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

    , document.getElementById('root'));

