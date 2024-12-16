// cargar y leer el archivo JSON
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const infoDiv = document.getElementById('info');

        // recorrer y mostrar los datos
        data.forEach(item => {
            const div = document.createElement('div');
            div.className = 'data-item bg-blue-400 my-5 p-5 rounded-xl hover:bg-blue-300 transition ';

            const timestamp = item.timestamp ? `<p><strong>Tiempo:</strong> ${item.timestamp}</p>`: '';
            const frequency = item.frequency ? `<p><strong>Frecuencia:</strong> ${item.frequency}</p>`: '';
            const flowRate =  item.flowRate ? `<p><strong>Flujo de agua (minuto):</strong> ${item.flowRate}</p>`:'';
            const flowRateHourly = item.flowRateHourly ? `<p><strong>Flujo de agua (hora):</strong> ${item.flowRateHourly}</p>`:'';

            div.innerHTML = `${timestamp}${frequency}${flowRate}${flowRateHourly}`;

            infoDiv.appendChild(div);
        });
    })
    .catch(error => console.error('error al leer el archivo JSON:', error));