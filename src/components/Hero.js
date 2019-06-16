import React, { Component } from 'react'
import { Row, Col } from 'antd';
import Form from './Form';

let HeroBackground = './assets/imgs/slumber-hero.png';
let sectionStyle = {
    width: '100%',
    height: '-webkit-fill-available',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: `url(${HeroBackground})`
  };

class Hero extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={24} style={ sectionStyle }>
                    <Form />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Hero;