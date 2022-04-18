import React from 'react';
import './Logo.css';
import logo from '../images/Nike-Logo-No-Background.png';

function Logo() {
	return (
		<div className="header_container_logo">
			<a href="#">
				<img src={logo} alt="" />
			</a>
		</div>
	);
}
export default Logo;
