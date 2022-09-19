import {ChangeEvent, useState} from "react";

export const useInput = (initValue: string, callbacks: ((value: string) => string | undefined)[]) => {
    const [value, setValue] = useState(initValue);

    const errorCallback = callbacks.find(validator => validator(value) !== undefined);
    let errorMessage: string | undefined = '';
    let isValid: boolean = true;
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
