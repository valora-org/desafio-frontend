import { render } from "@testing-library/react";
import { Footer } from "../../components/Footer";

describe("Footer", () => {
  it("should render correcly with dynamic date", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("Valora 2022")).toBeInTheDocument();
  });
});
