import React from "react";

export function Cell({ digit, row, col, dispatch }) {
    return <td className="cell" style={{width: 50, height: 50
}}>
        <textarea rows="1" cols="1" value={digit}
            onChange={(data) =>  dispatch({
                    type: 'UPDATE_CELL_DIGIT', digit: data.target.value, cellRow: row, cellCol: col
                })
            }>
            
            </textarea>
    </td>;
}
