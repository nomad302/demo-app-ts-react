import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from 'components/App';

ReactDOM.render(<App greet="Welcome" company="WeCreate" />, document.querySelector("#demo-app"));
