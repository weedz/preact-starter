import { storeLocale } from "@weedzcokie/i18n-preact";

export const locales = {
    en: () => [import("./en")],
    sv: () => [import("./sv")]
};

storeLocale(locales);
