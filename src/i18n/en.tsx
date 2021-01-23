export default {
    greeting: (name: string) => `Hello, ${name}!`,
    test: (props: any) => <p>Test component, {props.msg}</p>
}
