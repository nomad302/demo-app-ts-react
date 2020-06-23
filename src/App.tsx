import * as React from 'react';

import IHelloProps from 'interfaces/IAppProps';
import Post from 'post/post';

export default class App extends React.Component<IHelloProps>{
    public render(): JSX.Element {
        return (
            <div>
                <h1>{this.props.greet} To {this.props.company}</h1>
                <Post />
            </div>
        );
    }
}
