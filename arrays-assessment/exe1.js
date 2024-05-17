//using the data structure below , print a message  my total bill for items above 450 is 1700

const availableFoods = [
    {id: "qwe234dfh", name: "Burger", image:"🍔🍔", price: 234},
    {id: "qwe2356dxh", name: "pizza", image:"🍕🍕", price: 400},
    {id: "qwe2456yh", name: "meat", image:"🍖🍖", price: 500},
    {id: "qwe2785yh", name: "chicken", image:"🍗🍗", price: 1200},
]

const filterFood = availableFoods.filter((foodObj) => {
    return foodObj.price > 450 
})
let totalPrice = filterFood.map(foodObj=>foodObj.price).
                            reduce((prev, next)=>prev + next)

console.log(`my total bill for items above 450 is ${totalPrice}`)


