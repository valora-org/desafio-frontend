import { render } from "@testing-library/react";
import { AppBar } from "../../components/AppBar";

describe("AppBar", () => {
  it("should render with JOHN DOE mock", () => {
    const { getByText } = render(<AppBar />);
    expect(getByText("JOHN DOE")).toBeInTheDocument();
    expect(getByText("Desenvolvedor")).toBeInTheDocument();
  });
});
