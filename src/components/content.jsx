import React from 'react';
// import { Routes, Route } from "react-router";
// import { BrowserRouter } from "react-router-dom";
import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import Home from './home.jsx';
import Projects from './projects.jsx';
import Navbar from "./navbar.jsx";
import './content.css';

function Content() {
	return (
		<BrowserRouter>
        <Routes>
          <Route path = "/testing" element={<NavbarAndOutlet/>}>
	        <Route path="/testing" element={<Home />} />
	        <Route path="/testing/projects" element={<Projects />} />
	      </Route>
        </Routes>
        </BrowserRouter>

	)
}

function NavbarAndOutlet() {
	return (
		<>
		<Navbar/>
		<div className="content">
			<Outlet/>
		</div>
		</>
	)
}


export default Content;