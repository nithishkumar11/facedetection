import React from "react";
const FaceRecognition = ({lin})=>{
 	return(
 		<div className = "center ma2">
 			<div className = "absolute ma2">
 				<img src = {lin} alt='' width = '50%' height = '40%'/>
 			</div>
 		</div>
 	);
 }

export default FaceRecognition;