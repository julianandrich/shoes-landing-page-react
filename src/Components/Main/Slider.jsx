import React from "react";
import "./Slider.css";
import img1 from '../images/Nike_costado-nobg.png';
import img2 from '../images/Nike_ambas_costado-nobg.png';
import img3 from '../images/Nike_ambas_atras-nobg.png';

function Slider() {
	return (
		<div className="main_img">
			<div className="images">
				<div className="images-inner">
					<div className="image-slide">
						<img
							src={img1}
							alt=""
						/>
					</div>
					<div className="image-slide">
						<img
							src={img2}
							alt=""
						/>
					</div>
					<div className="image-slide">
						<img
							src={img3}
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Slider;