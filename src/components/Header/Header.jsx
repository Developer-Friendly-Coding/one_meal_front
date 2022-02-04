import { StyledHeader } from "./StyledHeader";
import Btn from "../layout/Button";
import Search from "../layout/Search";
import Login from "../layout/Login";

const Header = () => {
  return (
    <StyledHeader>
      <Login />
      <Search />
      <Btn />
    </StyledHeader>
  );
};

export default Header;
