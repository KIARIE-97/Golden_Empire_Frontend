import React from "react";
import slotBackground from "../../public/images/background.webp"; 

const SlotReels = () => {
	return (
		<div className="relative flex items-center bg-green-700 border-4 border-yellow-400 rounded-lg w-[300px] h-[100px] p-2">
			{/* Reel 1 */}
			<div className="flex items-center justify-center text-4xl text-yellow-300 bg-green-900 w-1/3 h-full">
				5
			</div>
			{/* Reel 2 */}
			<div className="flex items-center justify-center text-4xl text-yellow-300 bg-green-900 w-1/3 h-full">
				5
			</div>
			{/* Reel 3 */}
			<div className="flex items-center justify-center text-4xl text-yellow-300 bg-green-900 w-1/3 h-full">
				2x
			</div>
		</div>
	);
};

export default SlotReels;
