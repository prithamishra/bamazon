# bamazon


1. Created a MySQL Database called `bamazon`.

2. Created a Table inside of that database called `products`.

3. The products table  has each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

4. This database has around 20 different products. (i.e. Insert "mock" data rows into this database and table).

5. Created a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Includind the ids, names, and prices of products for sale.

6. The app then prompt users with two messages.

   * The first asks them the ID of the product they would like to buy.
   * The second message asks how many units of the product they would like to buy.

7. Once the customer has placed the order, the application checks if the store has enough of the product to meet the customer's request.

   * If not, the app logs a phrase like `Insufficient quantity!`, and then prevent the order from going through.

8. However, if the store _does_ have enough of the product, order gets fulfilled
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, customer's total cost of their purchase is displayed
