import IHelloProps from 'interfaces/IAppProps';
import * as React from 'react';

export default class App extends React.Component<IHelloProps>{
    public render(): JSX.Element {
        return (
            <h1>{this.props.greet} To {this.props.company}</h1>
        );
    }
}
