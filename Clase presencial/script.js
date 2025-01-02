const flightForm = document.getElementById("flightForm");
flightForm.addEventListener("submit",(even)=>{
    event.preventDefault(); //Cuando le dé click no quiero que me refresque la pantalla

    //obtener datos del formulario
    const flightNumber= document.getElementById("flightNumber").value;
    const destination=document.getElementById("destination").value;
    const date= document.getElementById("date").value;

    //crear un objeto vuelo
    const flight ={flightNumber, destination, date};

    //guardar en local Storage
    let flights = JSON.parse(localStorage.getItem("flights")) || [];
    flights.push(flight);
    localStorage.setItem("flights", JSON.stringify(flights));

    //Limpiar el formulario
    flightForm.reset();
    alert("Vuelo registrado con éxito.");
});

//Mostrar los vuelos en la página de vuelos.html
    if(window.location.pathname.includes("vuelos.html")){
        const flightCards =document.getElementById("flightCards");
        const flights = JSON.parse(localStorage.getItem("flights")) || [];

        flights.forEach((flight) =>{
            const card = document.createElement("div");
            card.className="card";
            card.innerHTML=`
            <h3>${flight.flightNumber}</h3>
            <p>Destino: ${flight.destination}</p>
            <p>Fecha: ${flight.date}</p>`
            })
    }