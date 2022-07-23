import { LanguageProps } from "@weedzcokie/i18n-preact";
import { Component } from "preact";
import { RoutableProps } from "preact-router";
import Language from "../i18n";

type Props = RoutableProps & LanguageProps;

class Main extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Main</h1>
                <p>{this.props.t("greeting")("Test")}</p>
            </div>
        );
    }
}

export default Language(Main);
