// Global variables
var mysql = require('mysql2');
var inquirer = require('inquirer');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'bamazon',
  port: 3306
});

//----------------------------------------------

//Making sure the connection works
 connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  showAllProducts();
  // start();
});


//===================================================================================================================
function showAllProducts() {

		connection.query("SELECT * FROM products_", function(err, res) {

			if (err) throw err;
			console.log(res);
			start();
		});


	}



	
function start() {

inquirer.prompt([

{
	message: "Enter prodcut ID or enter -1 to leave",
	name: "response",
	type: "input"
	

}



	]).then(answers => {
		if(answers.response === "-1") {

			process.exit(0);

		}
		connection.query("SELECT * FROM products_ WHERE ID = ?", [answers.response], function(err, res) {
			if(res.length > 0) {
				howManyofProduct(res[0]);
			}
			else{
				console.log("No product with that ID was found");
				showAllProducts();
			}

		});
		 
	
});



}




function howManyofProduct(itemToBuy) {

	inquirer.prompt([
	 {
    	message: "How many of those would you like to buy?",
    	type: "input",
    	name: "response"
    	
    }

    ]).then(answers => {
    	if(itemToBuy.stock_quantity >= answers.response) {
    		var newQuantity = itemToBuy.stock_quantity - answers.response;
    		console.log("Your total is : " + itemToBuy.price * answers.response);
    		updateStockitems(newQuantity, itemToBuy.id);

    		console.log(newQuantity);
    	}

    	else {
    		console.log("We dont have that much in stock right now");
    		showAllProducts();
    	}
    })


} 


function updateStockitems(newQuantity, idNum) {

	connection.query("UPDATE products_ SET stock_quantity = ? WHERE id = ?",[newQuantity, idNum], function(err, res) {

		console.log("Success");
		showAllProducts();
	})
}

