import { Route, Router } from "preact-router";
import { Link } from "preact-router/match";
import { changeLanguage, LanguageProps, withLanguage } from "@weedzcokie/i18n-preact";
import style from "./style.module.css";
import Main from "./Views/Main";
import About from "./Views/About";
import Article from "./Views/Article";

type Props = LanguageProps;

function setLanguage(e: JSX.TargetedEvent<HTMLSelectElement, Event>) {
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
            <p className={style.paragraph}>{props.t("greeting")("Test")}</p>
            <div className={style.paragraph}>{props.t("test")({msg: "message"})}</div>
            <nav className={style.navigation}>
                <Link activeClassName="active" href="/">Main</Link>
                <Link activeClassName="active" href="/about">About</Link>
                <Link activeClassName="active" href="/article/42">42</Link>
            </nav>
            <Router>
                <Main path="/" default />
                <About path="/about" msg="Test props" />
                <Route path="/article/:id" component={Article} />
            </Router>
        </div>
    );
}

export default withLanguage(App);
