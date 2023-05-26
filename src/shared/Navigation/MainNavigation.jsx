import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import NavLinks from "./Navlinks";

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <div className="flex justify-between align-items">
        <nav className="ml-5 m-5">
          <NavLinks />
        </nav>
        <Link to="/" className="font-vazirmatnMedium mr-5 m-5">مدیریت جلسه</Link>
      </div>
    </MainHeader>
  );
};

export default MainNavigation;
