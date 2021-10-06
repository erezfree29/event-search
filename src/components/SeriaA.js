/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-key */

import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

import { updateSeriaA } from '../app/redux/seriaA';

function SeriaA() {
  const dispatch = useDispatch();
  const seMatches = useSelector((state) => state.seriaReducer);
  const fetchItems = async () => {
    const data = await fetch('https://www.scorebat.com/video-api/v3/');
    const matchesJason = await data.json();
    const seMatchesA = matchesJason.response.filter((match) => match.competition === 'ITALY: Serie A');
    dispatch(updateSeriaA(seMatchesA));
  };

  useEffect(() => {
    if (seMatches.length === 0) {
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
      <div className="league_top">
        <div className="lename name">  Serie A</div>
        <img className="image_top image_s" src="https://res.cloudinary.com/erezfriemagor/image/upload/v1632317862/italy-serie-a.png" alt="la_liga" />
      </div>
      <table className=" table table-borderless table-striped">
        <thead>
          <tr>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {seMatches.map((match) => (
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
export default SeriaA;
