import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons'
import 'style/side-menu.scss'

interface IProps {
}

class SideMenu extends Component<IProps> {
  state = {
    collapsed: false,
  }

  triggerCollapse = () => {
    this.setState((preState: any) => {
      return {
        collapsed: !preState.collapsed
      }
    })
  }

  render() {
    const {
      collapsed
    } = this.state
    return (
      <div className={`side-menu${collapsed ? ' collapsed' : ''}`}>
        <div className="collapse-btn" onClick={this.triggerCollapse}>
          {
            collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>
          }
        </div>
        <Link to="/">
          <div className="side-menu-item">主页</div>
        </Link>
        <Link to="/about">
          <div className="side-menu-item">关于</div>
        </Link>
        <Link to="/">
          <div className="side-menu-item">主页</div>
        </Link>
        <Link to="/">
          <div className="side-menu-item">主页</div>
        </Link>
        <Link to="/">
          <div className="side-menu-item">主页</div>
        </Link>
        <Link to="/">
          <div className="side-menu-item">主页</div>
        </Link>
      </div>
    )
  }
}

export default SideMenu
