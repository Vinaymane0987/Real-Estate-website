import React, { useEffect } from "react";
import "./Header.css";
import { auth } from "../../firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../../features/counter/counterSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const gotoAbout = () => {
    navigate("/about");
  };

  const gotoContact = () => {
    navigate("/contact");
  };

  const gotoProperties = () => {
    navigate("/properties");
  };
  const gotHome = () => {
    navigate("/home");
  };
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [userName, userPhoto]);

  const signInWithGoogle = () => {
    if (!userName) {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result);
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((err) => alert(err.message));
    }
  };
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
  return (
    <nav>
      {!userName ? (
        <button onClick={signInWithGoogle} className="loginbutton">
          Login
        </button>
      ) : (
        <>
          <div className="header">
            <h3>.VinnyClub</h3>
            <div className="navelement">
              <button className="navbuttn" onClick={() => gotHome()}>
                Home
              </button>
              <button className="navbuttn" onClick={() => gotoAbout()}>
                About
              </button>
              <button className="navbuttn" onClick={() => gotoProperties()}>
                Properties
              </button>
              <button className="navbuttn" onClick={() => gotoContact()}>
                Contact
              </button>
            </div>
            <button className="signout__css" onClick={signInWithGoogle}>
              Sign out
            </button>
          </div>
          {/* <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={signInWithGoogle}>Sign Out</span>
            </DropDown>
          </SignOut> */}
        </>
      )}
    </nav>
  );
};

export default Header;
