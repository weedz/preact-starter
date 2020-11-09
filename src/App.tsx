import { h } from "preact";
import { Router } from "preact-router";
import { Link } from "preact-router/match";
import { changeLanguage, LanguageProps } from "@weedzcokie/i18n-preact";
import style from "./style.css";
import Language, { StringValues } from "./i18n";
import Main from "./Views/Main";
import About from "./Views/About";

type Props = LanguageProps<StringValues>;

function setLanguage(e: h.JSX.TargetedEvent<HTMLSelectElement, Event>) {
    const lang = e.currentTarget.value;
    changeLanguage(lang);
}

const App = (props: Props) => {
    return (
        <div>
            <h1>Preact starter</h1>
            <select onChange={setLanguage}>
                <option value="en">en</option>
                <option value="sv">sv</option>
            </select>
            <p className={style.paragraph}>{props.str("greeting")("Test")}</p>
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
