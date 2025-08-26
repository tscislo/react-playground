import {FC} from "react";
import InputAlertClassComponent from "./input-alert-class-component";
import {InputAlertFunctionalComponent} from "./input-alert-functional-component";

export const ClassComponentToFunctionalComponent: FC = () => {
    return <>
        <InputAlertClassComponent name={"Class component"}/>
        <InputAlertFunctionalComponent name={"Functional component"}/>
    </>
}
