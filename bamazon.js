const mysql = require('mysql');
const inquirer = require('inquirer');
const Table = require('cli-table');

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",

  password: "HAppy111",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  startOver();
});

function startOver() {
    inquirer.prompt([{
        type: "confirm",
        name: "confirm",
        message: "Would you like to view the products that we sale?",
        default: true
    }]).then(function(user) {
        if (user.confirm === true) {
            products();
        } else {
            console.log("    "+"Thank you for visiting Bamazon.");
        }
    });
}

function products() {

    var table = new Table({
        head: ['ID', 'Item', 'Department', 'Price', 'Stock'],
        colWidths: [10, 30, 30, 30, 30]
    });

    displayAllInventory();

    function displayAllInventory() {
        connection.query("SELECT * FROM products", function(err, res) {
            for (let i = 0; i < res.length; i++) {
                const itemId = res[i].item_id,
                    productName = res[i].product_name,
                    departmentName = res[i].department_name,
                    price = res[i].price,
                    stockQuantity = res[i].stock_quantity;
              table.push(
                  [itemId, productName, departmentName, price, stockQuantity]
            );
          }
            console.log("");
            console.log("*************************************************** Welcome to Bamazon **********************************************************");
            console.log("");
            console.log("                                                    Available Inventory                                                   ");
            console.log("*********************************************************************************************************************************");
            console.log("       " + table + "        ");
            console.log("");
            askQuestion();
        });
    }
}

function askQuestion() {
    inquirer.prompt([{
        type: "confirm",
        name: "continue",
        message: "            Would you like to buy an item?",
        default: true
    }]).then(function(user) {
        if (user.continue === true) {
            idSelection();
        } else {
            console.log("    "+"Thank you for visiting Bamazon");
        }
    });
}

function idSelection() {
    inquirer.prompt([{
            type: "input",
            name: "inputId",
            message: "            Please enter the ID number of the item you would like to buy.",
        },
        {
            type: "input",
            name: "inputNumber",
            message: "            How many of this item would you like to buy?",
        }
    ]).then(function(userPurchase) {
        connection.query("SELECT * FROM products WHERE item_id=?", userPurchase.inputId, function(err, res) {
            for (var i = 0; i < res.length; i++) {

                if (userPurchase.inputNumber > res[i].stock_quantity) {
                    console.log("**************************************************************");
                    console.log("            Insufficient quantity! Please come back again!");
                    console.log("**************************************************************");
                    startOver();
                } else {
                    console.log("            We have this in stock. Your order can be processed");
                    console.log("            Item you have selected:");
                    console.log("            Item: " + res[i].product_name);
                    console.log("            Department: " + res[i].department_name);
                    console.log("            Price: " + res[i].price);
                    console.log("            Quantity: " + userPurchase.inputNumber);
                    console.log("            ----------------");
                    console.log("            Total: " + res[i].price * userPurchase.inputNumber);
                    const newStock = (res[i].stock_quantity - userPurchase.inputNumber);
                    const purchaseId = (userPurchase.inputId);
                    confirmOrder(newStock, purchaseId);
                }
            }
        });
    });
}

function confirmOrder(newStock, purchaseId) {
    inquirer.prompt([{
        type: "confirm",
        name: "confirmPurchase",
        message: "            Please confirm the item and quantity?",
        default: true
    }]).then(function(userConfirm) {
        if (userConfirm.confirmPurchase === true) {
            connection.query("UPDATE products SET ? WHERE ?", [{
                stock_quantity: newStock
            }, {
                item_id: purchaseId
            }], function(err, res) {});
            console.log("**************************************************************");
            console.log("            "+ "Your order has been processed!");
            console.log("            "+ "Thank you for purchasing from Bamazon.");
            console.log("**************************************************************");
            startOver();
        } else {
          console.log("**************************************************************");
          console.log("    "+"Thank you for visiting Bamazon!"+"    ");
          console.log("**************************************************************");
            startOver();
        }
    });
}