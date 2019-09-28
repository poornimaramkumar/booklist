import React, { useState } from 'react';
import uuid from 'uuid/v1';

const SongList = () => {
	const [songs, setSong] = useState([
		{ title: 'Twinke Twinkle', id: 1 },
		{ title: 'Baa Baa', id: 2 },
		{ title: 'Sharing is Caring', id: 3 }
	])
	const addSong = () => {
		setSong([...songs, { title: 'Row Row', id: uuid() }])
	}
	return (
		<div className="song-list">
			<ul>
				{ songs.map(song => {
					return (<li key={song.id}>{ song.title }</li>)
				}) }
			</ul>
			<button onClick={ addSong }>Add a Song</button>
		</div>
	);
}

export default SongList;