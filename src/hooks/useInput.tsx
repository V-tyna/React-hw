import {ChangeEvent, useState} from "react";

type Validation = (value: string) => string | undefined
type UseInputResult = {
    value: string;
    isValid: boolean;
    errorMessage: string | undefined;
    inputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}
type UseInput = (initValue: string, callbacks: Validation[]) => UseInputResult

export const useInput: UseInput = (initValue, callbacks) => {
    const [value, setValue] = useState(initValue);

    const errorCallback = callbacks.find(validator => validator(value) !== undefined);
    let errorMessage: string | undefined = '';
    let isValid: boolean = true; // не нужно явно задавать тип ts сам подставит
    if (errorCallback) {
        errorMessage = errorCallback(value);
        isValid = false;
    }

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return {
        value,
        isValid,
        errorMessage,
        inputHandler
    }
}
