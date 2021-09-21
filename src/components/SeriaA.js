/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-key */
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

import { updateState } from '../app/redux/seriaA';

function SeriaA() {
  const dispatch = useDispatch();
  const storeMatches = useSelector((state) => state.seriaReducer);
  const fetchItems = async () => {
    const data = await fetch('https://www.scorebat.com/video-api/v3/');
    const matchesJason = await data.json();
    const matches = matchesJason.response.filter((match) => match.competition === 'ITALY: Serie A');
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
                <img className="image" id={match} src="https://res.cloudinary.com/erezfriemagor/image/upload/v1632235178/anq6i4s8yhnx9gdvkz8k.jpg" alt="match" />
                <div className="info ainfo">
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
export default SeriaA;
