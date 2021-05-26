import React from 'lib-app/react';
import "./style.scss"
import logoUrl from './assets/logo_dark.png';
export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            switchTipText:"使用账号登录 >"
        }
    }
    render(){
        return <div className="login-container">
            <div className="wrapper">
                <div className="logo-section">
                    <img src={logoUrl} alt="" />
                </div>
                <div className="form-section">
                    <div className="form-item">
                        <input type="text" placeholder="请输入手机号" />
                        {/* <div className="error-text">请填写正确的手机号</div> */}
                    </div>
                    <div className="form-item">
                        <input type="text" placeholder="请输入验证码" />
                        {/* <div className="error-text">请填写正确的验证码</div> */}
                        <div className="fetch-code-box">
                            <span className="fetch-code-btn">
                            获取验证码
                            </span>
                        </div>
                    </div>
                    <div className="commit-box">
                        <button className="commit-btn">登&nbsp;&nbsp;录</button>
                    </div>
                    <div className="switch-box">
                        <span>{this.state.switchTipText}</span>
                    </div>
                </div>
            </div>
        </div>
    }
}