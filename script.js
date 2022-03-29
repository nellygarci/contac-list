let listaContactos = ["Nelly García  1111", "zahynee Mendoza 2222", "Willy Silva 3333", "Wil Silva 4444"]

/* Funcion imprimir contactos */ 
function imprimirContactos(listaContactos){
   console.log("Lista de Contactos")
    for (i=0;  i < (listaContactos.length); i++)
    {
        
        console.log(i+1 + ".- " + listaContactos[i])
    }
  } 
/* functión añadir nuevo contacto*/
function añadirContacto(contacto)
  {
   let nuevaLongitud = listaContactos.push("Keisbel Ortega 5555555")

  }  
  /* funcion eliminar el ultimo contacto*/
  function eliminarContacto(){
    let ultimo = listaContactos.pop(0)  
}

console.log ("---------------------")
console.log ("lista original") 
console.log ("---------------------") 
imprimirContactos(listaContactos)
añadirContacto()
console.log ("---------------------")
console.log ("Contacto agregado") 
console.log ("---------------------")
imprimirContactos(listaContactos)
eliminarContacto()
console.log ("---------------------")
console.log ("contacto elimiado") 
console.log ("---------------------")
imprimirContactos(listaContactos)

/*
Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres
Crea una función para añadir un nuevo contacto a una lista
Crea una función para borrar un contacto existente de la lista
Crea una función para imprimir en consola los contactos presentes en la lista
Publica tu código en Github, en tu repositorio contact-list crea un branch llamado project-1 y compártelo con nosotros. 👍🏼⬇️
*/