import {h} from "preact";
import { RoutableProps } from "preact-router";
import Language, { StringValues } from "../i18n";
import { StringProps } from "@weedzcokie/i18n-preact";

type Props = RoutableProps & StringProps<StringValues>;

function Main(props: Props) {
    return (
        <div>
            <h1>Main, {props.string?.["greeting"]}</h1>
        </div>
    );
}

export default Language(Main);
