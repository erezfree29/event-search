/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-key */

import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

import { updateBLiga } from '../app/redux/bumdesliga';

function Bundesliga() {
  const dispatch = useDispatch();
  const bmatches = useSelector((state) => state.bundesLigaReducer);
  const fetchItems = async () => {
    const data = await fetch('https://www.scorebat.com/video-api/v3/');
    const matchesJason = await data.json();
    const bundesMatches = matchesJason.response.filter((match) => match.competition === 'GERMANY: Bundesliga');
    dispatch(updateBLiga(bundesMatches));
  };

  useEffect(() => {
    if (bmatches.length === 0) {
      fetchItems();
    }
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="link">
          <NavLink
            to="/"
          >
            <div className="back"><i className="fas fa-angle-left" /></div>
          </NavLink>
        </div>
        <div className="views">League matches</div>
      </nav>
      <div className="hand move_down bhand"><i className="fas fa-hand-point-up" /></div>
      <div className="breakdwon">League team Breakdown 2021</div>
      <div className="bundes_liga">
        <div className="league_top">
          <div className="lename name"> Bundesliga</div>
          <img className="image_top" src="https://res.cloudinary.com/erezfriemagor/image/upload/v1632348556/27160_imgw968.png" alt="premier" />
        </div>
        <table className=" table table-borderless table-striped">
          <thead>
            <tr>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {bmatches.map((match) => (
              <tr>
                <td>
                  <a href={match.matchviewUrl}>
                    <div className="mcard">
                      <div>{match.title}</div>
                      <div className="mdate">
                        <div className="dword">Date</div>
                        <div>{match.date.slice(0, 10)}</div>
                        <div><i className="fas fa-arrow-circle-right" /></div>
                      </div>
                    </div>
                  </a>
                </td>
              </tr>

            ))}
          </tbody>
        </table>
      </div>

    </>

  );
}
export default Bundesliga;
