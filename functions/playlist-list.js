function displayPlaylists(data) {
	console.log(data);
	// Get the container where the playlists will be displayed
	const container = document.getElementById('playlist-container');
	container.innerHTML = ''; // Clear any existing content

	// Iterate through each playlist in the JSON object
	Object.keys(data).forEach((playlistName) => {
		// Create a section for the playlist
		const playlistSection = document.createElement('div');
		playlistSection.classList.add('playlist');

		// Add the playlist title
		const playlistTitle = document.createElement('h2');
		playlistTitle.textContent = playlistName;
		playlistSection.appendChild(playlistTitle);

		// Create a list for the songs
		const songList = document.createElement('ul');
		songList.classList.add('song-list');

		// Iterate through the songs in the playlist
		data[playlistName].forEach((song) => {
			// Create a list item for each song
			const songItem = document.createElement('li');
			songItem.classList.add('song');

			// Add the song details
			const songImage = document.createElement('img');
			songImage.src = song.img;
			songImage.alt = `${song.title} by ${song.artist}`;
			songImage.classList.add('song-image');

			const songDetails = document.createElement('div');
			songDetails.classList.add('song-details');

			const songTitle = document.createElement('h3');
			songTitle.textContent = song.title;

			const songArtist = document.createElement('p');
			songArtist.textContent = `by ${song.artist}`;

			// Append song details to the song item
			songDetails.appendChild(songTitle);
			songDetails.appendChild(songArtist);
			songItem.appendChild(songImage);
			songItem.appendChild(songDetails);

			// Append the song item to the song list
			songList.appendChild(songItem);
		});

		// Append the song list to the playlist section
		playlistSection.appendChild(songList);

		// Append the playlist section to the container
		container.appendChild(playlistSection);
	});
}

async function getSongs() {
	const response = await fetch('/data/playlists.json');
	const data = await response.json();
	displayPlaylists(data);
}
