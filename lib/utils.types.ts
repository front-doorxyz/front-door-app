export type OptionalKeys<T, U> = {
    [K in keyof T]?: U;
  };