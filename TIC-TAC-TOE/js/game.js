var store=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
	var count=0;
	document.getElementById("play").onclick=function(){
		document.getElementById("play").disabled=true;
		document.getElementById("gameArea").setAttribute("style","visibility:visible");
		if(document.getElementById("player1").value!='')
			document.getElementById("play1").innerHTML=document.getElementById("player1").value
		if(document.getElementById("player2").value!='')
			document.getElementById("play2").innerHTML=document.getElementById("player2").value;
		document.getElementById("player1").value='';
		document.getElementById("player2").value='';
	}
		document.getElementById("1").onclick=function(event){
			count++;
			if(store[event.target.id-1]==-1)
			{
				store[event.target.id-1]=count%2;
				drawtext(event.target.id);
			}
			else
				count--;
		}
		document.getElementById("2").onclick=function(event){
				count++;
			if(store[event.target.id-1]==-1)
			{
				store[event.target.id-1]=count%2;
				drawtext(event.target.id);
			}
			else
				count--;
		}
		document.getElementById("3").onclick=function(event){
					count++;
			if(store[event.target.id-1]==-1)
			{
				store[event.target.id-1]=count%2;
				drawtext(event.target.id);
			}
			else
				count--;
		}
		document.getElementById("4").onclick=function(event){
						count++;
			if(store[event.target.id-1]==-1)
			{
				store[event.target.id-1]=count%2;
				drawtext(event.target.id);
			}
			else
				count--;
		}
		document.getElementById("5").onclick=function(event){
							count++;
			if(store[event.target.id-1]==-1)
			{
				store[event.target.id-1]=count%2;
				drawtext(event.target.id);
			}
			else
				count--;
		}
		document.getElementById("6").onclick=function(event){
								count++;
			if(store[event.target.id-1]==-1)
			{
				store[event.target.id-1]=count%2;
				drawtext(event.target.id);
			}
			else
				count--;
		}
		document.getElementById("7").onclick=function(event){
									count++;
			if(store[event.target.id-1]==-1)
			{
				store[event.target.id-1]=count%2;
				drawtext(event.target.id);
			}
			else
				count--;
		}
		document.getElementById("8").onclick=function(event){
										count++;
			if(store[event.target.id-1]==-1)
			{
				store[event.target.id-1]=count%2;
				drawtext(event.target.id);
			}
			else
				count--;
		}
		document.getElementById("9").onclick=function(event){
			count++;
			if(store[event.target.id-1]==-1)
			{
				store[event.target.id-1]=count%2;
				drawtext(event.target.id);
			}
			else
				count--;
		}

	function drawtext(i){
		var canvas=document.getElementById(i);
		var ctx = canvas.getContext("2d");
		ctx.font = "200px Arial";
		ctx.textAlign='center';
		if(count%2==1)
		ctx.fillText("X", canvas.width/2, canvas.height);
		else
		ctx.fillText("O", canvas.width/2, canvas.height);
		if(check()){
			alert("GameOver");
		document.getElementById("gameArea").setAttribute("style","visibility:hidden");
		}
		if(anyoneWon()){
			if(count%2==1)
			alert(document.getElementById("play1").innerHTML+" Won!!!");
			else
			alert(document.getElementById("play2").innerHTML+" Won!!!");
			document.getElementById("gameArea").setAttribute("style","visibility:hidden");
//			for(var i=1;i<=9;i++)
//				{
//				 var tempcan=document.getElementById(i);
//				 var context=canvas.getContext("2d");
//				context.clearRect(0,0,canvas.width,canvas.height);
//				}
//			store=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
//			count=0;
//			document.getElementById("play").disabled=false;
		}
	}
	
	function anyoneWon(){
		if(store[0]==store[1] && store[1]==store[2] && store[1]!=-1)
        return  1;
    else if(store[3]==store[4] && store[5]==store[4] && store[4]!=-1)
        return  1;
    else if(store[6]==store[7] && store[8]==store[7] && store[7]!=-1)
        return  1;
    else if(store[0]==store[3] && store[3]==store[6] && store[3]!=-1)
        return  1;
    else if(store[1]==store[4] && store[4]==store[7] && store[4]!=-1)
        return  1;
    else if(store[2]==store[5] && store[5]==store[8] && store[5]!=-1)
        return  1;
    else if(store[0]==store[4] && store[4]==store[8] && store[4]!=-1)
        return  1;
    else if(store[2]==store[4] && store[4]==store[6] && store[4]!=-1)
        return  1;
	else 
		return 0;
	}

	function check(){
		for(var i=0;i<9;i++)
			if(store[i]==-1)
				return false;
		return true;
	}