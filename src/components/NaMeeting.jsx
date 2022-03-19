import { useState } from "react";
import meeting from "../meeting/Meeting_20.mp4";
import ReactPlayer from "react-player";
import React from "react";

const Transcript = () => {
	const reactPlayer = React.createRef();

	const [clicked_1, setSwipe_1] = useState(false);
	const [clicked_2, setSwipe_2] = useState(false);
	const [clicked_3, setSwipe_3] = useState(false);
	const [clicked_4, setSwipe_4] = useState(false);
	const [clicked_5, setSwipe_5] = useState(false);
	const [clicked_6, setSwipe_6] = useState(false);

	const onSwipe_1 = () => {
		setSwipe_1(!clicked_1);
		if(!clicked_1) reactPlayer.current.seekTo(0);
	};
	const onSwipe_2 = () => {
		setSwipe_2(!clicked_2);
		if(!clicked_2) reactPlayer.current.seekTo(20);
	};
	const onSwipe_3 = () => {
		setSwipe_3(!clicked_3);
		if(!clicked_3) reactPlayer.current.seekTo(40);
	};
	const onSwipe_4 = () => {
		setSwipe_4(!clicked_4);
		if(!clicked_4) reactPlayer.current.seekTo(60);
	};
	const onSwipe_5 = () => {
		setSwipe_5(!clicked_5);
		if(!clicked_5) reactPlayer.current.seekTo(80);
	};
	const onSwipe_6 = () => {
		setSwipe_6(!clicked_6);
		if(!clicked_6) reactPlayer.current.seekTo(150);
	};

	return (
		<div
			className="flex flex-row min-w-screen min-h-screen bg-gray-100"
			id="NaMeeting-window"
		>
			<div className="flex flex-col w-1/3 justify-center px-4">
				{!clicked_1 ? (
					<li>
						<button className="font-bold" onClick={onSwipe_1}>
							Bullet 1
						</button>
					</li>
				) : (
					<div className="flex flex-col">
						<li>
							<button className="font-bold" onClick={onSwipe_1}>
								Bullet 1
							</button>
						</li>
						<p className="w-full pl-5">Hier komt de tekst van Bullet 1</p>
					</div>
				)}

				{!clicked_2 ? (
					<li>
						<button className="font-bold" onClick={onSwipe_2}>
							Bullet 2
						</button>
					</li>
				) : (
					<div className="flex flex-col">
						<li>
							<button className="font-bold" onClick={onSwipe_2}>
								Bullet 2
							</button>
						</li>
						<p className="w-full pl-5">Hier komt de tekst van Bullet 2</p>
			<p className="w-full pl-5">Hier komt de tekst van Bullet 2</p>
			<p className="w-full pl-5">Hier komt de tekst van Bullet 2</p>
			<p className="w-full pl-5">Hier komt de tekst van Bullet 2</p>
			<p className="w-full pl-5">Hier komt de tekst van Bullet 2</p>
			<p className="w-full pl-5">Hier komt de tekst van Bullet 2</p>
			<p className="w-full pl-5">Hier komt de tekst van Bullet 2</p>
			<p className="w-full pl-5">Hier komt de tekst van Bullet 2</p>
			<p className="w-full pl-5">Hier komt de tekst van Bullet 2</p>
			<p className="w-full pl-5">Hier komt de tekst van Bullet 2</p>
			<p className="w-full pl-5">Hier komt de tekst van Bullet 2</p>
			<p className="w-full pl-5">Hier komt de tekst van Bullet 2</p>
			<p className="w-full pl-5">Hier komt de tekst van Bullet 2</p>
					</div>
				)}

				{!clicked_3 ? (
					<li>
						<button className="font-bold" onClick={onSwipe_3}>
							Bullet 3
						</button>
					</li>
				) : (
					<div className="flex flex-col">
						<li>
							<button className="font-bold" onClick={onSwipe_3}>
								Bullet 3
							</button>
						</li>
						<p className="w-full pl-5">Hier komt de tekst van Bullet 3</p>
					</div>
				)}

				{!clicked_4 ? (
					<li>
						<button className="font-bold" onClick={onSwipe_4}>
							Bullet 4
						</button>
					</li>
				) : (
					<div className="flex flex-col">
						<li>
							<button className="font-bold" onClick={onSwipe_4}>
								Bullet 4
							</button>
						</li>
						<p className="w-full pl-5">Hier komt de tekst van Bullet 4</p>
					</div>
				)}

				{!clicked_5 ? (
					<li>
						<button className="font-bold" onClick={onSwipe_5}>
							Bullet 5
						</button>
					</li>
				) : (
					<div className="flex flex-col">
						<li>
							<button className="font-bold" onClick={onSwipe_5}>
								Bullet 5
							</button>
						</li>
						<p className="w-full pl-5">Hier komt de tekst van Bullet 5</p>
					</div>
				)}

				{!clicked_6 ? (
					<li>
						<button className="font-bold" onClick={onSwipe_6}>
							Bullet 6
						</button>
					</li>
				) : (
					<div className="flex flex-col">
						<li>
							<button className="font-bold" onClick={onSwipe_6}>
								Bullet 6
							</button>
						</li>
						<p className="w-full pl-5">Hier komt de tekst van Bullet 6</p>
					</div>
				)}
			</div>

			<div className="flex items-center pr-10">
				<ReactPlayer className="scale-100" url={meeting} controls="true" ref={reactPlayer} width="auto" height="auto" />
			</div>
		</div>
	);
};

export default Transcript;
