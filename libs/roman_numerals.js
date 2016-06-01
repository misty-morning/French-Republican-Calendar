 function basedigit(x) { //Convert base digit 1,5,10,50,100,500,1000 to Rom digit
	 var y
	 switch (x) {
		 case 1:
			 y = "I"
			 break
		 case 5:
			 y = "V"
			 break
		 case 10:
			 y = "X"
			 break
		 case 50:
			 y = "L"
			 break
		 case 100:
			 y = "C"
			 break
		 case 500:
			 y = "D"
			 break
		 case 1000:
			 y = "M"
			 break
		 default:
			 y = "I dont know"
	 } //switch
	 return (y)
 }

 function isInteger(s) { // (C) http://surf11.com/entry/157/javascript-isinteger-function
	 return (s.toString().search(/^-?[0-9]+$/) == 0);
 }

 function digconvert(x) //Convert Digit between 1 and 3,999,999
 {
	 var tmp = ""
	 var base = 0

	 if (((x < 0) || (x > 3999999)) || (!isInteger(x)))
		 return ("err")
	 else
		 while (x > 0) {
			 if ((x >= 1) && (x <= 9))
				 base = 1
			 else
			 if ((x >= 10) && (x <= 99))
				 base = 10
			 else
			 if ((x >= 100) && (x <= 999))
				 base = 100
			 else
			 if ((x >= 1000) && (x <= 3999))
				 base = 1000
				 //experimental
			 else
			 if (x >= 4000) {
				 temp = (x - x % 1000) / 1000 //как делать round я не знаю =)
				 tmp2 = digconvert(temp)
				 base = 100
				 tmp = tmp2 + "&"
				 x = x - (x - x % 1000) //Точно такая же проблема 
			 } else
				 return ('err') //если что-то совсем страшное
					 //end
			 if (x >= 9 * base) {
				 tmp = tmp + basedigit(base) + basedigit(base * 10)
				 x = x - 9 * base
			 } else
			 if (x >= 5 * base) {
				 tmp = tmp + basedigit(5 * base)
				 x = x - 5 * base
			 } else
			 if (x >= 4 * base) {
				 tmp = tmp + basedigit(base) + basedigit(5 * base)
				 x = x - 4 * base
			 }
			 while (x >= base) {
				 tmp = tmp + basedigit(base)
				 x = x - base
			 }
		 }
	 return (tmp)
 }

 function convert() {
	 var x = (digconvert(Number(document.getElementById('dsource').value)))
	 var z = new Array()
	 z = x.split('&')
	 if (x == 'err')
		 document.getElementById('test').innerHTML = 'Parse error'
	 else
	 if (z.length == 1)
		 document.getElementById('test').innerHTML = z[0]
	 else
		 document.getElementById('test').innerHTML = '<span style="text-decoration:overline;">' + z[0] + '</span>' + z[1]
 }
