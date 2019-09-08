import * as React from 'react';
import RouterView from "../../../router/RouterView"
class Examinations extends React.Component {
    public render() {
        return (
            <div>
                 <RouterView routes={this.props.children}/>
            </div>
        )
    }
}

export default Examinations;