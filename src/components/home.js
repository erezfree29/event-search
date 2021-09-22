/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-key */

import { NavLink } from 'react-router-dom';

function Homepage() {
  return (
    <>
      <nav className="navbar">
        <div className="link">
          <NavLink
            to="/"
          >
            <div className="back"><i className="fas fa-chevron-right" /></div>
          </NavLink>
        </div>
        <div className="views">League matches</div>
      </nav>
      <table className="leagues_list">
        <thead>
          <tr>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="league_card bright adjust">
                <img className="europe" src="https://res.cloudinary.com/erezfriemagor/image/upload/v1632344073/black-map-europe-countries-white-background-vector-illustration-149712794.jpg" alt="europe" />
              </div>
            </td>
            <td>
              <div className="league_card dark">
                <div className="area">Europe</div>
              </div
              >
            </td>
          </tr>
          <tr>
            <td>
              <div className="link">
                <NavLink
                  to="/laliga"
                >

                  <div className="league_card dark adjust">
                    <div className>
                      <div><i className="fas fa-arrow-circle-right arrow_home" /></div>
                      <div className="states">states by league</div>
                      <div className="hand"><i className="fas fa-hand-point-up" /></div>
                      <img className="league_list_image" src="https://res.cloudinary.com/erezfriemagor/image/upload/v1632229494/laliga-1534239805985.jpg" alt="la_liga" />
                      <div className="league_name">La liga</div>
                    </div>
                  </div>
                </NavLink>
              </div>

            </td>
            <td>
              <div className="link">
                <NavLink
                  to="/priemier"
                >

                  <div className="league_card bright adjust">
                    <div className>
                      <div><i className="fas fa-arrow-circle-right arrow_home" /></div>
                      <img className="league_list_image" src="https://res.cloudinary.com/erezfriemagor/image/upload/v1632316697/Premier_League_Logo.svg.png" alt="la_liga" />
                      <div className="league_name">Premier League</div>
                    </div>
                  </div>
                </NavLink>
              </div>

            </td>
          </tr>
          <tr>
            <td>
              <div className="link">
                <NavLink
                  to="/seria"
                >

                  <div className="league_card bright adjust">
                    <div className>
                      <div><i className="fas fa-arrow-circle-right arrow_home" /></div>
                      <img className="league_list_image" src="https://res.cloudinary.com/erezfriemagor/image/upload/v1632317862/italy-serie-a.png" alt="la_liga" />
                      <div className="league_name">Seria A</div>
                    </div>
                  </div>
                </NavLink>
              </div>

            </td>
            <td>
              <div className="link">
                <NavLink
                  to="/bundes"
                >

                  <div className="league_card bright adjust">
                    <div className>
                      <div><i className="fas fa-arrow-circle-right arrow_home" /></div>
                      <img className="league_list_image" src="https://res.cloudinary.com/erezfriemagor/image/upload/v1632348556/27160_imgw968.png" alt="la_liga" />
                      <div className="league_name">Bundes Liga</div>
                    </div>
                  </div>
                </NavLink>
              </div>

            </td>
          </tr>
        </tbody>
      </table>

    </>

  );
}
export default Homepage;
