import React from "react";
import { BonuscoLogoImg } from "assets";
const Header: React.FC = () => {
  return (
    <div
      className="w-full flex-center bg-secondary fixed t-0"
      style={{ height: "2.5rem" }}
    >
      <img alt="Bonusco Logo" src={BonuscoLogoImg} style={{ maxWidth: 100 }} />
    </div>
  );
};
export default Header;
