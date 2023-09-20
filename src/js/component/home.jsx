import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClock, faSolid } from "@fortawesome/free-solid-svg-icons"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import propTypes from "prop-types";

//create your first component
const Home = (props) => {
	return (
		<div className="container">
		<div className="text-center justify-content-center d-flex bg-dark text-light">
			<FontAwesomeIcon icon = {faClock} size="2xl" className="text-center justify-content-center mt-2 me-2"/>
			<div className="ms-2">
				<h1>{props.five}</h1>
			</div>
			<div className="ms-2">
				<h1>{props.four}</h1>
			</div>
			<div className="ms-2">
				<h1>{props.three}</h1>
			</div>
			<div className="ms-2">
				<h1>{props.two}</h1>
			</div>
			<div className="ms-2">
				<h1>{props.one}</h1>
			</div>
			
		</div>
		</div>
	);
};

export default Home;
