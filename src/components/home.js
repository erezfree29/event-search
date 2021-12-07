import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div>
      <div className="homepage">
        <div className="d-flex justify-content-center"><h2>welcome to the food app</h2></div>
        <Link className="link d-flex justify-content-center" to="/recipes">
          Find a recipe
        </Link>
      </div>
    </div>

  );
}
export default Homepage;
