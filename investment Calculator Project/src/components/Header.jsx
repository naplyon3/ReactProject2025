import logo from "../assets/Investment-Calculator-logo.png";
export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="logo" />
      <h1>React Investment Calculator</h1>
    </header>
  );
}
