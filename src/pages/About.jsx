import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="page">
      <h1>About Page</h1>
      <p>This project is a simple demonstration of how routing works in React.</p>
      <p>Normally, when you move from one page to another on a website, the browser reloads the entire page. But with React Router, the application changes the displayed component without refreshing the browser.</p>
      <p>This makes the app faster and gives a smoother user experience.</p>
      
      <div className="navigation">
        <Link to="/" className="link">Go to Home Page</Link>
      </div>
    </div>
  );
}

export default About;
