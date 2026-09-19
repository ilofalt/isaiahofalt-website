import { renderWithTheme, screen } from "@/test-utils";
import Header from "../Header";

describe("Header", () => {
  it("renders nav links pointing at each page section", () => {
    renderWithTheme(<Header />);
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("href", "#about");
    expect(screen.getByRole("link", { name: "Skills" })).toHaveAttribute("href", "#skills");
    expect(screen.getByRole("link", { name: "Experience" })).toHaveAttribute("href", "#experience");
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "#contact");
  });

  it("renders the color mode toggle", () => {
    renderWithTheme(<Header />);
    expect(screen.getByLabelText("Toggle color mode")).toBeInTheDocument();
  });
});
