import React from 'react';
import './Modal.css';



function Modal() {
	return (
		<div className="instructionsModal">
			<div className="modal-content">
				<h4 className="center">Clicky Game Instructions</h4>
				<ol>
					<li>Click on your favorite Dog to start the game.</li>
					<li>Every time you click a dog, the dog images get rearranged.</li>
					<li>If you pick the same dog twice then the game resets and you'll have to start again</li>
					<li>Click all 12 images without repeating and You Win!</li>
				</ol>
			</div>
			<br />
			<div className="modal-footer white-text center">
				<a className="waves-effect waves-light btn" onClick={() => {
					document.getElementsByClassName('instructionsModal')[0].classList.add('hide');
				}}>Let's Play!</a>
			</div>	
		</div>
	)
}





export default Modal;