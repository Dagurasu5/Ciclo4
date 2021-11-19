

const obtenerCitasDisponibles=(especialidad,fecha_inicio,fecha_final)=>{
    return CITAS.filter(element=> (
        especialidad === element.especialidad 
        &&
        element.fecha >= fecha_inicio 
        &&
        element.fecha <= fecha_final
        ));
        
}
const obtenerCitasPorJornada=(especialidad,fecha_inicio,fecha_final,jornadaPreferida)=>{
    let resultados=obtenerCitasDisponibles(especialidad,fecha_inicio,fecha_final);
    return resultados.filter(element=> (
        
        (jornadaPreferida=="mañana" && element.hora.split(":")[0] >=8 && element.hora.split(":")[0]<= 12) || 
        (jornadaPreferida=="tarde" && element.hora.split(":")[0]>=13 && element.hora.split(":")[0]<=17)

    ));

}

module.exports.obtenerCitasDisponibles=obtenerCitasDisponibles;
module.exports.obtenerCitasPorJornada=obtenerCitasPorJornada;

