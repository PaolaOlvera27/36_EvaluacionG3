/*INICIO
Repetir 3 veces
Escriba: Eres el turno 1, elige piedra, papel o tijera
Lea: turno1
Escriba: Eres el turno 2, elige piedra, papel o tijera
Lea: turno2
Sí turno1 = turno2
entonces Escriba: Empataron
sí no, sí ....
FIN */
var i = 1;
for (var i = 1; i <= 3; i++) {
	var turno1 = prompt ("Eres el Turno 1, elige piedra, papel o tijera");
	var turno2 = prompt ("Eres el Turno 2, elige piedra, papel o tijera");
	if (turno1 === turno2){
	alert ("Empataron :p");
	}
	else if (turno1 === piedra && turno2 === tijera)  {
		alert ("el ganador es el turno 1");
	}
	else if (turno1 === piedra && turno2 === papel){
		alert ("El ganador es el turno 2");
	}	
}
