/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */

import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

import { updatePremier } from '../app/redux/premer';

import { updateLaLiga } from '../app/redux/laliga';

import { updateBLiga } from '../app/redux/bumdesliga';

import { updateSeriaA } from '../app/redux/seriaA';

function Homepage() {
  const dispatch = useDispatch();
  const fetchItems = async () => {
    const data = await fetch('https://www.scorebat.com/video-api/v3/');
    const matchesJason = await data.json();
    const preMatches = matchesJason.response.filter((match) => match.competition === 'ENGLAND: Premier League');
    const laLigaMatches = matchesJason.response.filter((match) => match.competition === 'SPAIN: La Liga');
    const bundesMatches = matchesJason.response.filter((match) => match.competition === 'GERMANY: Bundesliga');
    const seMatchesA = matchesJason.response.filter((match) => match.competition === 'ITALY: Serie A');
    dispatch(updatePremier(preMatches));
    dispatch(updateLaLiga(laLigaMatches));
    dispatch(updateBLiga(bundesMatches));
    dispatch(updateSeriaA(seMatchesA));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const pmatches = useSelector((state) => state.premierReducer).length;
  const lmatches = useSelector((state) => state.laLigaReducer).length;
  const bmatches = useSelector((state) => state.bundesLigaReducer).length;
  const seMatches = useSelector((state) => state.seriaReducer).length;
  const total = pmatches + lmatches + bmatches + seMatches;
  return (
    <>
      <nav className="navbar">
        <div className="link">
          <NavLink
            to="/"
          >
            <div className="back">
              <i className="fas fas fa-angle-left" />
              {' '}
              2011
              {' '}
            </div>
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
              <div className="league_card dark adjust">
                <img className="europe" src="https://res.cloudinary.com/erezfriemagor/image/upload/v1632344073/black-map-europe-countries-white-background-vector-illustration-149712794.jpg" alt="europe" />
              </div
              >
            </td>

            <td>
              <div className="league_card dark adjust">
                <div className="area">Europe</div>
                <div className="adjust_matches sematches">{total}</div>
              </div
              >
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="states_row"><div className="states">states by league</div></td>
          </tr>
          <tr>
            <td>
              <div className="link">
                <NavLink
                  to="/laliga"
                >

                  <div className="league_card dark">
                    <div className>
                      <div><i className="fas fa-arrow-circle-right arrow_home" /></div>
                      <div className="hand"><i className="fas fa-hand-point-up" /></div>
                      <img className="league_list_image" src="https://res.cloudinary.com/erezfriemagor/image/upload/v1632229494/laliga-1534239805985.jpg" alt="la_liga" />
                      <div className="league_name">
                        <div>La liga</div>
                        <div className="adjust_matches">{lmatches}</div>
                      </div>
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

                  <div className="league_card bright">
                    <div className>
                      <div><i className="fas fa-arrow-circle-right arrow_home" /></div>
                      <img className="league_list_image" src="https://res.cloudinary.com/erezfriemagor/image/upload/v1632316697/Premier_League_Logo.svg.png" alt="Premier League" />
                      <div className="league_name">Premier League</div>
                      <div className="adjust_matches pmatches">{pmatches}</div>
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

                  <div className="league_card bright">
                    <div className>
                      <div><i className="fas fa-arrow-circle-right arrow_home" /></div>
                      <img className="league_list_image" src="https://res.cloudinary.com/erezfriemagor/image/upload/v1632317862/italy-serie-a.png" alt="Seria A" />
                      <div className="league_name">Seria A</div>
                      <div className="adjust_matches sematches">{seMatches}</div>
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

                  <div className="league_card bright">
                    <div className>
                      <div><i className="fas fa-arrow-circle-right arrow_home" /></div>
                      <img className="league_list_image" src="https://res.cloudinary.com/erezfriemagor/image/upload/v1632348556/27160_imgw968.png" alt="Bundes Liga" />
                      <div className="league_name">BundesLiga</div>
                      <div className="adjust_matches sematches">{bmatches}</div>
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
