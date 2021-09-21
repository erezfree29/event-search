import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="navbar">
    <div className="links">
      <div className="link">
        <NavLink
          to="/laliga"
        >
          LaLiga
        </NavLink>
      </div>
      <div className="link">
        <NavLink
          to="/priemier"
        >
          Priemier League
        </NavLink>
      </div>
      <div className="link">
        <NavLink
          to="/seria"
        >
          Seria A
        </NavLink>
      </div>
    </div>
    <div className="images">
      <div className="gr_contain">
        <img className="gr" src="https://a5.behance.net/11aa46df22ab4e63bdd2e24a88f638e6c74a8f7d/img/galleries/icons/ribbons/1x/graphic-design.png?cb=264615658" alt="gr" />
        <div className="hide">
          <div className="featured">FEATURED IN</div>
          <div className="branding"><a href="https://www.behance.net/galleries/graphic-design/branding" style={{ color: 'blue' }}>Branding</a></div>
        </div>
      </div>
      <div>
        <div className="ui_contain">
          <img className="ui" src="https://a5.behance.net/11aa46df22ab4e63bdd2e24a88f638e6c74a8f7d/img/galleries/icons/ribbons/1x/ui-ux.png?cb=264615658" alt="ui" />
          <div className="two">2</div>
          <div className="hide_two">
            <div className="featured">FEATURED IN</div>
            <div className="branding"><a href="https://www.behance.net/galleries/ui-ux/web-design" style={{ color: 'blue' }}>Web Design</a></div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
