import * as React from 'react';
import IHelloProps from 'interfaces/IAppProps'

export default class App extends React.Component<IHelloProps, {}>{
    constructor(props: IHelloProps) {
        super(props);
    }
    public render(): JSX.Element {
        return (
            <h1>{this.props.greet} To {this.props.company}</h1>
        );
    }
}
