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
            <td><div className="league_card bright adjust">Alfreds Futterkiste</div></td>
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
                  <div className="right_card">
                    <div className="league_card dark adjust">
                      <div className>La liga</div>
                    </div
              >
                  </div>
                </NavLink>
              </div>

            </td>
            <td>
              <div className="league_card bright adjust">
                <div className>La liga</div>
              </div
              >
            </td>
          </tr>
        </tbody>
      </table>

    </>

  );
}
export default Homepage;
