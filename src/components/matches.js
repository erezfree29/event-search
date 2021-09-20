import React, { useEffect } from 'react';

function MatchesPage() {
  const fetchItems = async () => {
    const data = await fetch('https://www.scorebat.com/video-api/v3/');
    const rockets = await data.json();
    console.log(rockets);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Time</h1>
      <h1>Time</h1>
      <h1>Time</h1>
      <h1>Time</h1>
    </>

  );
}
export default MatchesPage;
