
import * as React from 'react';
import RouterView from "../../../router/RouterView"
class ClassManagement extends React.Component {
    public render() {
        return (
            <div>
                 <RouterView routes={this.props.children}></RouterView>
            </div>
        )
    }
}

export default ClassManagement;