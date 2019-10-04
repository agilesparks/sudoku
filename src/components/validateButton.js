import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { validate } from "../actions";

function getButtonText(isValid) {
    return isValid? "Valid":"Not Valid"
}

export function ValidateButton() {
    const dispatch = useDispatch();
    const grid = useSelector(state => state.grid)
    return <button type="button" onClick={() => validate(dispatch,grid)}>
        {getButtonText(useSelector(state => state.isValid))}
        </button>;
}
