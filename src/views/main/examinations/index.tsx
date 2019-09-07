import * as React from 'react';
import RouterView from "../../../router/RouterView"

class Examinations extends React.Component {
    public render() {
        return (
            <RouterView routes={this.props.children}></RouterView>
        )
    }
}

export default Examinations;