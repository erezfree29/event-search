/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-key */

import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

import { updateLaLiga } from '../app/redux/laliga';

function Laliga() {
  const dispatch = useDispatch();
  const fetchItems = async () => {
    const data = await fetch('https://www.scorebat.com/video-api/v3/');
    const matchesJason = await data.json();
    const laLigaMatches = matchesJason.response.filter((match) => match.competition === 'SPAIN: La Liga');
    dispatch(updateLaLiga(laLigaMatches));
  };

  useEffect(() => {
    if (lmatches.length === 0) {
      fetchItems();
    }
  }, []);

  const lmatches = useSelector((state) => state.laLigaReducer);

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
      <div className="hand move_down"><i className="fas fa-hand-point-up" /></div>
      <div className="breakdwon">League team Breakdown 2021</div>
      <div className="league_top">
        <div className="lename name"> La Liga</div>
        <img className="image_top" src="https://res.cloudinary.com/erezfriemagor/image/upload/v1632229494/laliga-1534239805985.jpg" alt="la_liga" />
      </div>
      <table className=" table table-borderless table-striped">
        <thead>
          <tr>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {lmatches.map((match) => (
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

    </>

  );
}
export default Laliga;
