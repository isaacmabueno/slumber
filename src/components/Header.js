import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const { SubMenu }  = Menu;

class Nav extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="mail">
          Host A Band
        </Menu.Item>
        <Menu.Item key="app">
          Sign Up
        </Menu.Item>
        <Menu.Item key ="login">
          Login In
        </Menu.Item>
        <Menu.Item key="alipay">
            Help
        </Menu.Item>
      </Menu>
    );
  }
}

export default Nav;