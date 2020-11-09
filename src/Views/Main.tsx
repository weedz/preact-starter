import {h} from "preact";
import { RoutableProps } from "preact-router";
import Language, { StringValues } from "../i18n";
import { LanguageProps } from "@weedzcokie/i18n-preact";

type Props = RoutableProps & LanguageProps<StringValues>;

function Main(props: Props) {
    return (
        <div>
            <h1>Main</h1>
            <p>{props.str("greeting")("Test")}</p>
        </div>
    );
}

export default Language<RoutableProps>(Main);
