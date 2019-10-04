import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { validate } from "../actions";

function getButtonText(isValid) {
    return isValid? "Valid":"Not Valid"
}

export function DigitSelection() {
    const dispatch = useDispatch();
    return <button type="button" onClick={() => validate(dispatch)}>
        {getButtonText(useSelector(state => state.isValid))}
        </button>;
}
