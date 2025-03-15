import { useLanguage } from "@weedzcokie/i18n-preact";
import type { RoutableProps } from "preact-iso";
import { Store, store, useStore } from "../Store";

type Props = RoutableProps & {
  msg: string
};

export default function About(props: Props) {
  const t = useLanguage();
  useStore(["counter"]);

  return (
    <div>
      <h1>About</h1>
      <p>{props.msg}</p>
      <p>{t["greeting"]("hello?")}</p>

      <button onClick={() => store.updateStore("counter", Store.counter + 1)}>{t["increase_counter"]}</button>
      <p>{t["counter"](Store.counter)}</p>
    </div>
  );
}
