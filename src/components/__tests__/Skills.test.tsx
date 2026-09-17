import { renderWithTheme, screen } from "@/test-utils";
import Skills from "../Skills";

describe("Skills", () => {
  it("renders the heading and every skill category", () => {
    renderWithTheme(<Skills />);
    expect(screen.getByText("Core Technologies")).toBeInTheDocument();
    for (const category of [
      "Languages",
      "Frontend",
      "Backend",
      "Data",
      "DevOps",
      "Systems",
      "AI Tools",
    ]) {
      expect(screen.getByText(category)).toBeInTheDocument();
    }
  });

  it("includes the currently listed technologies", () => {
    renderWithTheme(<Skills />);
    for (const skill of ["Node.js", "TypeScript", "AWS", "Claude", "CodeRabbit"]) {
      expect(screen.getByText(skill)).toBeInTheDocument();
    }
  });
});
