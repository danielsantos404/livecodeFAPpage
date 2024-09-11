import * as S from "./style"
import uberImg from "../../assets/uber.png"

const Header = () => {
  return (
    <S.StyledHeader>
      <div>
        <i>
          <img src={uberImg} alt="" />
        </i>
        <h1>Uber</h1>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>How it Works</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <button>Get Started</button>
      </nav>
    </S.StyledHeader>
  );
};

export default Header;
