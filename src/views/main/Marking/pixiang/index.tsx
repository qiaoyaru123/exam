import * as React from 'react';
import './index.css';


interface Props{
    location:any
}

export default class Pixiang extends React.Component<Props> {

  
    render() {
        return (
            <div className="pixiang">
                <h1>阅卷</h1>
                <div className="bav">
                    <div className="left">
                        <p>暂无数据</p>
                    </div>
                    <div className="right">
                        <h1>
                            <span>得分:</span>
                            <span>0</span>
                        </h1>
                        <div></div>
                        <button>确定</button>
                    </div>
                </div>
                <div className="bottom"></div>
            </div>
        )
    }

    componentDidMount(){
        console.log(this.props.location.query);
    }
}
