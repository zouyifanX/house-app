import React, { Component } from 'react'
import { List, InputItem, Flex, WhiteSpace, WingBlank, Button, } from 'antd-mobile';
import {Link} from 'react-router-dom'
import {LoginApi} from '../apis/apis'

export default class login extends Component {
    state = {
        phone: '',
        pwd: ''
    }
    ChangeNum = (val) => {
        this.state.phone = val
        this.setState({})
    }
    ChangePwd = (val) => {
        this.state.pwd = val
        this.setState({})
    }
    LoginBtn = ()=>{
        const {phone,pwd} = this.state
        LoginApi({password:pwd,phoneNum:phone})
        .then(res=>{
            const {data,token} = res
            if(token){
                localStorage.setItem('token',token)
                localStorage.setItem('phone',data.phoneNum)
                this.props.history.replace('/')
            }else{

            }
        })
        .catch((e)=>{
            console.log(e);
            
        })
        
    }
    render() {
        let { phone, pwd } = this.state
        return (
            <div style={{ position: "fixed", top: '0', bottom: '0', left: '0', right: '0', background: '#fff' }}>
                <WhiteSpace size="xl" />
                <Flex justify="center">
                    <img src={require('../assets/imgs/logo.png')} width='150' />
                </Flex>

                <WingBlank size="lg">
                    <WhiteSpace size="xl" />
                    <WhiteSpace size="xl" />
                    <List>
                        <InputItem
                            type='number'
                            maxLength='11'
                            onChange={this.ChangeNum}
                            value={phone}
                            placeholder="请输入手机号"
                        >
                            <div style={{ backgroundImage: `url(${require('../assets/imgs/phone.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                        <InputItem
                            onChange={this.ChangePwd}
                            value={pwd}
                            placeholder="请输入密码"
                            type='password'
                        >
                            <div style={{ backgroundImage: `url(${require('../assets/imgs/pwd.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                    </List>
                    <WhiteSpace size="xl" />
                    <Button onClick={this.LoginBtn} style={{ background: '#00BC5B', color: '#fff', fontWeight: '500', fontSize: '20px' }}>登陆</Button>
                    <WhiteSpace size="xl" />
                    <Flex justify="between" >
                        <Link to='./reg'style={{color:'#00BC5B'}}>手机快速注册</Link>
                        <Link to='/forgot'style={{color:'#00BC5B'}}>忘记密码？</Link>
                    </Flex> 
                </WingBlank>

            </div>

        )
    }
}
