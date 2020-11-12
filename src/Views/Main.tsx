import { LanguageProps } from "@weedzcokie/i18n-preact";
import {Component, h} from "preact";
import { RoutableProps } from "preact-router";
import Language, { StringValues } from "../i18n";

type Props = RoutableProps & LanguageProps<StringValues>;

class Main extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Main</h1>
                <p>{this.props.str("greeting")("Test")}</p>
            </div>
        );
    }
}

export default Language<RoutableProps>(Main);
