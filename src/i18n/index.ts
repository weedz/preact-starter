import { Wrapper } from "@weedzcokie/i18n-preact";

const locales = {
    en: () => [import("./en")],
    sv: () => [import("./sv")]
};

export type StringValues = typeof import("./en").default;

export default Wrapper<StringValues>(locales);
