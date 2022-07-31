import { createStore, PartialStoreListener } from "@weedzcokie/store";
import { Component } from "preact";
type StoreType = {
    counter: number
};

const store = createStore<StoreType>({
    counter: 0
});
type StoreKeys = keyof StoreType;

// Optionally, export `Store` and `updateStore`:
export const Store = store.Store;
export const updateStore = store.updateStore;

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
