import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserActions from "./USERACTIONS/UserActions";
import { userContext } from "./USERCONTEXT/UserContext";

const Navbar = () => {
  const { user } = useContext(userContext);
  const name = user && user.FirstName;
  const logout = (e) => {
    e.preventDefault();
    if (window.confirm("do you want to logout?")) {
      UserActions.logoutUser();
      window.location.replace("/");
    }
  };
  return (
    <nav className="navbar  navbar-expand-lg navbar-dark bg-dark text-info">
      <div className="container-fluid">
        <Link to="/Products" className="navbar-brand text-dark text-white">
          <img
            src="logo11.jpg"
            alt="Product Inventory"
            height="60px"
            width="70px"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-disabled="false"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link text-white ">
                <b>ABOUT</b>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Products" className="nav-link text-white">
                <b>PRODUCTS</b>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/TopViewed" className="nav-link text-white">
                <b>TopViewedProducts</b>
              </NavLink>
            </li>
            <li className="nav-item"></li>
          </ul>
          <form className="d-flex">
            {user ? (
              <b>
              
                <NavLink className='text-info' style={{textDecoration:'none'}} to={`/${name}`}>  <i className="bi bi-person-circle"/> Hello {name}</NavLink> &nbsp;{" "}
                <button
                  className="btn btn-danger btn-sm text-white"
                  onClick={(e) => logout(e)}
                >
                  log out?
                </button>
              </b>
            ) : (
              <NavLink to="/login">
                <b>LOGIN</b>
              </NavLink>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
