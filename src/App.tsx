import { h } from "preact";
import { Route, Router } from "preact-router";
import { Link } from "preact-router/match";
import { changeLanguage, LanguageProps } from "@weedzcokie/i18n-preact";
import style from "./style.css";
import Language, { StringValues } from "./i18n";
import Main from "./Views/Main";
import About from "./Views/About";
import Article from "./Views/Article";

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
            <p className={style.paragraph}>{props.str("test")({msg: "message"})}</p>
            <ul>
                <Link activeClassName="active" href="/">Main</Link>
                <Link activeClassName="active" href="/about">About</Link>
                <Link activeClassName="active" href="/article/42">42</Link>
            </ul>
            <Router>
                <Main path="/" default />
                <About path="/about" />
                <Route path="/article/:id" component={Article} />
            </Router>
        </div>
    );
}

export default Language<{}>(App);
