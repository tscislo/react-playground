import {ChangeEvent, Component} from "react";

export interface InputAlertState {
    inputValue: string;
}

class InputAlert extends Component<{}, InputAlertState> {
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
