import {useReducer, useState} from "react";

const enum MathOperationType {
    INC = 'INC',
    DEC = 'DEC',
    MUL = 'MUL',
    DIV = 'DIV'
}


enum MathActionType {
    CHANGE_MODIFIER_VALUE = 'CHANGE_MODIFIER_VALUE',
    CHANGE_OPERATION = 'CHANGE_OPERATION',
    CALCULATE = 'CALCULATE'
}

interface ChangeModifierValueAction {
    type: MathActionType.CHANGE_MODIFIER_VALUE
    value: number;
}

interface ChangeOperationAction {
    type: MathActionType.CHANGE_OPERATION
    value: MathOperationType
}

interface CalculateAction {
    type: MathActionType.CALCULATE
}


export type MathAction = ChangeOperationAction | ChangeModifierValueAction | CalculateAction;

interface CountState {
    count: number;
    modifierValue: number;
    currentMathOperation?: MathOperationType;
}

const countReducer = (state: CountState, action: MathAction): CountState => {
    switch (action.type) {
        case MathActionType.CHANGE_OPERATION:
            return {
                ...state,
                currentMathOperation: action.value
            }
        case MathActionType.CHANGE_MODIFIER_VALUE:
            return {
                ...state,
                modifierValue: action.value
            }
        case MathActionType.CALCULATE:
            switch (state.currentMathOperation) {
                case MathOperationType.INC:
                    return {
                        ...state,
                        count: state.count + state.modifierValue
                    }
                case MathOperationType.DEC:
                    return {
                        ...state,
                        count: state.count - state.modifierValue
                    }
                case MathOperationType.MUL:
                    return {
                        ...state,
                        count: state.count * state.modifierValue
                    }
                case MathOperationType.DIV:
                    return {
                        ...state,
                        count: state.count / state.modifierValue
                    }
                default:
                    return state;
            }
        default:
            return state;
    }

}

export const BasicHookComponent = () => {
    const [count, setCount] = useState<number>(0);
    const [state, dispatchMathAction] = useReducer(countReducer, {count: 100, modifierValue: 0});
    return (
        <div style={{'border': '2px green solid'}}>
            <div>Basic useState counter: {count}</div>
            <div>
                <button onClick={() => setCount((c) => c + 1)}>Inc +1</button>
                <button onClick={() => setCount((c) => c - 1)}>Dec -1</button>
            </div>
            <div>
                <div>{state.count}</div>
                <div>Current selected operation: {state.currentMathOperation}</div>
                <div>Current modifier value: {state.modifierValue}</div>
                <select onChange={(event) =>
                    dispatchMathAction({
                        type: MathActionType.CHANGE_OPERATION,
                        value: event.target.value as MathOperationType
                    })
                }>
                    <option value={MathOperationType.INC}>Inc
                    </option>
                    <option value={MathOperationType.DEC}>Dec
                    </option>
                    <option value={MathOperationType.MUL}>Multiply</option>
                    <option value={MathOperationType.DIV}>Divide</option>
                </select>
                <input type="text" onChange={(event) =>
                    dispatchMathAction({
                        type: MathActionType.CHANGE_MODIFIER_VALUE,
                        value: parseInt(event.target.value)
                    })
                }/>
                <button onClick={() => dispatchMathAction({type: MathActionType.CALCULATE})}>OK</button>
            </div>
        </div>
    )
}
