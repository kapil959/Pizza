# Pizza
Order Pizza Application

Components/Files used in this Application -
1. Pizza.html - Contains html part of the application. All css and js files are included in it.
2. pizzas.json - json file contains all information about pizza(name,type,price). XMLHttpRequest object is used to read information from this json file and map data to html objects.
3. pizza.css - All styles used to design our page in a presentable way are included in this file.
4. pizza.js - All javascript funciton and code is written in this file.
5. Different images are also included to make UI more interactive.

Application functioning-

Download the pizza folder from the repository path.
1. Run Pizza.html file on your browser.
2. Click on 'Order here to Click' button.
3. 'Order here to Click' button will be disabled and Pizza list will be loaded. Each pizza item will have '+' & '-' button. You can increase the count depends on the quantity you want.
Pizza count will be visible in textarea present between '+' & '-' buttons.
Count will not go below then 0.
4. Once the count is greater then 0, the 'Checkout' button will be displayed.
5. After making some selection, Click on Checkout button.
Checkout button will hide. '+' & '-' buttons will be disabled..
Order summary section will be displayed along with 'Go Back to Menu' button.
6. Click on 'Go back to menu' button if you want to edit your order.
After click over 'Go back to menu' button, the button and order summary section will hide and pizza list will become editable again.
Edit your order and click on 'checkout' button again.
7. Check your order summary and bill. Click on 'confirm' button.
After clicking over confirm button, order summary section will hide and user information section will be visible.
8. Enter the values in required fields. Basic validation has been applied in all the fields i.e. fields cant be empty.
If you click over Order button without entering input in any of the field, error message will be diplayed.
9. Fill all the input areas and click on 'Order' button.

Success message will be displayed.
