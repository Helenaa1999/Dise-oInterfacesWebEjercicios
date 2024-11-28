document.getElementById("carForm").addEventListener('submit', function(event){
    event.preventDefault(); //Para evitar que cuando demos al click no nos elimine todo.
    const brand =document.getElementById('carBrand').value;
    const model =document.getElementById('carModel').value;
    const year =document.getElementById('carYear').value;
    const color =document.getElementById('carColor').value;
    const fuel =document.getElementById('carFuel').value;
    const price=document.getElementById('carPrice').value;
    const licensePlate =document.getElementById('carLicensePlate').value;
    const textArea =document.getElementById('carTextArea').value;
    const budget= document.getElementById('carBudget').value;
    const file = document.getElementById('formFile').value;
    //Añadir constante radio
    const ciudad=document.getElementById('carCiudad').value;
    const consentimiento = document.getElementById('carConsentimiento').value;
    
    if(brand && model && year && color || fuel && price && licensePlate && carConsentimiento){
        const li= document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        li.innerHTML- `${brand} ${model} ${year} ${color} ${fuel} ${price} ${licensePlate}
        <button class="btn btn-danger btn-sm" onclick='removeCar(this)'>Eliminar></button>`;
        //agregar el coche a la lista
        document.getElementById('carList').appendChild(li);
        document.getElementById('carForm').reset();

        //funcion para eliminar el coche
        removeCar= function(button){
            const car=button.closest('li');
            carItem.remove();
        }
    }
});