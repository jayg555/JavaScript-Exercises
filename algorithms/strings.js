//----------Repeated Strings----------//
function repeatedString(s, n) {
  
	let c = 0,
		ca = 0,
		r = n % s.length
  
	for (let i = s.length; i-- > 0;) {
	  if (s.charAt(i) == 'a') {
		++c
  
		if (i < r)
		  ++ca
	  }
	}
  
	return ((n - r) / s.length * c) + ca
  }
  
  
  //abad abad ab
  
  console.log(repeatedString('ababa', 4))
  console.log(repeatedString('abcac', 10))
  console.log(repeatedString('abad', 11))
  console.log(repeatedString('aba', 10))
  console.log(repeatedString('a', 1000000000000))


//----------Repeated Strings( Solution 2)----------//

const solveRepeatedString = (strings,numbers) =>{
	let numberOfAs = 0;

	if (numbers >= strings.length){
		let occurencesOfA = [...strings].filter(e => e === "a").length;

		numberOfAs = Math.floor(n/s.length) * occurencesOfA;
	}

	let tailStringLength = n % s.length;

	for(let i = 0; i < tailStringLength; i++){
		if(s[i] === "a") numberOfAs++;
	}

	return numberOfAs;
}


//------------- Add binary strings----------//

  const str1 = "1010";
const str2 = "1011";

const addBinary = (str1, str2) => {
   let carry = 0;
   const res = [];
   let l1 = str1.length, l2 = str2.length;
   for (let i = l1 - 1, j = l2 - 1; 0 <= i || 0 <= j; --i, --j) {
      let a = 0 <= i ? Number(str1[i]) : 0,
      b = 0 <= j ? Number(str2[j]) : 0;
      res.push((a + b + carry) % 2);
      carry = 1 < a + b + carry;
   };
   if (carry){
      res.push(1);
   }
   return res.reverse().join('');
};
console.log(addBinary(str1, str2));