import React, { useState } from "react";
import "./Stock.css";

function Stock() {
  const [mensaje, setMensaje] = useState("25 disponibles");

  const handleClick = () => {
    let checkbox = document.querySelector('input[type="radio"]:checked');

    if (!checkbox) {
      setMensaje("Debe seleccionar un talle.");
    } else {
      setMensaje("¡Gracias por su compra!");
      checkbox.checked = false;
      
      setTimeout(() => {
        setMensaje("25 disponibles");
      }, 4000);
    }
  };

	return (
		<div className="stock">
			<div className="stock_grid">
				<p className="selec_talla">
					Seleccionar talla (US)
				</p>

				<input
					type="radio"
					className="radio_input"
					value="option1"
					name="myRadio"
					id="myRadio1"
				/>
				<label className="radio_label" for="myRadio1">
					8
				</label>

				<input
					type="radio"
					className="radio_input"
					value="option2"
					name="myRadio"
					id="myRadio2"
				/>
				<label className="radio_label" for="myRadio2">
					8.5
				</label>

				<input
					type="radio"
					className="radio_input"
					value="option3"
					name="myRadio"
					id="myRadio3"
				/>
				<label className="radio_label" for="myRadio3">
					9
				</label>

				<input
					type="radio"
					className="radio_input"
					value="option4"
					name="myRadio"
					id="myRadio4"
				/>
				<label className="radio_label" for="myRadio4">
					9.5
				</label>

				<input
					type="radio"
					className="radio_input"
					value="option5"
					name="myRadio"
					id="myRadio5"
				/>
				<label className="radio_label" for="myRadio5">
					10
				</label>

				<input
					type="radio"
					className="radio_input"
					value="option6"
					name="myRadio"
					id="myRadio6"
				/>
				<label className="radio_label" for="myRadio6">
					10.5
				</label>
			</div>

			<div className="stock_detalle">
				<div className="stock_detalle_disp">
					<p className="mensaje">{mensaje}</p>
				</div>

				<div className="btn_container">
					<button className="btn-comprar" onClick={handleClick}>
						Comprar
					</button>
				</div>
			</div>
		</div>
	);
}
export default Stock;
