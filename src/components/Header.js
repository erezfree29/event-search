import { NavLink } from 'react-router-dom';

const Header = () => (
  <>
    <nav className="navbar">
      <div className="links">
        <div className="link">
          <NavLink
            to="/rockets"
          >
            Rockets
          </NavLink>
        </div>
        <div className="link">
          <NavLink
            to="/missions"
          >
            Missions
          </NavLink>
        </div>
        <div className="link">
          <NavLink
            to="/myprofile"
          >
            My profile
          </NavLink>
        </div>
      </div>
      <div className="images">
        <div className="image">
          <img src="https://a5.behance.net/11aa46df22ab4e63bdd2e24a88f638e6c74a8f7d/img/galleries/icons/ribbons/1x/graphic-design.png?cb=264615658" alt="gr" />
        </div>
        <div className="image">
          <img className="image" src="https://a5.behance.net/11aa46df22ab4e63bdd2e24a88f638e6c74a8f7d/img/galleries/icons/ribbons/1x/ui-ux.png?cb=264615658" alt="ui" />
          <div className="two">2</div>
        </div>
      </div>
    </nav>
  </>
);

export default Header;
