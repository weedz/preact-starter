export default {
    greeting: (name: string) => `Hello, ${name}!`,
    test: (props: {msg: string}) => <p>Test component, {props.msg}</p>,
    counter: (counter: number) => `Counter: ${counter}`,
    increase_counter: "Increase counter",
}
