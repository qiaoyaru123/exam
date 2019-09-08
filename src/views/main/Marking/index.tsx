
import * as React from 'react';
import RouterView from "../../../router/RouterView";


class ClassManagement extends React.Component {
    public render() {
        return (
            <RouterView routes={this.props.children}></RouterView>
        )
    }
}

export default ClassManagement;