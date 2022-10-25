import { datos } from './data.js';

var itemNuevo = document.getElementById("agregar-item-nuevo");
var itemProgreso = document.getElementById("agregar-item-progreso");
var itemfaltante = document.getElementById("agregar-item-faltante");
var itemfinalizado = document.getElementById("agregar-item-finalizado");
var dat = datos;
var objincidencia = [];
var borde;
var textocolor;
var valor = "";

var asignar = (datos) => {
     for (var i = 0; i <= datos.length; i++) {

          if (datos[i]?.estado == "Nueva") {
               borde = "border-primary";
               textocolor = "badge bg-primary text-wrap";
               itemNuevo.innerHTML += `<div class="card ${borde} mb-1" style="width: 19rem;">
               <div class="card-body">
                    <div class"position-relative">
                         <div class="position-absolute top-0 end-0">
                              <a href="#" class:"margen-id fs-5"><p class:"fs-3>${datos[i].id}</p></a>
                         </div>          
                    </div>       
               <h5 class="card-title mt-3">${datos[i].titulo}</h5>                                                       
                    <h6 class="card-subtitle mb-2 text-muted"><img src="https://cdn-icons-png.flaticon.com/512/17/17004.png" id="icono" alt="..." class="img-circle"> ${datos[i].usuarioAsignado}</h6>                             
                    <p class="card-text ${textocolor} mt-2">${datos[i].estado}</p>   
                    <p class="card-link mt-2">${datos[i].usuarioIncidencia}</a>
                    <p class="mt-2">${datos[i].fechaCreacion}</a> 
               </div>                           
          </div>`;
          } else if (datos[i]?.estado == "Finalizada") {
               borde = "border-success";
               textocolor = "badge bg-success text-wrap";
               itemfinalizado.innerHTML += `<div class="card ${borde} mb-1" style="width: 19rem;">
               <div class="card-body">
                    <div class"position-relative">
                         <div class="position-absolute top-0 end-0">
                              <a href="#" class:"margen-id fs-5"><p class:"fs-3>${datos[i].id}</p></a>
                         </div>          
                    </div>       
               <h5 class="card-title mt-3">${datos[i].titulo}</h5>                                                       
                    <h6 class="card-subtitle mb-2 text-muted"><img src="https://cdn-icons-png.flaticon.com/512/17/17004.png" id="icono" alt="..." class="img-circle"> ${datos[i].usuarioAsignado}</h6>                             
                    <p class="card-text ${textocolor} mt-2">${datos[i].estado}</p>   
                    <p class="card-link mt-2">${datos[i].usuarioIncidencia}</a>
                    <p class="mt-2">${datos[i].fechaCreacion}</a> 
               </div>                           
          </div>`;
          } else if (datos[i]?.estado == "Progreso") {
               borde = "border-warning";
               textocolor = "badge bg-warning text-wrap";
               itemProgreso.innerHTML += `<div class="card ${borde} mb-1" style="width: 19rem;">
               <div class="card-body">
                    <div class"position-relative">
                         <div class="position-absolute top-0 end-0">
                              <a href="#" class:"margen-id fs-5"><p class:"fs-3>${datos[i].id}</p></a>
                         </div>          
                    </div>       
               <h5 class="card-title mt-3">${datos[i].titulo}</h5>                                                       
                    <h6 class="card-subtitle mb-2 text-muted"><img src="https://cdn-icons-png.flaticon.com/512/17/17004.png" id="icono" alt="..." class="img-circle"> ${datos[i].usuarioAsignado}</h6>                             
                    <p class="card-text ${textocolor} mt-2">${datos[i].estado}</p>   
                    <p class="card-link mt-2">${datos[i].usuarioIncidencia}</a>
                    <p class="mt-2">${datos[i].fechaCreacion}</a> 
               </div>                           
          </div>`;
          } else if (datos[i]?.estado == "Faltan Datos") {
               borde = "border-danger";
               textocolor = "badge bg-danger text-wrap";
               itemfaltante.innerHTML += `<div class="card ${borde} mb-1" style="width: 19rem;">
               <div class="card-body">
                    <div class"position-relative">
                         <div class="position-absolute top-0 end-0">
                              <a href="#" class:"margen-id fs-5"><p class:"fs-3>${datos[i].id}</p></a>
                         </div>          
                    </div>       
               <h5 class="card-title mt-3">${datos[i].titulo}</h5>                                                       
                    <h6 class="card-subtitle mb-2 text-muted"><img src="https://cdn-icons-png.flaticon.com/512/17/17004.png" id="icono" alt="..." class="img-circle"> ${datos[i].usuarioAsignado}</h6>                             
                    <p class="card-text ${textocolor} mt-2">${datos[i].estado}</p>   
                    <p class="card-link mt-2">${datos[i].usuarioIncidencia}</a>
                    <p class="mt-2">${datos[i].fechaCreacion}</a> 
               </div>                           
          </div>`;
          }
     }

}

asignar(dat);


var button = document.getElementById("button-addon2")
button.addEventListener("click", filtrado);

function filtrado() {

     valor = document.getElementById("filtro-incidencia").value;


     console.log(valor);

     datos.map((d) => {

          if (valor != "") {

               if (d.id == valor) {
                    limpiar();
                    objincidencia.push(d);
                    dat = objincidencia;
                    asignar(dat);

               } else if (d.usuarioAsignado == valor) {
                    limpiar();
                    objincidencia.push(d);
                    dat = objincidencia;
                    asignar(dat);

               } else if (d.titulo == valor) {
                    limpiar();
                    objincidencia.push(d);
                    dat = objincidencia;
                    asignar(dat);

               } else if (d.usuarioIncidencia == valor) {
                    limpiar();
                    objincidencia.push(d);
                    dat = objincidencia;
                    asignar(dat);

               }
          } else {

               limpiar();
               valor = "";
               asignar(datos);
          }
     });

}

var limpiar = () => {
     dat = [];
     itemNuevo.innerHTML = "";
     itemProgreso.innerHTML = "";
     itemfaltante.innerHTML = "";
     itemfinalizado.innerHTML = "";


}







