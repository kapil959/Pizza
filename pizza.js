		var pizza;
		var pizzaCheckCount;
		function loadPizzas(){
			document.getElementById("startBtn").onclick = function() {
     								return false;
   					}
			document.getElementById("startBtn").style.backgroundColor = "lightgrey";
			

			var xmlhttp = new XMLHttpRequest();
			
			xmlhttp.open("GET", "https://raw.githubusercontent.com/kapil959/Pizza/master/pizzas.json", true);
			
			xmlhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					
					var myObj = JSON.parse(this.responseText);
					
					console.log(myObj.pizza);
					
					document.getElementById('pizzasList').style.display='block';
					pizzaCheckCount = new Array(myObj.pizza.length);
					for(i=0;i<myObj.pizza.length;i++){

						document.getElementById('pizzasList').innerHTML +=
						"<span class='fontBlack' id='pizza_"+(i+1)+"'><br>"+
						"<span>"+myObj.pizza[i].name+"</span><br>"+
						"<span class='ingredients'>"+myObj.pizza[i].ingredients+"</span>"+"<br><br>"+
						"<img class='image'  src="+myObj.pizza[i].image+" style=\"padding-right:5em\">"+
						"Rs. "+myObj.pizza[i].price+
						"<span class=\"glyphicon glyphicon-minus pointer\" id='minus_"+(i+1)+"' onclick='addMinus(\"m\","+(i+1)+")' style=\"padding-left:5em\"></span> "+
						"<input type='textbox' id='count_"+(i+1)+"' class='textbox' value=0 readonly></input> "+
						"<span class=\"glyphicon glyphicon-plus pointer\" id='plus_"+(i+1)+"' onclick='addMinus(\"p\","+(i+1)+")'></span>"
						+"<br><br></span>";
						pizzaCheckCount[i] = 0;
					}
					document.getElementById('pizzasList').innerHTML += "<br><a class='btn btn-info checkoutButton' style='display:none;' role='button' id='checkout' onclick='checkoutPizza()'>Checkout</a>";
					pizza = myObj.pizza;
				}
			};
			xmlhttp.send();
		}
		function addMinus(action, c) {
			var count = parseInt(document.getElementById('count_'+c).value);
			if(action == 'p') {
				count++;
			} else if(count != 0) {
				count--;
			}
			document.getElementById('count_'+c).value = count;
			pizzaCheckCount[c-1] = count;
			if(count>0) {
				document.getElementById("checkout").style.display='block';
			}else{
				var flag = 0;
				for(var i=0; i<pizzaCheckCount.length; i++) {
					if(pizzaCheckCount[i] >0) {
						flag = 1;
					}
				}
				if(flag == 0) {
					document.getElementById("checkout").style.display='none';
				}
				
			}
		}
		function checkoutPizza() {
			$(window).scrollTop(0);
			var orderCount = 0;
			var totalOrderAmount = 0;
			document.getElementById('confirmOrder').innerHTML ="<span class='orderText'>Order Summary</span><br><br>"
			for(var i=0; i<pizza.length; i++) {
				if(pizzaCheckCount[i]>0) {
					orderCount+= pizzaCheckCount[i];
					totalOrderAmount += pizza[i].price*pizzaCheckCount[i]
					document.getElementById('confirmOrder').innerHTML +=
					"<span>"+pizza[i].name+": "+pizzaCheckCount[i]+' X '+pizza[i].price+"</span><br><br>";
				}
			document.getElementById('plus_'+(i+1)).style.pointerEvents = 'none';
			document.getElementById('minus_'+(i+1)).style.pointerEvents = 'none';
			}
			document.getElementById('confirmOrder').style.display = 'block';
			document.getElementById('backButton').style.display = 'block';
			document.getElementById('confirmOrder').innerHTML += "<span class='totalText'>Total Amount = " + totalOrderAmount + " Rs</span>"+
				"<br><br><a class='btn btn-success confirmButton' role='button' id='success' onclick='userInfo()'>Confirm </a>";
					document.getElementById("checkout").style.display='none';
		}
		function userInfo(){
			document.getElementById('confirmOrder').style.display = 'none';
			document.getElementById('backButton').style.display = 'none';
			document.getElementById('userInfoDiv').style.display = 'block';
		}
		function showSuccess(){
			var name = document.getElementById('name').value;
			var number = document.getElementById('number').value;
			var flatNumber = document.getElementById('flatNumber').value;
			var society = document.getElementById('society').value;
			var city = document.getElementById('city').value;
			var checkFlag= false;
			if(name==""){
				document.getElementById('error').innerHTML = "Please enter Name";
			}
			else if(number == ""){
				document.getElementById('error').innerHTML = "Please enter Number";
			}
			else if(flatNumber == ""){
				document.getElementById('error').innerHTML = "Please enter Flat number";
			}
			else if(society == ""){
				document.getElementById('error').innerHTML = "Please enter Society/locality";
			}
			else if(city == ""){
				document.getElementById('error').innerHTML = "Please enter city";
			}
			else{
				document.getElementById('container').innerHTML ="<div class='successMessage'><span>Congratulations! Your order has been placed successfully. Order-Id : 63543</span><br>"+
				"<span>Your order will be delivered in  25 minutes</span></div>";
				checkFlag= true;
			}
			if(checkFlag==false){
				document.getElementById('error').style.display="block";
				$(window).scrollTop(0);
			}
		}
		function goBack(){
			for(var i=0; i<pizza.length; i++) {
				document.getElementById('plus_'+(i+1)).style.pointerEvents = 'auto';
				document.getElementById('minus_'+(i+1)).style.pointerEvents = 'auto';
			}
			document.getElementById("checkout").style.display='block';
			document.getElementById('backButton').style.display = 'none';
			document.getElementById('confirmOrder').style.display = 'none';
		}