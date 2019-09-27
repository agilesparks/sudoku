import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { DigitSelection } from "../../components/digitSelection";

describe("my tests", () => {
  test("can render with redux with defaultssimpleRender", async () => {
    const { getByText, rerender } = render(
      <DigitSelection validity={true} dispatch={undefined} />
    );

    expect(getByText("Valid")).toBeTruthy();

    rerender(<DigitSelection validity={false} dispatch={undefined} />);

    expect(getByText("Not Valid")).toBeTruthy();
  });
});
