import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
	return (
		<BrowserRouter>
			<div>
				<h1>Navbar</h1>
				<Navbar />
				<Hero />
				<Routes>
					<Route path="/" element={<Navigate to="/components/Navbar" />} />
					<Route path="/pages/home" element={<Home />} />
					<Route path="/pages/aboutus" element={<AboutUs />} />
					<Route path="/pages/contact" element={<Contact />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
