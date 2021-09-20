/* eslint-disable no-unused-vars */
import { NavLink } from 'react-router-dom';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7QlpK6CmgdU0hZt33zXJ/books';

const Header = () => {
  const hoover = () => {
    alert(1);
  };

  return (
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
        <div className="image gr">
          <img src="https://a5.behance.net/11aa46df22ab4e63bdd2e24a88f638e6c74a8f7d/img/galleries/icons/ribbons/1x/graphic-design.png?cb=264615658" alt="gr" />
        </div>
        <div>
          <img className="image" src="https://a5.behance.net/11aa46df22ab4e63bdd2e24a88f638e6c74a8f7d/img/galleries/icons/ribbons/1x/ui-ux.png?cb=264615658" alt="ui" />
          <div>2</div>
        </div>
      </div>
      <div className="hide">
        <div className="featured">FEATURED IN</div>
        <div className="branding"><a href="https://www.behance.net/galleries/graphic-design/branding" style={{ color: 'blue' }}>Branding</a></div>
      </div>
    </nav>
  );
};

export default Header;
