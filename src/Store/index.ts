import { createStore, PartialStoreListener } from "@weedzcokie/store";
import { Component } from "preact";
import { useEffect, useState } from "preact/compat";
type StoreType = {
    counter: number
};

export const store = createStore<StoreType>({
    counter: 0
});
type StoreKeys = keyof StoreType;

export const Store = store.Store;

export abstract class StoreComponent<P = unknown, S = unknown> extends Component<P, S> {
    listeners: Array<() => void> = [];

    listen<T extends StoreKeys>(key: T, cb: PartialStoreListener<StoreType, T> = () => this.forceUpdate()) {
        this.listeners.push(store.subscribe(key, cb));
    }

    componentWillUnmount() {
        for (const unsubscribe of this.listeners) {
            unsubscribe();
        }
    }
}

export function useStore<T extends StoreKeys>(keys: T[]) {
    const [s, set] = useState(false);

    useEffect(() => {
        const update = () => set(!s);
        const listeners = keys.map(key => store.subscribe(key, update));

        return () => {
            for (const unsubscribe of listeners) {
                unsubscribe()
            }
        }
    });
}
