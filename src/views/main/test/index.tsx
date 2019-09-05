import * as React from 'react';
import RouterView from "../../../router/RouterView"

class Test extends React.Component {
    public render() {
        return (
            <RouterView routes={this.props.children}></RouterView>
        )
    }
}

export default Test;