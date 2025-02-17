import React from "react";

const Controls = () => {
	return (
		<div className="w-full flex justify-between items-center mt-4 p-4 bg-gray-800 text-white rounded-lg">
			<span>
				Balance: <span className="text-yellow-400">1,909.00</span>
			</span>
			<span>
				Bet: <span className="text-yellow-400">10</span>
			</span>
			<span>
				Win: <span className="text-yellow-400">110.00</span>
			</span>
			<button className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold">
				Spin
			</button>
		</div>
	);
};

export default Controls;
