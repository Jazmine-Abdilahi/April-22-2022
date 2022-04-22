
/* video 108 to 110 */

/* Basically rest1 *resturant1* and rest2 *restuant2*, all have different atributs. this line of code *rest1.numGuests ||= 10; rest2.numGuests ||= 10;* is changing the number of guests without us changing the const. Same for this line of code but we are just changing the name *rest1.owner &&= '<ANONYMOUS>'; rest2.owner &&= '<ANONYMOUZ>';*


orderPizza: function (mainIngredient, ... otherIngredientts) {
    console.log(mainIngredient);
    console.log(otherIngredient);
 };

 const guests = resturant.numGuests || 10;
 console.log(guests);

 const guestsCorrect = resturant.numGuuests ?? 10;
 console.log(guestCorrect);

/*                                                 */

const rest1 = {
    name:'Capri',
   /* numGuests: 20,*/
    numGuests: 0,
};


const rest2 = {
    name:'La Piazza',
    owner: 'Giovanni Rossi',
};


/* rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;
rest1.numGuests ||= 10;
rest2.numGuests ||= 10; */

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUZ>';


console.log(rest1);
console.log(rest2);

/*                                                 */





