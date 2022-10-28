// An array containing numbers
	const numberArray = [0, 1, 2, 3];

	// An array containing different data types
	const mixedArray = [1, 'chicken', false];

	console.log(mixedArray[1]);

	
	function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
        }
  	};
  	xhttp.open("GET", "/error", true);
  	xhttp.send();
	}

	console.log("js.scripts running");

	function myMathsFunction()
	{
	let x, y, z;    
	x = 9;         
	y = 123;         
	z = x * y;
	output = z + " " + "Redirected to another page using javascript"
	document.write(output);
	}

	function myFunctionRevert() 

	{

		const btn = document.getElementById('button1');


		btn.addEventListener('click', function handleClick() 

		{
  			const initialText = 'Click me';
			
  			if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) 
			{
   			btn.textContent = 'Button clicked';
			
  			} 
			else 
			{
    			btn.textContent = initialText;
			
  			}
		});
	}
	



