import React, { Component } from 'react'
import { List, InputItem, WhiteSpace, WingBlank, Button, Flex, Checkbox } from 'antd-mobile';
import { Link } from 'react-router-dom'
const AgreeItem = Checkbox.AgreeItem;

export default class reg extends Component {
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
                            type='password'
                            placeholder="请输入密码"
                        />
                        <InputItem
                            placeholder="请输入验证码"
                        />
                    </List>
                    <Flex>
                        <Flex.Item>
                            <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)} >
                                我以同意 <a onClick={(e) => { e.preventDefault(); }} style={{ color: '#00BC5B', fontSize: '14px' }}>《用户服务协议》及《隐私权政策》</a>
                            </AgreeItem>
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace size="xl" />
                    <Button style={{ background: '#00BC5B', color: '#fff', fontWeight: '500', fontSize: '20px' }}>注册</Button>
                    <WhiteSpace size="lg" />
                    <Link to='./login' style={{ color: '#00BC5B' }}>已有账号</Link> 

                </WingBlank>
            </div>
        )
    }
}
