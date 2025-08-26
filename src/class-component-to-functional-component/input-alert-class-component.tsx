import {ChangeEvent, Component} from "react";

export interface InputAlertState {
    inputValue: string;
}

class InputAlert extends Component<{name : string}, InputAlertState> {
    public state: InputAlertState = {
        inputValue: "",
    };

    handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        this.setState({ inputValue: event.target.value });
    };

    handleClick = (): void => {
        alert(this.state.inputValue);
    };

    render() {
        return (
                <div>
                    <h2>{this.props.name}</h2>
                    <input
                            type="text"
                            value={this.state.inputValue}
                            onChange={this.handleChange}
                            placeholder="Type something..."
                    />
                    <button
                            onClick={this.handleClick}
                    >
                        Show Alert
                    </button>
                </div>
        );
    }
}

export default InputAlert;
