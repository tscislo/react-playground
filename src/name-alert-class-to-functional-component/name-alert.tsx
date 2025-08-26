import React from "react";

export interface Props {
    readonly prefix: string;
}

export interface State {
    readonly name: string;
}

export class NameAlert extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            name: "",
        };
    }

    alertName = () => {
        alert(`${this.props.prefix}, ${this.state.name}`);
    };

    handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({name: e.target.value});
    };

    render() {
        return (
                <div>
                    <h3>Enter Name And Alert</h3>
                    <input
                            type="text"
                            onChange={this.handleNameInput}
                            value={this.state.name}
                            placeholder="Enter Your Name"
                    />
                    <button onClick={this.alertName}>Alert Me!</button>
                </div>
        );
    }
}
