import React, { Component } from 'react'
import { Flex, Carousel, WingBlank, WhiteSpace } from 'antd-mobile';
export default class home extends Component {

    state = {
        city: '加载中...',
        data: ['banner0', 'banner1', 'banner2'],
        imgHeight: 'auto',
        fang: [
            { name: '新房', color: '#ff5a5f' },
            { name: '二手房', color: '#a782b9' },
            { name: '租房', color: '#f6d149' },
            { name: '商铺写字楼', color: '#f9db9f' },
            { name: '卖房', color: '#ffa650' },
            { name: '海外房产', color: '#57aff8' },
            { name: '小区房价', color: '#00e4dd' },
            { name: '问答', color: '#d29bcb' },
        ],
        gn: [
            { name: '我要贷款', img: 'qiandai.png' },
            { name: '房贷计算', img: 'jishuanqi.png' },
            { name: '知识', img: 'maozi.png' },
            { name: '扫一扫', img: 'saoyisao.png' },
        ],
    }

    componentDidMount() {
        window.AMap.plugin('AMap.CitySearch', () => {
            var citySearch = new window.AMap.CitySearch()
            citySearch.getLocalCity((status, result) => {
                if (status === 'complete' && result.info === 'OK') {
                    const { city } = result
                    this.setState({ city })
                }
            })
        })

    }
    render() {
        return (
            <div>
                <Flex justify="between" style={{ background: '#00BC5B', padding: '6px' }}>
                    <Flex style={{ color: '#fff', width: '70px', justifyContent: 'center', }}>{this.state.city}▼</Flex>
                    <Flex style={{ flex: 1, background: '#fff', borderRadius: '20px', padding: '4px', margin: '0 6px' }}>
                        <img src={require('../../assets/imgs/search.png')} />
                        <span style={{ marginLeft: '6px', color: '#d9d9d9' }}>挑好房，上源码房产App</span>
                    </Flex>
                    <Flex style={{ width: '40px', justifyContent: 'center' }}>
                        <img src={require('../../assets/imgs/map.png')} style={{ width: '24px' }} />
                    </Flex>
                </Flex>
                <WingBlank style={{ margin: '0' }}>
                    <Carousel
                        autoplay={true}
                        infinite
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    // afterChange={index => console.log('slide to', index)}
                    >
                        {this.state.data.map(val => (
                            <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={require(`../../assets/imgs/${val}.jpg`)}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        // this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
                <Flex style={{ background: '#fff' }}>
                    <Flex wrap='wrap' style={{ width: '100%' }} justify="around">
                        {
                            this.state.fang.map((item, key) => {
                                return (
                                    <Flex style={{ flexDirection: 'column', width: '25%', padding: '10px 0' }}>
                                        <Flex justify="center" style={{ background: `${item.color}`, borderRadius: '50%', marginBottom: '4px', width: '50px', height: '50px' }}>
                                            <img src={require(`../../assets/imgs/fang${key}.png`)} />
                                        </Flex>
                                        <span>{item.name}</span>
                                    </Flex>
                                )
                            })
                        }
                    </Flex>
                </Flex>
                <WhiteSpace size="lg" />
                <div style={{ background: '#fff',padding:'18px' }}>
                    <Flex align='baseline'>
                        <span style={{ color: '#0BBF62', fontWeight: '700', fontSize: '20px' }}>房产全百科</span>
                        <span style={{ color: '#A0A0A0', marginLeft: '6px' }}>专业的买房攻略</span>
                    </Flex>
                    <Flex justify='between' style={{marginTop:'10   px'}}>
                        {
                            this.state.gn.map((item, key) => {
                                return (
                                    <Flex direction='column'>
                                        <img src={require(`../../assets/imgs/${item.img}`)} />
                                        <span>{item.name}</span>
                                    </Flex>
                                )

                            })
                        }
                    </Flex>
                </div>
                <WhiteSpace size="lg" />
                <div style={{background:'#fff',padding:'10px'}}>
                    <span style={{fontSize:'16px',margin:'0 0 12px 6px'}}>猜你喜欢</span>
                    <Flex justify='between'>
                        <Flex>
                            <img src={require(`../../assets/imgs/lvdi.jpg`)} style={{width:'100px',height:'100px'}}/>
                        </Flex>
                        <Flex></Flex>
                    </Flex>
                </div>
            </div>
        )
    }
}
