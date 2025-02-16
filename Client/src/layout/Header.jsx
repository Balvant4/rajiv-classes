import React from "react";
import UserPublicRoute from "../route/routes/UserPublicRoute";

const Header = () => {
  return (
    <div>
      Header
      <div>
        {UserPublicRoute.map((route, index) => {
          return <div key={index}>{route.label}</div>;
        })}
      </div>
    </div>
  );
};

export default Header;
