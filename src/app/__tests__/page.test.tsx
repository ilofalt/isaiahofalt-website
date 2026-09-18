import { renderWithTheme } from "@/test-utils";
import Home from "../page";

describe("Home page composition", () => {
  it("renders every section with the id its nav link points to", () => {
    const { container } = renderWithTheme(<Home />);

    for (const id of ["about", "skills", "experience", "contact"]) {
      expect(container.querySelector(`#${id}`)).not.toBeNull();
    }
  });

  it("renders each section's heading in document order", () => {
    const { getByRole } = renderWithTheme(<Home />);

    const headings = [
      "Senior Software Engineer | Full Stack Engineer",
      "Core Technologies",
      "Experience",
      "Get in touch",
    ].map((name) => getByRole("heading", { name }));

    for (let i = 1; i < headings.length; i++) {
      expect(
        headings[i - 1].compareDocumentPosition(headings[i]) &
          Node.DOCUMENT_POSITION_FOLLOWING
      ).toBeTruthy();
    }
  });
});
