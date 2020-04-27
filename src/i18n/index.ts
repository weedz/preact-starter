import { connectLanguage } from "preact-i18n-weedz";
import { ComponentConstructor, AnyComponent } from "preact";

const locales = {
    en: () => [import("./en")]
};

export type StringValues = typeof import("./en").default;

const wrapper = connectLanguage(locales);

export default <T = {}>(Child: ComponentConstructor<T> | AnyComponent<T>) => wrapper(Child);
