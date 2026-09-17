import { renderWithTheme, screen } from "@/test-utils";
import Experience from "../Experience";

describe("Experience", () => {
  it("renders every job's role and company", () => {
    renderWithTheme(<Experience />);
    expect(screen.getByText("Senior Software Engineer")).toBeInTheDocument();
    expect(screen.getByText("Intelligenesis LLC / Ennoble First")).toBeInTheDocument();
    expect(screen.getByText("Captivation Software")).toBeInTheDocument();
    expect(screen.getByText("Boeing Intelligence and Analytics")).toBeInTheDocument();
    expect(
      screen.getByText("General Dynamics Information Technology")
    ).toBeInTheDocument();
  });

  it("renders education and certifications", () => {
    renderWithTheme(<Experience />);
    expect(screen.getByText("Liberty University")).toBeInTheDocument();
    expect(screen.getByText("Building with the Claude API")).toBeInTheDocument();
  });
});
