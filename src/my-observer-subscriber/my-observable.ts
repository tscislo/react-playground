export class MySubscriber {
    constructor(private name: string) {
    }

    update(message: string) {
        console.log(this.name, message);
    }
}

export class MyObservable {
    private subscribers = new Set<MySubscriber>()

    public subscribe(observer: MySubscriber) {
        this.subscribers.add(observer);
    }

    public unsubscribe(observer: MySubscriber): void {
        this.subscribers.delete(observer)
    }

    public emit(message: string) {
        for (const subscriber of this.subscribers.values()) {
            subscriber.update(message);
        }
    }
}

