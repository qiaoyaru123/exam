import * as React from 'react';
import './index.css';
import { DatePicker } from 'antd';
// import { any } from 'prop-types';

const { RangePicker } = DatePicker;

interface Props {
    startValue: any,
    value: any,
    state: any 
}

export default class Addexam extends React.Component<Props> {

    state = {
        startValue: null,
        endValue: null,
        endOpen: false,

    };

    public render() {
        const { startValue, endValue, endOpen } = this.state;
        return (
            <div className="wrap">
                <h3>添加考试</h3>
                <div className="nav">
                    <div className="dem">
                        <div>
                            <h4>*试卷名称：</h4>
                            <input />
                        </div>
                        <div>
                            <h4>*选择考试类型：</h4>
                            <select>
                                <option value="">周考一</option>
                                <option value="">周考二</option>
                                <option value="">周考三</option>
                                <option value="">月考</option>
                            </select>
                        </div>
                        <div>
                            <h4>*选择课程：</h4>
                            <select>
                                <option value="">javaScript上</option>
                                <option value="">javaScript上</option>
                                <option value="">模块法开发</option>
                                <option value="">移动端开发</option>
                            </select>
                        </div>
                        <div>
                            <h4>设置题量：</h4>
                            <input />
                        </div>
                        <div className="time">
                            <h4>考试时间：</h4>
                            <div>
                               
                                <RangePicker
                                    dateRender={current => {
                                        const style = {};
                                        if (current.date() === 1) {
                                            console.log(1)
                                        }
                                        return (
                                            <div className="ant-calendar-date" style={style}>
                                                {current.date()}
                                            </div>
                                        );
                                    }}
                                />
                            </div>
                        </div>
                        <div>
                            <button>创建试卷</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
