import { renderWithTheme, screen } from "@/test-utils";
import Contact from "../Contact";

describe("Contact", () => {
  it("renders a mailto link without target/rel", () => {
    renderWithTheme(<Contact />);
    const email = screen.getByRole("link", { name: /Email/i });
    expect(email).toHaveAttribute("href", "mailto:ilofalt@gmail.com");
    expect(email).not.toHaveAttribute("target");
  });

  it("renders external links with target=_blank and rel=noopener noreferrer", () => {
    renderWithTheme(<Contact />);
    const linkedin = screen.getByRole("link", { name: /LinkedIn/i });
    expect(linkedin).toHaveAttribute("href", "https://www.linkedin.com/in/isaiah-ofalt/");
    expect(linkedin).toHaveAttribute("target", "_blank");
    expect(linkedin).toHaveAttribute("rel", "noopener noreferrer");

    const github = screen.getByRole("link", { name: /GitHub/i });
    expect(github).toHaveAttribute("href", "https://github.com/ilofalt");
    expect(github).toHaveAttribute("target", "_blank");
    expect(github).toHaveAttribute("rel", "noopener noreferrer");
  });
});
