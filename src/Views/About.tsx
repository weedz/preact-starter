import { useLanguage } from "@weedzcokie/i18n-preact";
import { RoutableProps } from "preact-router";

type Props = RoutableProps & {
    msg: string
};

export default function About(props: Props) {
    const t = useLanguage();
    return (
        <div>
            <h1>About</h1>
            <p>{props.msg}</p>
            <p>{t["greeting"]("hello?")}</p>
        </div>
    );
}
