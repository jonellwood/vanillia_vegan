function displayWorkouts(data) {
	console.log(data);

	// Sort the data by date (newest to oldest)
	data.sort((a, b) => new Date(b.date) - new Date(a.date));

	const container = document.getElementById('workout-container');
	container.innerHTML = '';

	// Create the table and its header
	const table = document.createElement('table');
	table.classList.add('workout-table');
	const thead = document.createElement('thead');
	thead.innerHTML = `
        <tr>
            <th>Date</th>
            <th>Distance</th>
            <th>Duration</th>
            <th>Weather</th>
            <th>Temp</th>
        </tr>
    `;
	table.appendChild(thead);

	// Create the table body
	const tbody = document.createElement('tbody');
	data.forEach((workout) => {
		const row = document.createElement('tr');
		row.innerHTML = `
            <td>${workout.date}</td>
            <td>${workout.distance}</td>
            <td>${workout.duration}</td>
            <td>
                <img src="/weatherIcons/${workout.weatherdesc}.svg" alt="${workout.weatherdesc}" class="workout-image">
                
            </td>
            <td>${workout.weather}</td>
        `;
		tbody.appendChild(row);
	});
	table.appendChild(tbody);

	// Append the table to the container
	container.appendChild(table);
}

async function getWorkouts() {
	const response = await fetch('/data/runlist.json');
	const data = await response.json();
	displayWorkouts(data);
}
