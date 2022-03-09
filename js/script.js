//Burguer Constructor
function Burguer(buns,vegetables,cheese,cheese_slices, patty, patty_num, sauce, extra){
    this.buns = buns;
    //Join to make the vegetables array into a string
    this.vegetables = vegetables.join(', ');
    this.cheese = cheese;
    this.cheese_slices = cheese_slices;
    this.patty = patty;
    this.patty_num = patty_num;
    this.sauce = sauce;
    this.extra = extra;
    //Create function to display the Object with its members
    this.order = function(){
               output.textContent = `Your order is: ${this.buns} buns with ${this.patty_num} ${this.patty} patty(s), ${cheese_slices} slice(s) of ${cheese} cheese, ${sauce} sauce, ${vegetables} and an extra ${extra}.`;
    };
}

//Create an order to test the Constructor and Display function
let first_order= new Burguer('White Bread', ['pickles','corn','lettuce','tomato'],'Gouda', 3, 'Angus', 4, 'Mayo', 'Fries'); 
first_order.order();

