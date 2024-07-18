import { Link } from "react-router-dom";
import { APP_LOGO_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  const [showLogout, setShowLogout] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between bg-[#FFF3C7]">
      <div>
        <img className="w-32" src={APP_LOGO_URL} />
      </div>
      <div className="hidden md:flex space-x-4">
        <div className="flex items-center">
          <ul className="flex list-none">
            <li className="mx-3 text-lg">
              <i className=" mx-2 fa-solid fa-house"></i>
              <Link className="font-bold" to="/">
                Home
              </Link>
            </li>
            <li className="mx-3 text-lg">
              <i className="mx-2 fa-solid fa-circle-info"></i>
              <Link className="font-bold" to="/help">
                Help
              </Link>
            </li>
            <li className="mx-3 text-lg">
              {/* <i className="fa-solid fa-circle-info"></i> */}
              <Link className="font-bold" to="/grocery">
                Grocery
              </Link>
            </li>
            <li className="mx-3 text-lg flex items-center">
              <i className="mx-2 fa-solid fa-cart-shopping text-2xl"></i>
              <p className="-ml-6 mb-3 text-[#FFF3C7] text-xs font-bold">
                {cartItems.reduce((acc, curr) => {
                  return acc + curr.count;
                }, 0)}
              </p>
              <Link className="font-bold mx-2" to="/cart">
                Cart
              </Link>
            </li>
            {isAuthenticated ? (
              <>
                <li className="mx-3 text-lg">
                  <i className="mx-2 fa-solid fa-user"></i>
                  <Link className="font-bold" to="#">
                    <button
                      onClick={() =>
                        logout({
                          logoutParams: { returnTo: window.location.origin },
                        })
                      }
                      onMouseOver={() => setShowLogout(true)}
                      onMouseOut={() => setShowLogout(false)}
                    >
                      {user.nickname}
                    </button>
                  </Link>
                </li>
              </>
            ) : (
              <li className="mx-3 text-lg">
                <i className="mx-2 fa-solid fa-user"></i>
                <Link className="font-bold" to="#">
                  <button onClick={() => loginWithRedirect()}>Log In</button>
                </Link>
              </li>
            )}
          </ul>
        </div>
        {showLogout && <p className="mx-3 text-end underline">Logout➡️</p>}
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="mt-12 text-3xl focus:outline-none"
        >
          {isMenuOpen ? (
            <i className="fa-brands fa-x-twitter"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-2 bg-blue-600">
          <div className="flex items-center">
            <ul className="flex list-none">
              <li className="mx-3 text-lg">
                <i className=" mx-2 fa-solid fa-house"></i>
                <Link className="font-bold" to="/">
                  Home
                </Link>
              </li>
              <li className="mx-3 text-lg">
                <i className="mx-2 fa-solid fa-circle-info"></i>
                <Link className="font-bold" to="/help">
                  Help
                </Link>
              </li>
              <li className="mx-3 text-lg">
                {/* <i className="fa-solid fa-circle-info"></i> */}
                <Link className="font-bold" to="/grocery">
                  Grocery
                </Link>
              </li>
              <li className="mx-3 text-lg flex items-center">
                <i className="mx-2 fa-solid fa-cart-shopping text-2xl"></i>
                <p className="-ml-6 mb-3 text-[#FFF3C7] text-xs font-bold">
                  {cartItems.reduce((acc, curr) => {
                    return acc + curr.count;
                  }, 0)}
                </p>
                <Link className="font-bold mx-2" to="/cart">
                  Cart
                </Link>
              </li>
              {isAuthenticated ? (
                <>
                  <li className="mx-3 text-lg">
                    <i className="mx-2 fa-solid fa-user"></i>
                    <Link className="font-bold" to="#">
                      <button
                        onClick={() =>
                          logout({
                            logoutParams: { returnTo: window.location.origin },
                          })
                        }
                        onMouseOver={() => setShowLogout(true)}
                        onMouseOut={() => setShowLogout(false)}
                      >
                        {user.nickname}
                      </button>
                    </Link>
                  </li>
                </>
              ) : (
                <li className="mx-3 text-lg">
                  <i className="mx-2 fa-solid fa-user"></i>
                  <Link className="font-bold" to="#">
                    <button onClick={() => loginWithRedirect()}>Log In</button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
          {showLogout && <p className="mx-3 text-end underline">Logout➡️</p>}
        </div>
      )}
    </div>
  );
};

export default Header;
