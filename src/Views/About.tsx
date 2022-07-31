import { useLanguage } from "@weedzcokie/i18n-preact";
import { useState } from "preact/hooks";
import { RoutableProps } from "preact-router";

type Props = RoutableProps & {
    msg: string
};

export default function About(props: Props) {
    const t = useLanguage();
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>About</h1>
            <p>{props.msg}</p>
            <p>{t["greeting"]("hello?")}</p>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment count</button>
        </div>
    );
}
