import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fast react Pizza Co.</Link>
      <SearchOrder />
      <p>Yasith</p>
    </header>
  );
}

export default Header;
