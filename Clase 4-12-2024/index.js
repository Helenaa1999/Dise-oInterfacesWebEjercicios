function comprobarCampoVacio(){
    let nombre= document.getElementById("nombreCliente").value;
    if(nombre==""){
        alert("Campo del nombre vacío.")
    }
}

document.getElementById("carForm").addEventListener("submit", function(event){
    event.preventDefault();
    const nombre= document.getElementById("nombreCliente").value;
    const comentarios = document.getElementById("comentariosCliente").value;
    const caracteristicasAdicionales= Array.from(document.querySelectorAll("input[type='checkbox']:checked")).map(caracteristica=>caracteristica.value);
    const tipoCoche= document.querySelector('input[name="tipoCoche"]:checked')?.value ||'No seleccionado';
    if(nombre && comentarios && caracteristicasAdicionales && tipoCoche){
        let objeto =  [];
        objeto= {nombre:nombre, comentarios:comentarios, caracteristicasAdicionales:caracteristicasAdicionales, tipoCoche:tipoCoche};
        console.log(objeto);
    }
})
