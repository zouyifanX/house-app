import React, { Component } from 'react'
import { List, InputItem, WhiteSpace, WingBlank, Button, } from 'antd-mobile';


export default class forgot extends Component {
    affirm =()=>{
        this.props.history.push('./login')    
    }
    render() {
        return (
            <div style={{ position: "fixed", top: '0', bottom: '0', left: '0', right: '0', background: '#fff' }}>
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <WingBlank size="lg">
                    <List>
                        <InputItem
                            placeholder="请输入手机"
                        />
                        <InputItem
                            placeholder="请输入验证码"
                        />
                        <InputItem
                            type='password'
                            placeholder="请输入新密码"
                        />
                    </List>
                    <WhiteSpace size="xl" />
                    <Button style={{ background: '#00BC5B', color: '#fff', fontWeight: '500', fontSize: '20px' }} onClick={this.affirm}>确认修改密码</Button> 

                </WingBlank>
            </div>
        )
    }
}
