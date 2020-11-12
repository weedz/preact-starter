import { WrapLanguage } from "@weedzcokie/i18n-preact";

const locales = {
    en: () => [import("./en")],
    sv: () => [import("./sv")]
};

export type StringValues = typeof import("./en").default;

export default WrapLanguage<StringValues>(locales);
