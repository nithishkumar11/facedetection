import React from "react";
import './f.css';
const FaceRecognition = ({lin,box})=>{
	const styleObject = { top:box.top_Row , 
						right:box.right_Col,
						bottom:box.bottom_Row,
						left:box.left_Col }
	console.log(styleObject);
 	return(
		<div className = "center ma2">
 			<div className = "absolute ma2">
 				<img id ="image" src = {lin} alt='' width = '500px' height = 'auto' />
 				<div className = "bounding-box" style ={styleObject}></div>
 			</div>
 		</div>
 	);
 }

export default FaceRecognition;