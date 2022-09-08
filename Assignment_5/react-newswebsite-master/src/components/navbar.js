import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="navbar">
			<Link to="/">
				<img class= "logo" src="images/logo.png" alt="" />
			</Link>
			<ul>
				<li>
					<Link to="/science">Science</Link>
				</li>
				<li>
					<Link to="/investing">Investing</Link>
				</li>
				<li>
					<Link to="/politics">Politics</Link>
				</li>
				<li>
					<Link to="/arts">Arts</Link>
				</li>
				<li>
					<Link to="/tech">Tech</Link>
				</li>
				<li>
					<Link to="/food">Food</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
