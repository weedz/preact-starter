export default {
    greeting: (name:string) => `Hej, ${name}`,
    test: (props: {msg: string}) => <p>Test "komponent", {props.msg}</p>,
    counter: (counter: number) => `Räknare: ${counter}`,
    increase_counter: "Öka räknare",
} as typeof import("./en").default;
