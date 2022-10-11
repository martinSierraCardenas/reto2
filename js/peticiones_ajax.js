function limpiar_formulario(){
	if (confirm("Esta seguro que desea limpiar el formulario?")){
		var campoTexto = document.getElementById("codigo");
		var divResultado = document.getElementById("Resultado");
		campoTexto.value = "";
		divResultado.innerHTML = ""
	}
}

//funcion consultar todos los registros
function consultar_todo(){
    $.ajax({
        url:"https://g74edfe445dc0c6-hyzbslm3mvxjk5wt.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/open-api-catalog/cabin/",
        type:"GET",
        datatype:"json",
		
		error: function(xhr, status){
			alert('ha ocurrido un problema, intentalo nuevamente, ' + xhr.status);
		},
		
		complete: function(xhr, status){
			alert('Resultado de comprobacion: exitosa ' + xhr.status);
		},	
		
        success:function(json){
            //console.log(respuesta);
            //crearRespuestaGastos(respuesta.items)
			
			$("#resultado").empty();
			tabla = "<center> <table border='1'> <tr> <th>ID:</th> <th>NOMBRE:</th> <th>FECHA:</th> <th>PRECIO</th> <th>DESCRIPCION</th> <th>USUARIO</th> </tr> </tr>"
			total = 0;
			filas = ""
			for (i=0; i<json.items.length; i++){
				filas += "<tr>";
				filas += "<td>" + json.items[i].id + "</td>";
				filas += "<td>" + json.items[i].brand + "</td>";
				filas += "<td>" + json.items[i].rooms + "</td>";
				filas += "<td>" + json.items[i].category_id + "</td>";
				filas += "<td>" + json.items[i].name + "</td>";
				total += json.items[1].valor
			)
			$("#resultado").append(tabla + filas + "<tr><th colspan='2'TOTAL:<td>$" + total + ""</center>)
			console.log(json)
		}
			filas += "</table>"
			$("#resultado").append(tabla + filas + "<tr><th colspan='2'>TOTAL:<td>$" + total + "</center>")
			console.log(json)
			
			
        }

    });
} 	

Function validarCampo(campoTexto){
	if(campoTexo.val() != ""){
		return true;
	}
	else{
		return false;
	}
}

Function limpiarFormularioAgregar(){
	$("#id").val("");
	$("#brand").val("");
	$("#rooms").val("");
	$("#category_id").val("");
	$("#name").val("");
}