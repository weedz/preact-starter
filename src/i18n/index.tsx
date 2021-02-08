import { Locales, WrapLanguage } from "@weedzcokie/i18n-preact";

const locales: Locales = {
    en: () => [import("./en")],
    sv: () => [import("./sv")]
};

export type StringValues = typeof import("./en").default;

export default WrapLanguage<StringValues>(locales);
