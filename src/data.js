import linkedin from "./assets/linkedin.svg";
import github from "./assets/github-icon.svg";

const navLinks = [
  {
    id: "about",
    displayValue: "About",
  },
  {
    id: "skills",
    displayValue: "Skills",
  },
  {
    id: "experience",
    displayValue: "Experience",
  },
  {
    id: "projects",
    displayValue: "Projects",
  },
  {
    id: "contact",
    displayValue: "Contact",
  },
];

const socialLinks = [
  {
    id: "linkedin",
    icon: linkedin,
    href: ' '
  },
  {
    id: "github",
    icon: github,
  },
];

export { navLinks, socialLinks };
