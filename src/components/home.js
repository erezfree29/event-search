/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-key */

import { NavLink } from 'react-router-dom';

function Homepage() {
  return (
    <>
      <div className="homepage">
        <nav className="navbar">
          <div className="views">Choose from best leagues</div>
        </nav>
        <table className="leagues_table container">
          <tr>
            <th />
            <th />
          </tr>
          <tr>
            <td>
              <div className="link">
                <NavLink
                  className="back"
                  to="/laliga"
                >
                  <div className="league_card dark">
                    <div className="lename">
                      <div>La liga</div>
                      <img className="limage" src="https://res.cloudinary.com/erezfriemagor/image/upload/v1632229494/laliga-1534239805985.jpg" alt="laliga" />
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
                  <div className="league_card dark">
                    <div className="lename">
                      <div>Premier league</div>
                      <img className="limage" src="https://res.cloudinary.com/erezfriemagor/image/upload/v1632316697/Premier_League_Logo.svg.png" alt="premier" />
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
                  <div className="league_card dark">
                    <div className="lename">
                      <div>Seria A</div>
                      <img className="limage" src="https://res.cloudinary.com/erezfriemagor/image/upload/v1632317862/italy-serie-a.png" alt="laliga" />
                    </div>
                  </div>
                </NavLink>
              </div>
            </td>
            <td>
              <div className="link">
                <NavLink
                  to="/laliga"
                >
                  <div className="league_card dark">
                    <div className="lename">
                      <div>La liga</div>
                      <img className="limage" src="https://res.cloudinary.com/erezfriemagor/image/upload/v1632229494/laliga-1534239805985.jpg" alt="laliga" />
                    </div>
                  </div>
                </NavLink>
              </div>
            </td>
          </tr>
        </table>
      </div>

    </>

  );
}
export default Homepage;
