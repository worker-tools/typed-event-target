export interface TypedEventListener<E extends Event> {
  (evt: E): void;
}

export interface TypedEventListenerObject<E extends Event> {
  handleEvent(object: E): void;
}

export type TypedEventListenerOrEventListenerObject<E extends Event> = TypedEventListener<E> | TypedEventListenerObject<E>;

type StringKeyOf<T> = keyof T extends string ? keyof T : never;

export interface TypedEventTarget<
  EventMap extends Record<K, Event> = Record<string, Event>, 
  K extends string = StringKeyOf<EventMap>
> extends EventTarget {
  addEventListener<K extends keyof EventMap>(type: K, listener: TypedEventListenerOrEventListenerObject<EventMap[K]>|null, options?: boolean|AddEventListenerOptions): void;
  addEventListener(type: string, listener: EventListenerOrEventListenerObject|null, options?: boolean|AddEventListenerOptions): void;

  removeEventListener<K extends keyof EventMap>(type: K, listener: TypedEventListenerOrEventListenerObject<EventMap[K]>|null, options?: boolean|EventListenerOptions): void;
  removeEventListener(type: string, listener: EventListenerOrEventListenerObject|null, options?: boolean|EventListenerOptions): void;
};

export const TypedEventTarget: {
  prototype: EventTarget;
  new<
    EventMap extends Record<K, Event> = Record<string, Event>, 
    K extends string = StringKeyOf<EventMap>
  >(): TypedEventTarget<EventMap, K>;
} = EventTarget;
