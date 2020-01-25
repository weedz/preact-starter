import {h} from "preact";
import style from "./style.css";
import Language from "./i18n";

const App = (props) => {
    return (
        <div>
            <h1>Preact starter</h1>
            <p className={style.paragraph}>{props.string("greeting")}</p>
        </div>
    );
}

export default Language(App);
