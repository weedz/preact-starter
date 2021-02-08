import {h} from "preact";
export default {
    greeting: (name: string) => `Hello, ${name}!`,
    test: (props: {msg: string}) => <p>Test component, {props.msg}</p>
}
