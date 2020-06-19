import * as React from 'react';

export interface HelloProps { greet: string; company: string; }

export default class App extends React.Component<HelloProps, {}>{
    constructor(props: HelloProps) {
        super(props);
    }
    public render(): JSX.Element {
        return (
            <h1>{this.props.greet} To {this.props.company}</h1>
        );
    }
}
