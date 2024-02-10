//find the matching product by searching products
const products = [
{id: 1, name: 'samsung', price:19000},
{id: 2, name: 'mac book', price:100000},
{id: 3, name: 'xiomi', price:12000},
{id: 4, name: 'sony', price:20000},
{id: 4, name: 'del laptop', price:20000},
{id: 4, name: 'hp Laptop', price:20000},
];

// for(const product of products){
//     console.log(product);
// }

function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
if(product.name.toLowerCase().includes(search.toLowerCase())){
    matched.push(product);
}
    }
    return matched;
}

const result = matchedProducts(products, 'laptop'); // search here
console.log(result);
