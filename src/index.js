module.exports = function toReadable (number) {
  let first = 0, second = 0, third = 0;
	let arr = String(number).split('');
  let answer;
  let obj = {
  	1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    0: ''
  };
  if (number == 0) {answer = 'zero'; return answer;}
  if (number < 21) {answer = obj[number]; return answer;}
	for (let i=0; i<arr.length; i++) {
		first = +(arr[0]);
  	second = +(arr[1]);
  	third = +(arr[2]);
		}
	if (number > 99 & (+(arr[1]+arr[2])) > 19 & number%10 !== 0) {
  answer = obj[first] + ' hundred ' + obj[(second*10)] + ' ' + obj[third];
  }
  if (number > 99 & (+(arr[1]+arr[2])) > 19 & number%10 == 0) {
  answer = obj[first] + ' hundred ' + obj[(second*10)];
  }
  if (number > 99 & (+(arr[1]+arr[2])) < 20 & number%100 !==0) {
  answer = obj[first] + ' hundred ' + obj[+(arr[1]+arr[2])]
  }
  if (number > 99 & (+(arr[1]+arr[2])) < 20 & number%100 ==0) {
  answer = obj[first] + ' hundred';
  }
  if (number < 100 & number%10 !== 0) {
  answer = obj[(first*10)] + ' ' + obj[second];
  }
  if (number < 100 & number%10 == 0) {
  answer = obj[(first*10)];
  }
  return answer;
}
