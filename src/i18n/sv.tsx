export default {
    greeting: (name:string) => `Hej, ${name}`,
    test: (props: {msg: string}) => <p>Test "komponent", {props.msg}</p>
} as typeof import("./en").default;
