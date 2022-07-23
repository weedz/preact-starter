import type { LanguageProps } from "@weedzcokie/i18n-preact";
import { RoutableProps } from "preact-router";
import withLanguage from "../i18n";

type Props = RoutableProps & LanguageProps & {
    msg: string
};

function About(props: Props) {
    return (
        <div>
            <h1>About</h1>
            <p>{props.msg}</p>
        </div>
    );
}

export default withLanguage(About);
