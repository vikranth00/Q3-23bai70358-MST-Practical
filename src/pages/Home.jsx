import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page">
      <h1>Home Page</h1>
      <p>Welcome to this tiny React app. Nothing fancy, just React doing its thing.</p>
      <p>This project is a small demo showing how React Router lets us switch between pages without refreshing the whole website. Basically, the page changes instantly and smoothly.</p>
      <p>If you click the navigation links above, you'll notice that the page content changes but the website doesn't reload. That's because React is handling the routing internally.</p>
      
      <div className="navigation">
        <Link to="/about" className="link">Go to About Page</Link>
      </div>
    </div>
  );
}

export default Home;
