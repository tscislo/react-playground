import {MyObservable, MySubscriber} from "./my-observable";

export const MyObserverSubscriberComponent = () => {
    const observable1 = new MyObservable();

    const sub1 = new MySubscriber("1");
    const sub2 = new MySubscriber("2");

    observable1.subscribe(sub1);
    observable1.subscribe(sub2);

    observable1.emit("test")
    return <>MyObserverSubscriberComponent</>
}
