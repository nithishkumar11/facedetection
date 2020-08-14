import React from "react";
import './ImageLink.css';
const ImageLink = ()=>{
 	return(
 		<div>
 			<p className = 'f3 tc'>
 				{'I can Detect Your faces!! Give me a chance..'}
 			</p>
 			<div className='center'>
 				<div className=" bg pa4 shadow-3">
	 				<input className = 'bg-light-yellow f3 w-70' type="text" />
	 				<button className='w-30 f3 white bg-light-purple link grow'>Detect</button>
 				</div>
 			</div>
 		</div>
 	);
 }

export default ImageLink;