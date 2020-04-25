import {h, render} from 'preact';
import App from './App';

if (process.env.NODE_ENV === "development") {
    require("preact/debug");
}

render(<App />, document.body);
