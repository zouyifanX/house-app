import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import Home from './home'
import Wechat from './wechat'
import Star from './star'
import Me from './me'


export default class main extends Component {
    state = {
        selectedTab: 0,
        list: [
            { id: 0, img: 'home', name: '首页' },
            { id: 1, img: 'wechat', name: '微聊', },
            { id: 2, img: 'star', name: '收藏' },
            { id: 3, img: 'me', name: '我的' },
        ],
    };
    renderContent(id) {
        switch (id) {
            case 0:
                return <Home />
            case 1:
                return <Wechat />
            case 2:
                return <Star />
            case 3:
                return <Me />

            default:
                return <Home />
                break;
        }
    }
    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#00BC5B"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    {
                        this.state.list.map((item, key) => {
                            const { id, img, name } = item
                            return (
                                <TabBar.Item
                                    title={name}
                                    key={id}
                                    icon={<div style={{
                                        width: '22px',
                                        height: '22px',
                                        background: `url(${require('../../assets/imgs/' + img + '.png')}) center center /  21px 21px no-repeat`
                                    }}
                                    />
                                    }
                                    selectedIcon={<div style={{
                                        width: '22px',
                                        height: '22px',
                                        background: `url(${require('../../assets/imgs/' + img + '_tint.png')}) center center /  21px 21px no-repeat`
                                    }}
                                    />
                                    }
                                    selected={this.state.selectedTab === id}
                                    onPress={() => {
                                        this.setState({
                                            selectedTab: id,
                                        });
                                    }}
                                >
                                    {this.renderContent(id)}
                                </TabBar.Item>
                            )
                        })
                    }




                </TabBar>
            </div>
        );
    }

}
