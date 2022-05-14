import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../../components/Button";

describe("ButtonComponent", () => {
  it("should render correctly and trigger mocked function", async () => {
    const mockFn = jest.fn();
    render(<Button content="Button Content" onClick={mockFn} />);
    const renderedButton = screen.getByText("Button Content");

    fireEvent.click(renderedButton);
    expect(renderedButton.classList).toContain("button");
    expect(renderedButton).toBeVisible();
    expect(mockFn).toHaveBeenCalled();
  });

  it("should render component with a child", () => {
    const mockFn = jest.fn();

    render(
      <Button content="Button Content" onClick={mockFn}>
        <span>Child</span>
      </Button>
    );

    const renderedButton = screen.getByText("Button Content");

    fireEvent.click(renderedButton);
    expect(renderedButton.classList).toContain("button");
    expect(renderedButton).toBeVisible();
    expect(mockFn).toHaveBeenCalled();
    expect(screen.getByText("Child")).toBeVisible();
  });
});
