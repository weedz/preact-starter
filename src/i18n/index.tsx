import { WrapLanguage } from "@weedzcokie/i18n-preact";

export const locales = {
    en: () => [import("./en")],
    sv: () => [import("./sv")]
};

export default WrapLanguage(locales);
