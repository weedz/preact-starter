import { h } from "preact";
import { Router } from "preact-router";
import { Link } from "preact-router/match";
import style from "./style.css";
import Language, { StringValues } from "./i18n";
import Main from "./Views/Main";
import About from "./Views/About";

type Props = {
    string: StringValues
}

const App = (props: Props) => {
    return (
        <div>
            <h1>Preact starter</h1>
            <p className={style.paragraph}>{props.string["greeting"]}</p>
            <ul>
                <Link activeClassName="active" href="/">Main</Link>
                <Link activeClassName="active" href="/about">About</Link>
            </ul>
            <Router>
                <Main path="/" default />
                <About path="/about" />
            </Router>
        </div>
    );
}

export default Language(App);
