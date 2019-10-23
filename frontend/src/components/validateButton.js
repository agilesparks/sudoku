import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getPossibleSolutions } from "../actions";

function getButtonText(isValid) {
    return isValid? "Valid":"Not Valid"
}

export function ValidateButton() {
    const dispatch = useDispatch();
    const grid = useSelector(state => state.grid)
    return <button type="button" onClick={() => getPossibleSolutions(dispatch, grid)}>
        {getButtonText(useSelector(state => state.isValid))}
        </button>;
}
