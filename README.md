<!--
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-09-02 20:07:15
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-04 14:04:01
 -->

## 登陆

## mobx typescript

## 需要用到的包

     mobx mobx-react

## react 路由需要用到的包

    react-router-dom @types/react-router-dom

## 默认进入主页 login

    login页面
    ![Image text](https://github.com/movebug/projectlogin/blob/dev/exam-cms/public/img/ONE%20PUNCH-MAN.jpg)

## for-editor
#### 具体情况请查看官网
```
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Editor from 'for-editor'

class App extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  handleChange(value) {
    this.setState({
      value
    })
  }

  render() {
    const { value } = this.state
    return (
      <!-- <Editor value={value} onChange={this.handleChange.bind(this)} /> -->
      <!-- ts -->
      <Editor value={value} onChange={()=>{this.handleChange(value)} /> 
    )
  }
}

ReactDOM.render(
  <Editor />,
  document.getElementById('container')
)
 
```

## 账号：chenmenjie

## 密码：Chenmanjie123!
