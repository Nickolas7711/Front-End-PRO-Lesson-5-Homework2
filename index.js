// debugger;

season = '';
seasonCoefficient = null;

while (season !== 'winter' && season !== 'summer') {
    season = prompt('Winter or Summer period?').toLowerCase().replaceAll(' ', '');
} 

if (season === 'winter') {
    seasonCoefficient = 2;
} else if (season === 'summer') {
    seasonCoefficient = 0.8;
}

category = '';
product = '';
price = '';

productsVegetables = [['cabbage', 8], ['avocado', 30], ['tomato', 10]];

productsFruits = [['grapes', 20], ['raspberry', 25], ['coconut', 50]];

while (category !== 'vegetables' && category !== 'fruits') {
    category = prompt('Choose category in which you want to buy products: vegetables or fruits?').toLowerCase().replaceAll(' ', '');
    if (category === 'vegetables') {
        while (productsVegetables !== 'cabbage' && productsVegetables !== 'avocado' && productsVegetables !== 'tomato') {
        productsVegetables = prompt('Choose product from category vegetables: cabbage, avocado, tomato.').toLowerCase().replaceAll(' ', '');
        }

        product = productsVegetables;

        // for (i = 0; i = productsVegetables.length; i++) {
        //     arrayElement = productsVegetables[i]
        //     if (arrayElement.indexOf(productsVegetables) = 0) {
        //     price = productsVegetables[i][1];
        //     } 
        // }



    } else if (category === 'fruits') {
        while (productsFruits !== 'grapes' && productsFruits !== 'raspberry' && productsFruits !== 'coconut') {
        productsFruits = prompt('Choose product from category fruits: grapes, raspberry, coconut.').toLowerCase().replaceAll(' ', '');
        }
        product = productsFruits;
    }
} 



do {
    productQuantity = parseInt(prompt(`Enter count of ${product}`));
} while (!productQuantity || isNaN(productQuantity) && productQuantity > 1);


alert(`${season}, ${category}, ${product}, ${price}, ${productQuantity}`);