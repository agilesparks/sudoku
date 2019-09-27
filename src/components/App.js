import React from "react";
import Grid from "./grid";
import { DigitSelection } from "./digitSelection";
import BoardsManager from "./BoardsManager";

export default function App() {
  return (
    <div className="App">
      <table align="center">
        <tbody>
          <tr>
          <td>
              <BoardsManager />
            </td>
            <td>
              <Grid />
            </td>
          </tr>
          <tr>
            <td>
              <DigitSelection />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
