import {h} from "preact";
import { RouteProps } from "preact-router";

type Props = {
    id: number
}

export default function Article(props: Props) {
    return (
        <div>
            <h1>Article: {props.id}</h1>
        </div>
    );
}
