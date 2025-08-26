import * as React from "react";
import {FC} from "react";
import {NameAlert} from "./name-alert";
import {NameAlertFunc} from "./name-alert-func";

export const NameAlertClassToFunctionalComponent: FC  = () => {
    return <>
        <NameAlert prefix={"Hello"} />
        <NameAlertFunc prefix={"Hello Func"} />
    </>
}


