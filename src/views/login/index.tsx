
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import * as React from 'react';
import { inject, observer } from 'mobx-react';
import {WrappedFormUtils} from 'antd/lib/form/Form'
import './index.css';
const success = () => {
    message.success('login succeed!');
};

const warning = () => {
    message.warning('login be defeated');
};

interface Propsinfo {
    from:WrappedFormUtils,
    form: any,
    user: any,
    props:any
}

interface Propsinfo extends FormComponentProps {
    history: any
}

@inject('user')
@observer

class Login extends React.Component<Propsinfo>{
    props: any;
    constructor(props: any) {
        super(props);
    }

    public componentDidMount() {
        this.props.form.validateFields();
    }

    public handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        this.props.form.validateFields(async (err: Error, values: any) => {
            if (!err) {
                const params = {
                    user_name: values.user_name,
                    user_pwd: values.user_pwd,
                    remember: values.remember,
                    autologin:values.autologin
                }
                const result = await this.props.user.login(params);
                if (result.code === 1) {
                    success()
                    this.props.history.push('/main');
                } else {
                    warning()
                    values.username = '';
                    values.password = '';
                }
            }
        });
    };

    public render() {
        const { getFieldDecorator } = this.props.form;
        const { user_name, user_pwd } = this.props.user.account;
        return (
            <div className='allju'>
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item className='formitem'>
                    {getFieldDecorator('user_name', {
                        initialValue: user_name,
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item className='formitem'>
                    {getFieldDecorator('user_pwd', {
                        initialValue: user_pwd,
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item className='formitem'>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}
                    {getFieldDecorator('autologin', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>auto login in 7 days</Checkbox>)}
                    <a className="login-form-forgot" href="">
                        Forgot password
              </a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
              </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>
            </div>
        );
    }
}

export default Form.create()(Login);


// import * as React from 'react';
// import { inject, observer } from 'mobx-react';
// import {WrappedFormUtils} from 'antd/lib/form/Form'
// import {login} from "../../api/user"
// interface UserFormProps extends FormComponentProps {
//   user: any,
//   age: number;
//   history: any,
//   name: string;
// }
// // interface Props{
// //   from:WrappedFormUtils,
// //   user:any,
// //   abc?:string
// // }
// @inject('user')
// @observer
// class Login extends React.Component<UserFormProps, any> {
//   constructor(props: any) {
//     super(props);
//   }
//   public handleSubmit = (e: any) => {
//     e.preventDefault();
//     this.props.form.validateFields(async (err: any, values: any) => {
//       if (!err) {
//         console.log('Received values of form: ', values);
//         const result = await this.props.user.login(values);
//         if (result.code) {
//           // 跳转路由
//           this.props.history.replace('/home');
//         } else {
//           // 提示错误
//           message.error(result.msg || '用户名或密码错误');
//         }
//       }
//     });
//   };

//   public render() {
//     const { getFieldDecorator } = this.props.form;
//     return (
//       <div className="loginPage">
//         <Form onSubmit={this.handleSubmit} className="login-form" style={{ padding: "10px" }}>
//           <Form.Item>
//             {getFieldDecorator('user_name', {
//               rules: [{
//                 validator: (ruler, value, callback) => {
//                   console.log('value...', value);
//                   if (/[a-z]{5,20}/.test(value)) {
//                     callback();
//                   } else {
//                     callback('Please input valid username!')
//                   }
//                 }
//               }],
//             })(
//               <Input
//                 prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                 placeholder="Username"
//               />,
//             )}
//           </Form.Item>
//           <Form.Item>
//             {getFieldDecorator('user_pwd', {
//               rules: [{
//                 validator: (ruler, value, callback) => {
//                   console.log('value...', value);
//                   if (/^(?![a-z]+$)(?![A-Z]+$)(?!([^(a-zA-Z\!\*\.\#)])+$)^.{8,16}$/.test(value)) {
//                     callback();
//                   } else {
//                     callback('Please input valid password!')
//                   }
//                 }
//               }],

//             })(
//               <Input
//                 prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                 type="password"
//                 placeholder="Password"
//               />,
//             )}
//           </Form.Item>
//           <Form.Item>
//             {getFieldDecorator('remember', {
//               valuePropName: 'checked',
//               initialValue: true,
//             })(<Checkbox>Remember me</Checkbox>)}
//             <Button type="primary" htmlType="submit" className="login-form-button">
//               Log in
//           </Button>
//           </Form.Item>
//         </Form>
//       </div>
//     )
//   }
// }

// // export default Login;

// export default Form.create()(Login);
