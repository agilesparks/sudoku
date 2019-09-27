import React from "react";
import { useSelector, useDispatch  } from 'react-redux'

function getButtonText(validity) {
    return validity? "Valid":"Not Valid"
}

export function DigitSelection() {
    const dispatch = useDispatch();
    return <button type="button" onClick={() => dispatch({type: 'CHECK_VALIDITY' })}>
        {getButtonText(useSelector(state => state.validity))}
        </button>;
}
