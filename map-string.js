const friends = ['Tom cruise', 'sha-Rukh khan', 'Salman Khan', 'Allu Arjun', 'Provu Deba', 'Amita Bacchan Chuwdhori'];
const friendLength = friends.map(friend => friend.length);

// console.log(Math.max(...friendLength));

const products = [
    { brandname: 'Apple', type: 'Phone', model: 'Iphone-14 Pro Max', price: 1200, color: 'Black' },
    { brandname: 'Apple', type: 'Laptop', model: 'Max Book Pro-15', price: 2000, color: 'White' },
    { brandname: 'Samsung', type: 'Phone', model: 'Glaxsy Note 15', price: 1100, color: 'Gray' },
    { brandname: 'Hp', type: 'Laptop', model: 'Pavilion-50', price: 1400, color: 'Pink' },
    { brandname: 'Mi', type: 'Phone', model: 'Mi Note-13', price: 800, color: 'Light Blue' },
];
const productList = products.map(product => product.brandname);
console.log(productList);
const lookType = products.map(types => types.type);
console.log(...lookType);
// console log all product
// products.map(product => console.log(product));

// jokhon return lage tokhon forEach use kora hoi
products.forEach(product => console.log(product));