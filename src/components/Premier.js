/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-key */
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

import { updateState } from '../app/redux/premer';

function Premier() {
  const dispatch = useDispatch();
  const storeMatches = useSelector((state) => state.premierReducer);
  const fetchItems = async () => {
    const data = await fetch('https://www.scorebat.com/video-api/v3/');
    const matchesJason = await data.json();
    const matches = matchesJason.response.filter((match) => match.competition === 'ENGLAND: Premier League');
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
                <img className="image" id={match} src={match.thumbnail} alt="match" />
                <div className="info pinfo">
                  <h5 className="title">{match.title}</h5>
                  <div className="pdate">{match.date.slice(0, 10)}</div>
                </div>
              </td>
            </a>
          ))}
        </tbody>
      </table>

    </>

  );
}
export default Premier;
