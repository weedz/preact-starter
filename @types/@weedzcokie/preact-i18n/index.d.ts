import { locales } from "src/i18n";
import ns1 from "src/i18n/en";
declare module "@weedzcokie/i18n-preact" {
  // and extend them!
  type AllLocales = typeof locales;
  type StringValues = typeof ns1;

  type AllStrings = {
    [K in keyof StringValues]: StringValues[K];
  };
  interface StringValue extends AllStrings { }
  interface Locales extends AllLocales { }
}
