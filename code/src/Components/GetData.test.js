import GetData from "./GetData";

import { render, waitFor, screen } from "@testing-library/react";

describe("expected Api data", () => {
  it("check id data is returned from API", async () => {
    render(<GetData />);

    await waitFor(() => {
      expect(screen.getByText("Jovani")).toBeInTheDocument();
    });
  });
});
