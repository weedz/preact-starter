import {h, render} from 'preact';
import "./style.css";

if (process.env.NODE_ENV === "development") {
    require("preact/debug");
}

const App = () => {
    return (
        <div>
            <p>Preact starter</p>
        </div>
    );
}

render(<App />, document.body);
