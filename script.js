
    let i = 1;
    let whileLoopResult = '';
    while (i <= 51) {
      if(i<51){
      	whileLoopResult += i + ', ';
  } else{
  	whileLoopResult += i + ' ';
  }
  i+=2;
    }
    document.getElementById('while-loop').innerHTML = whileLoopResult;


    let j = 2;
    let doWhileLoopResult = '';
    do {
  	if (j<50){
  		doWhileLoopResult += j + ', ';
  	}else{
  		doWhileLoopResult += j + ' ';
  }
  j+=2;
    } while (j <= 50);
    document.getElementById('do-while-loop').innerHTML = doWhileLoopResult;


    let k = 1;
    let forLoopResult = '';
    for (let n = 0; k <= 4096; n++) {
      if (k<4096){
      	forLoopResult += k + ', ';
      }else{
      	forLoopResult += k + ' ';
      }
      k *= 2;
    }
    document.getElementById('for-loop').textContent = forLoopResult;
    //hi sir