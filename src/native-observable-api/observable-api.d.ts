// global.d.ts or types/observable.d.ts

declare class Observable<T> {
    constructor(subscriber: (observer: {
        next(value: T): void;
        error(err: any): void;
        complete(): void;
    }) => void);

    // Subscription
    subscribe(observer: {
        next?(value: T): void;
        error?(err: any): void;
        complete?(): void;
    }, {signal}?: {signal: AbortSignal});

    // forEach (Promise-based consumption)
    forEach(callback: (value: T) => void): Promise<void>;

    // Transformation
    map<U>(project: (value: T) => U): Observable<U>;
    filter(predicate: (value: T) => boolean): Observable<T>;
    reduce<U>(accumulator: (acc: U, value: T) => U, seed: U): Observable<U>;
    flatMap<U>(project: (value: T) => Observable<U>): Observable<U>;
    switchMap<U>(project: (value: T) => Observable<U>): Observable<U>;

    // Control
    take(count: number): Observable<T>;
    skip(count: number): Observable<T>;

    // Combination
    concat(...observables: Observable<T>[]): Observable<T>;
    merge(...observables: Observable<T>[]): Observable<T>;

    // Utility
    catch<R>(handler: (error: any) => Observable<R>): Observable<T | R>;
    finally(callback: () => void): Observable<T>;
    toPromise(): Promise<T>;

    // [Symbol.observable] for interop
    [Symbol.observable](): Observable<T>;
}

// Extend HTMLElement with 'when'
interface HTMLElement {
    when<K extends keyof HTMLElementEventMap>(type: K): Observable<HTMLElementEventMap[K]>;
}
