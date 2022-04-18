import React from "react";
import './Main.css';
import Content from './Content';
import Slider from './Slider';
import Precio from './Precio';
import Stock from './Stock';

function Main() {
	return (
		<div class="main_section">
			<div class="main_section_grid">
				<Content />

				<Slider />

				<Precio />

				<Stock />
			</div>
		</div>
	);
}
export default Main;
