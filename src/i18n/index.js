import wrapper, { localize } from "preact-i18n-weedz";

const locale = localize({
    en: () => [{
        greeting: "Hello world!"
    }]
});
export default (Child) => wrapper(Child, locale);
