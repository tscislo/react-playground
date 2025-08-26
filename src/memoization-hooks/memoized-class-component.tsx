import {Component} from "react";

export class MemoizedClassComponent extends Component{
    shouldComponentUpdate(): boolean {
        return false;
    }
    render() {
        return <div>
            <h3>MemoizedClassComponent</h3>
            I will re-render each time my parent re-renders
        </div>
    }
}
