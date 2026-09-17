import { renderWithTheme, screen } from "@/test-utils";
import Isaiah from "../Isaiah";

describe("Isaiah (hero section)", () => {
  it("renders name, tagline, and location", () => {
    renderWithTheme(<Isaiah />);
    expect(screen.getByText("Isaiah Ofalt")).toBeInTheDocument();
    expect(
      screen.getByText("Senior Software Engineer | Full Stack Engineer")
    ).toBeInTheDocument();
    expect(screen.getByText("Denver Metropolitan Area, CO")).toBeInTheDocument();
  });

  it("links 'Get in touch' to the contact section", () => {
    renderWithTheme(<Isaiah />);
    expect(screen.getByRole("link", { name: "Get in touch" })).toHaveAttribute(
      "href",
      "#contact"
    );
  });

  it("offers a downloadable resume", () => {
    renderWithTheme(<Isaiah />);
    const link = screen.getByRole("link", { name: "Download resume" });
    expect(link).toHaveAttribute("href", "/Isaiah-Ofalt-Resume.pdf");
    expect(link).toHaveAttribute("download");
  });
});
