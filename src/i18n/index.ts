import { connectLanguage, localize } from "preact-i18n-weedz";

const locale = localize({
    en: () => [{
        greeting: "Hello world!"
    }]
});
// export default (Child: VNode<typeof locale>|h.JSX.Element) => connectLanguage(Child, locale);
// export default (Child: h.JSX.Element) => connectLanguage(Child, locale);


export default function(Child: any) {
    return connectLanguage(Child, locale)
}
