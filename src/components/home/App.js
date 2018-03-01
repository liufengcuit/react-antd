import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import { combineReducers  } from 'redux'

import './App.css'
console.log(combineReducers)
let FormItem = Form.Item;

class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) =>{
      if(!err) {
        console.log('Received values of form: ',values);
      }
    })
  }
  render() {
    let { getFieldDecorator } = this.props.form
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Backend Manage System</h1>
        </header>
        <div className="form-wrapper">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入用户名!' }]
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                valuePropName: 'checked',
                initialValue:true,
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="password"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(
                <Checkbox>Remember me</Checkbox>
              )}
              <a className="login-form-forgot" href="">忘记密码</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
                Or <a href="">register now!</a>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

let WrappedNormalLoginForm = Form.create()(LoginForm)

export default WrappedNormalLoginForm;
