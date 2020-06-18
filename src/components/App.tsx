import * as React from 'react';

export interface HelloProps { greet: string; company: string }

export const App = (props: HelloProps) =>
    <h1>{props.greet} To {props.company}</h1>;