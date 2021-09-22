import React from "react";
import { NavHashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__logo">RockShop</div>
        <div className="footer__menu">
          <ul>
            Categoties
            <li>
              <NavHashLink to="/#igneousrocks">IgneousRocks</NavHashLink>
            </li>
            <li>
              <NavHashLink to="/#metamorphicrocks">
                MetamorphicRocks
              </NavHashLink>
            </li>
            <li>
              <NavHashLink to="/#minerals">Minerals</NavHashLink>
            </li>
            <li>
              <NavHashLink to="/#sedimentaryrocks">
                SedimentaryRocks
              </NavHashLink>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer__copywrite">Copywrite 2021</p>
    </footer>
  );
};

export default Footer;
