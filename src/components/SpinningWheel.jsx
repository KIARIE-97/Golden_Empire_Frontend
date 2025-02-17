import React, { useState } from "react";
import { motion } from "framer-motion";
import wheelImage from "../../public/images/Wheel.webp";
import pointerImage from "../../public/images/Pointer.webp";
import num100 from "../../public/images/hundred.webp";
import num500 from "../../public/images/5Hundred.webp";
import num200 from "../../public/images/thousand.webp";
import num300 from "../../public/images/5x.webp";

const numbers = [
	{ src: num100, angle: 0, top: "10%", left: "50%" },
	{ src: num500, angle: 90, top: "50%", left: "90%" },
	{ src: num200, angle: 180, top: "80%", left: "50%" },
	{ src: num300, angle: 270, top: "50%", left: "10%" },
];

const SpinningWheel = () => {
	const [rotation, setRotation] = useState(0);

	const spinWheel = () => {
		const newRotation = rotation + Math.floor(Math.random() * 360 + 720); // Random spin
		setRotation(newRotation);
	};

	return (
		<div className="relative w-40 h-40 flex items-center justify-center">
			{/* Wheel Image (Rotating) */}
			<motion.div
				animate={{ rotate: rotation }}
				transition={{ type: "tween", duration: 3, ease: "easeOut" }}
				className="relative w-full h-full"
			>
				<img src={wheelImage} alt="Wheel" className="w-full h-full" />

				{/* Number Images (Positioned on Wheel) */}
				{numbers.map((num, index) => (
					<img
						key={index}
						src={num.src}
						alt={`Number ${index}`}
						className="absolute w-6 h-6"
						style={{
							top: num.top,
							left: num.left,
							transform: `translate(-50%, -50%) rotate(${num.angle}deg)`,
						}}
					/>
				))}
			</motion.div>

			{/* Pointer Image (Fixed) */}
			<img src={pointerImage} alt="Pointer" className="absolute w-8 top-0" />

			{/* Spin Button */}
			<button
				onClick={spinWheel}
				className="absolute bottom-[-50px] px-4 py-2 bg-yellow-500 text-black font-bold rounded-lg"
			>
				Spin
			</button>
		</div>
	);
};

export default SpinningWheel;
