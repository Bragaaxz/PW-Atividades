

		let	peso = 72 
		let alt = 190
		let  imc = peso/(alt*alt);
		if ( imc <18.5) {
			console.log ("Excesso de magreza : " + imc);
		}else if (imc <25) {
			console.log ("Peso normal : " + imc);
		}else if (imc <30) {
			console.log("Excesso de peso : " + imc);
		}else if (imc <35)	{
			console.log("Obesidade (Grau 1) :" + imc);
		}else if (imc <40) {
			console.log("Obesidade (Grau 2) :" + imc);
		}else {
			console.log("Obesidade (Grau 3) :" + imc);
		}
	
