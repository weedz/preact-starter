if (process.env.NODE_ENV === "development") {
    // @ts-ignore
    import("preact/debug");
}
import {render} from 'preact';
import App from './App';
import "./i18n";


render(<App />, document.body);
