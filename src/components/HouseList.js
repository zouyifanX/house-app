import React, { Component } from 'react'
import { Flex } from 'antd-mobile'

export default class HouseList extends Component {
    // static defaultProps
    render() {
        const { item } = this.props
        return (
            <Flex justify='between' align='start' style={{margin:'8px 0'}}>
                <Flex  align='start'>
                    <img src={item.pic} style={{ width: '100px', height: '100px' }} />
                    <Flex direction='column' align='start' style={{height:'100%',marginLeft:'6px'}}>
                        <h3 style={{ margin: '0' }}>{item.name}</h3>
                        <p style={{ margin: '0',marginTop:'4px' }}>{item.address}</p>
                    </Flex>
                </Flex>
                <Flex style={{height:'100%'}}>
                    <p style={{color:'red',margin:'0'}}>{item.price}</p>
                </Flex>
            </Flex>
        )
    }
}
