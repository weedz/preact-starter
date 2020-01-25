import {h, render} from 'preact';
import App from './App';

if (process.env.NODE_ENV === "development") {
    import("preact/debug");
}

render(<App />, document.body);
