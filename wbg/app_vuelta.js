const busTimes = [
    { time: "0540", type: "p" },  
    { time: "0600", type: "v" },  
    { time: "0630", type: "p" },  
    { time: "0645", type: "px" },  
    { time: "0645", type: "a" },  
    { time: "0700", type: "v" },  
    { time: "0715", type: "p" },  
    { time: "0745", type: "px" },  
    { time: "0750", type: "v" },  
    { time: "0900", type: "v" },  
    { time: "0900", type: "px" },  
    { time: "1000", type: "v" },  
    { time: "1100", type: "v" },  
    { time: "1200", type: "v" },  
    { time: "1300", type: "v" },  
    { time: "1400", type: "v" },  
    { time: "1500", type: "v" },  
    { time: "1530", type: "p" },  
    { time: "1600", type: "v" },  
    { time: "1600", type: "px" },  
    { time: "1700", type: "v" },  
    { time: "1700", type: "px" },  
    { time: "1800", type: "v" },  
    { time: "1900", type: "v" },  
    { time: "2000", type: "v" },  
    { time: "2100", type: "v" },  
    { time: "2140", type: "v" },  
    { time: "2245", type: "i" },
];

function timeUntilBuses(busTimes) {
    // Obtén la hora actual
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    
    // Definir mapeo de descripciones según el tipo de servicio
    const descriptions = {
        'p': '\nPedrezuela',
        'v': '',
        'a': '\nEst. Alc-S.S Reyes',
        'px': '\nServicio express',
        'i': '\nLlega a superficie'
    };
    
    // Función auxiliar para convertir "hhmm" a minutos desde la medianoche
    function timeStringToMinutes(timeString) {
        const hours = parseInt(timeString.slice(0, 2), 10);
        const minutes = parseInt(timeString.slice(2, 4), 10);
        return hours * 60 + minutes;
    }

    // Función para calcular el tiempo faltante y ajustar por tipo de servicio
    function minutesUntil(timeString, type) {
        const busMinutes = timeStringToMinutes(timeString);
        let diff = busMinutes - currentMinutes;
        
        // Ajuste por tipo de servicio
        switch (type) {
            case 'v':
            case 'a':
                diff += 8; // Añadir 8 minutos si es desde El Vellón o Alcobendas FFCC
                break;
            default:
                break;
        }
        
        if (diff < 0) {
            diff += 24 * 60; // Añade 24 horas en minutos si el tiempo ya pasó hoy
        }
        return diff;
    }

    // Función para formatear la hora con la descripción según el tipo
    function formatTimeString(busTimeObj) {
        const time = busTimeObj.time;
        const type = busTimeObj.type;
        const hours = time.slice(0, 2);
        const minutes = time.slice(2, 4);
        const description = descriptions[type] || '';
        return `${hours}:${minutes} ${description}`;
    }

    // Función para formatear el tiempo faltante
    function formatMinutes(minutes) {
        if (minutes >= 60) {
            const hours = Math.floor(minutes / 60);
            const mins = minutes % 60;
            return `${hours}h ${mins}min`;
        } else {
            return `${minutes}m`;
        }
    }

    // Calcula el tiempo faltante para cada bus y aplica descripciones
    const busTimesWithWait = busTimes.map(busTime => ({
        busTime: formatTimeString(busTime),
        timeUntilMinutes: minutesUntil(busTime.time, busTime.type)
    }));

    // Ordena por tiempo faltante y selecciona los 3 primeros
    const nextThreeBuses = busTimesWithWait.sort((a, b) => a.timeUntilMinutes - b.timeUntilMinutes).slice(0, 5);

    // Formatea el tiempo en formato requerido, incluyendo la descripción
    return nextThreeBuses.map(bus => ({
        busTime: bus.busTime,
        timeUntil: formatMinutes(bus.timeUntilMinutes),
        typeDescription: descriptions[bus.type] || '' // Descripción adicional del tipo de servicio
    }));
}


function changeText(id, newText, type) {
    // Obtén el elemento <p> por su id
    const paragraph = document.getElementById(id);

    // Verifica si el elemento existe
    if (paragraph && type == 1) {
        // Cambia el texto del elemento
        paragraph.innerHTML = `<b>${newText.slice(0,5)}</b>`;
    } else if (paragraph && type == 2) {
        paragraph.innerHTML = `${newText.slice(7)}`
    } 
    
    else if (paragraph) {
        paragraph.innerText = newText
    } 
    else {
        console.error(`Element with id "${id}" not found.`);
    }
}


const timesUntilBuses = timeUntilBuses(busTimes);
console.log(timesUntilBuses);

changeText("nb1", timesUntilBuses[0].busTime, 1)
changeText("nbl1", timesUntilBuses[0].busTime, 2)
changeText("tl1", timesUntilBuses[0].timeUntil)

changeText("nb2", timesUntilBuses[1].busTime, 1)
changeText("nbl2", timesUntilBuses[1].busTime, 2)
changeText("tl2", timesUntilBuses[1].timeUntil)

changeText("nb3", timesUntilBuses[2].busTime, 1)
changeText("nbl3", timesUntilBuses[2].busTime, 2)
changeText("tl3", timesUntilBuses[2].timeUntil)

changeText("nb4", timesUntilBuses[3].busTime, 1)
changeText("nbl4", timesUntilBuses[3].busTime, 2)
changeText("tl4", timesUntilBuses[3].timeUntil)

changeText("nb5", timesUntilBuses[4].busTime, 1)
changeText("nbl5", timesUntilBuses[4].busTime, 2)
changeText("tl5", timesUntilBuses[4].timeUntil)
