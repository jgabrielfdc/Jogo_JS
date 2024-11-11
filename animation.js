 var canvas = document.getElementById('meu_canvas');
	  var context = canvas.getContext('2d');
	  
	  var x=0;
	  var y=0;
	  var raio = 5;
	
	  var anterior = new Date().getTime();
	  requestAnimationFrame(mexerBola);

	  function mexerBola(){
		var agora = new Date().getTime();
		var decorrido = agora-anterior;
		
		context.clearRect(0,0,canvas.width,canvas.height);

		context.beginPath();
		context.arc(x,y,raio,0,Math.PI*2);
		context.fill();
		var velocidade = 200;
		x+=velocidade*decorrido/1000;
		y+=0.65;

		anterior=agora;
		requestAnimationFrame(mexerBola);
	  }