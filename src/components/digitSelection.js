import React from "react";

function getButtonText(validity) {
    return validity? "Valid":"Not Valid"
}

export function DigitSelection({ validity, dispatch }) {
    return <button type="button" onClick={() => dispatch({type: 'CHECK_VALIDITY' })}>
        {getButtonText(validity)}
        </button>;
}
