let arr = ['Apples', 'Oranges', 'Coffee', 'Maroon']
let nums = [1, 2, 3, 4, 5, 6]
let sum = 0
for (let i = 0; i < nums.length; i++){
    const currentNumbers = nums[i]
    sum += currentNumbers
   
}
let total = []
let a = arr.reverse()
for (let i = 0; i < a.length; i++){
    let cut = a[i].split(' , ')
    total.push(cut)
}
// console.log(sum)
// console.log(total)

let nums2 = [10, 20, 30, 40, 50, 60]
let temp = nums2[3]
nums2[3] = nums2[2]
nums2[2]= temp
// console.log(nums2)

let fruits = ['Apples', 'Oranges', 'Coffee', 'Maroon']
let target = 'Coffee'
let foundIndex = -1

for (let i=0; i < fruits.length; i++) {
    const currentFruits = fruits[i]
    if (currentFruits === target) {
        foundIndex = i
    }
}

if(foundIndex > -1) {
    console.log(foundIndex, 'found')
}

const num = [45, 12, 50, 77]
let maxNum = num[0]
let minNum = num[0]
for (let i = 0; i < num.length; i++) {
    const currentNum = num[i]
    if(maxNum < currentNum) {
        maxNum = currentNum
    }
    if(minNum > currentNum){
        minNum = currentNum
    }
}
console.log(maxNum, minNum)