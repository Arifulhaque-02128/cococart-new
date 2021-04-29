## Intro

There are a couple of things that can be done here -

1. Create shops
2. Order items from the shops
3. See the shops and orders as a list in a dashboard, where they can be edited directly



`localhost:3000` takes to creating the shop. There are options to create a product based shop and a service based shop. After filling the form, the shopkeeper will be taken to an option where they can set the payment method, add more items to the shop and get the link of the shop, where anyone can place an order.

Inside the shop, there are options to make the order and place it, along with the paying options.





## File Structure

The `pages/index.js` is the entry point of creating the shop. The components of the forms are inside the `steps` directory. 

For product based shops, the steps are numbered as - step1, step2 ... etc. On the other hand, the service based steps are numbered as - step101, step102 and so on. 

Components for product-shops are kept inside `component/ProductOrder` directory and the entry point is `Showcase.js`, which is invoked from the file `pages/shop/[shopid]/index.js`. The components for service-shops are in `component/ServiceOrder`, and the entry point is `ShowcaseService.js`. 



There are two database collections for the whole operation: `Models/dataSchema.js` and `Models/orderSchema.js`. 

The route for setting payment settings is in `pages/shop/[shopid]/setting.js`. 

The components for the dashboard are inside `components/Products` and `components/Orders`. The routes are in `pages/dashboard/[shopid]`. 

























