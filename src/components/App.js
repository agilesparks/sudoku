import React from "react";
import Grid from "./grid";
import { DigitSelectionContainer } from "./digitSelectionContainer";

export default function App() {
    return (
      <div className="App">
        <table align="center">
          <tbody>
            <tr>
              <td>
                <Grid />
              </td>
              <td>
                <DigitSelectionContainer />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }