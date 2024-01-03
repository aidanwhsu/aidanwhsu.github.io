import React from 'react';
import './navbar.css';
import { useLocation, Link } from "react-router-dom";
import linkedin_icon from "../assets/images/linkedin.png";
import github_icon from "../assets/images/github.png";

function Navbar() {
	return (
		<div className="nav">
			<div className="title">Aidan Hsu</div>
			<Link to="/">Home</Link>
			<Link to="/projects">Projects</Link>
			<a href="#">Resume</a>
			<a id="linkedin" href="https://www.linkedin.com/in/aidan-hsu-ahwc/">
			  LinkedIn
			  <img className="icon" src={linkedin_icon} />
			</a>
			<a id="github" href="https://github.com/aidanwhsu">
			  Github
			  <img className="icon" src={github_icon} />
			</a>
			<a href="#">More About Me!</a>
		</div>
	);
}

export default Navbar;