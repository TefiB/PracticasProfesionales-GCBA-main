import { datos } from './data.js';

var dato = document.getElementById("estadistica");
var nueva = 0;
var finalizada = 0;
var progreso = 0;
var faltante = 0;
var nuevaprom = 0;
var finalizadaprom = 0;
var progresoprom = 0;
var faltanteprom = 0;


datos.map((d) => {

    if (d.estado == "Nueva") {
        nueva++;
    } else if (d.estado == "Finalizada") {
        finalizada++;
    } else if (d.estado == "Progreso") {
        progreso++;
    } else if (d.estado == "Faltan Datos") {
        faltante++;
    }
});

nuevaprom = (nueva * 100) / datos.length; 
finalizadaprom = (finalizada * 100) / datos.length; 
progresoprom = (progreso * 100) / datos.length; 
faltanteprom = (faltante * 100) / datos.length; 

dato.innerHTML += `<p class="fs-3 text">Nuevas Total: ${nueva} ${parseInt(nuevaprom)}%</p>
<div class="progress">
    <div class="progress-bar progress-bar-striped" role="progressbar" aria-label="Default striped example"
        style="width: ${nuevaprom}%" aria-valuenow="${nuevaprom}" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p class="fs-3 text">Finalizadas Total: ${finalizada} ${parseInt(finalizadaprom)}%</p>
<div class="progress">
    <div class="progress-bar progress-bar-striped bg-success" role="progressbar"
        aria-label="Success striped example" style="width: ${finalizadaprom}%" aria-valuenow="${finalizadaprom}" aria-valuemin="0"
        aria-valuemax="100"></div>
</div>
<p class="fs-3 text">En progreso Total: ${progreso} ${parseInt(progresoprom)}%</p>
<div class="progress">
    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar"
        aria-label="Warning striped example" style="width: ${progresoprom}%" aria-valuenow="${progresoprom}" aria-valuemin="0"
        aria-valuemax="100"></div>
</div>
<p class="fs-3 text">Faltante de datos Total: ${faltante} ${parseInt(faltanteprom)}%</p>
<div class="progress">
    <div class="progress-bar progress-bar-striped bg-danger" role="progressbar"
        aria-label="Danger striped example" style="width: ${faltanteprom}%" aria-valuenow="${faltanteprom}" aria-valuemin="0"
        aria-valuemax="100"></div>
</div>
`;

