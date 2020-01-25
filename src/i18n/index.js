import wrapper, { localize } from "preact-i18n-weedz";

const locales = localize({
    en: () => [{
        greeting: "Hello world!"
    }]
});
export default (Child) => wrapper(Child, locales);
