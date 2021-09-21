/* eslint-disable react/jsx-key */
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

import { updateState } from '../app/redux/matches';

function MatchesPage() {
  const dispatch = useDispatch();
  const storeMatches = useSelector((state) => state.matchesReducer);
  const fetchItems = async () => {
    const data = await fetch('https://www.scorebat.com/video-api/v3/');
    const matchesJason = await data.json();
    const matches = matchesJason.response;
    dispatch(updateState(matches));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <div className="matches">
        {storeMatches.map((match) => (
          <div className="match">
            <div className="match" id={match} />
            <img src="https://res.cloudinary.com/erezfriemagor/image/upload/v1622463601/n2nxgeuh750ao53dzuh4.jpg" alt="match" />
          </div>
        ))}

      </div>
    </>

  );
}
export default MatchesPage;
