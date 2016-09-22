interface ForEachable<T> {
  forEach(callbackfn: (value: T) => void): void;
}

interface MapConstructor {
  new <K, V>(): Map<K, V>;
  new <K, V>(iterable: ForEachable<[K, V]>): Map<K, V>;
  prototype: Map<any, any>;
}

interface SetConstructor {
  new <T>(): Set<T>;
  new <T>(iterable: ForEachable<T>): Set<T>;
  prototype: Set<any>;
}
