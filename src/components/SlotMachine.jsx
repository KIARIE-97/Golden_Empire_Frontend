import React from "react";
import SpinningWheel from "./SpinningWheel";
import SlotReels from "./SlotReels";
import Controls from "./Controls";

const SlotMachine = () => {
	return (
		<div className="w-full h-screen bg-black flex flex-col items-center justify-center">
			{/* Header Section */}
			<div className="text-yellow-500 text-3xl font-bold">Money Coming</div>

			{/* Betting Options */}
			<div className="flex justify-between w-3/4 text-white mt-2">
				<span>
					Bet <span className="text-yellow-400">50</span> Scatter → Scatter
				</span>
				<span>
					Bet <span className="text-yellow-400">10</span> unlock{" "}
					<span className="text-red-500">10x</span>
				</span>
			</div>

			{/* Game Section */}
			<div className="flex items-center mt-4">
				<SpinningWheel />
				<SlotReels />
			</div>

			{/* Controls */}
			<Controls />
		</div>
	);
};

export default SlotMachine;
