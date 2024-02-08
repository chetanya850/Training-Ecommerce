const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let Odd = 0
let Even = 0
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) Odd = Odd + arr[i]
  else if (arr[i] % 2 === 0) Even = Even + arr[i]
}

console.log(Odd * arr.length, Even * arr.length)
