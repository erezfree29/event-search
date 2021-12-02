import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div>
      <div className="homepage">
        <h2>welcome to the food app</h2>
        <Link className="link" to="/recipes">
          Find a recipe
        </Link>
      </div>
    </div>

  );
}
export default Homepage;
