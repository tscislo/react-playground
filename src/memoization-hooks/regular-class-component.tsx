import {Component} from "react";

export class RegularClassComponent extends Component{

    render() {
        return <div>
            <h3>RegularClassComponent</h3>
            I will re-render each time my parent re-renders
        </div>
    }

}
