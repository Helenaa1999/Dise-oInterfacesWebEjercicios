
document.getElementById("carForm").addEventListener('submit', function(event){
    event.preventDefault(); //Para evitar que cuando demos al click no nos elimine todo.
    const brand =document.getElementById('carBrand').value;
    const model =document.getElementById('carModel').value;
    const year =document.getElementById('carYear').value;
    const color =document.getElementById('carColor').value;
    const fuel =document.getElementById('carFuel').value;
    const price=document.getElementById('carPrice').value;
    const textArea =document.getElementById('carTextArea').value;
    const budget= document.getElementById('carBudget').value;
    const file = document.getElementById('formFile').value;
    const segundaMano=document.querySelector('input[name="segundaMano"]:checked').value;
    const ciudad=document.getElementById('carCiudad').value;
    const consentimiento = document.getElementById('carConsentimiento').value;
    
    isNum =function(num){
        if(isNaN(num)){
            return false;
        } else {
            return true;
        }
    }

    //funcion para eliminar el coche
    removeCar= function(button){
        const carItem=button.closest('li');
        carItem.remove();  
    }

    if(brand && model && year && color || fuel && price|| textArea && budget && file || ciudad && segundaMano &&consentimiento){
        
        if(!isNum(year)) {
            alert("Año no válido. Tiene que escribir un número");
        } else if (!isNum(price)) {
            alert("Precio no válido. Tiene que escribir un número");
        } else {
            const li= document.createElement('li');
            li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
            
            li.innerHTML= `${brand} ${model} ${year} ${color} ${fuel} ${price} ${textArea} ${budget} ${file}
            <button class="btn btn-danger btn-sm" onclick='removeCar(this)'>Eliminar</button>`;
            //agregar el coche a la lista
            document.getElementById('carList').appendChild(li);
            document.getElementById('carForm').reset();
        }
    }   
});

