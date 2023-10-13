import { LanguageProps, withLanguage } from "@weedzcokie/i18n-preact";
import { Store, StoreComponent, store } from "../Store";

type Props = LanguageProps & {
    id: number
}

class Article extends StoreComponent<Props> {
    componentDidMount() {
        this.listen("counter");
    }
    render() {
        return (
            <div>
                <h1>Article: {this.props.id}</h1>
                <button onClick={() => store.updateStore("counter", Store.counter + 1)}>{this.props.t("increase_counter")}</button>
                <p>{this.props.t("counter")(Store.counter)}</p>
            </div>
        );
    }
}

export default withLanguage(Article);
