/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-key */
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

import { updateState } from '../app/redux/laliga';

function LaLiga() {
  const dispatch = useDispatch();
  const storeMatches = useSelector((state) => state.laLigaReducer);
  const fetchItems = async () => {
    const data = await fetch('https://www.scorebat.com/video-api/v3/');
    const matchesJason = await data.json();
    console.log(matchesJason);
    const matches = matchesJason.response.filter((match) => match.competition === 'SPAIN: La Liga');
    dispatch(updateState(matches));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <div className="matches container" />
      <table className="table table-borderless">
        <thead>
          <tr>
            <th />
            <th />
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {storeMatches.map((match) => (
            <a href={match.matchviewUrl}>
              <td className="cell">
                <img className="image" id={match} src="https://res.cloudinary.com/erezfriemagor/image/upload/v1632229494/laliga-1534239805985.jpg" alt="match" />
                <div className="info">
                  <h5 className="title">{match.title}</h5>
                  <div>{match.date.slice(0, 10)}</div>
                </div>
              </td>
            </a>
          ))}
        </tbody>
      </table>

    </>

  );
}
export default LaLiga;
