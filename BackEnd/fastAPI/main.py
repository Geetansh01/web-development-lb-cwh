from fastapi import FastAPI
from models import Product

app = FastAPI()

@app.get("/")
def greet():
    return "Welcome to my FastAPI backend"

products = [Product(id=1, name="MacBook Air", description="Budget Laptop", price=99, quantity=10),
            Product(id=2, name="MacBook Pro", description="Expensive Laptop", price=999, quantity=5),
            ]

@app.get("/products")
def get_all_products():
    return products

@app.get("/product/{id}")
def get_all_products(id: int):
    for product in products:
        if (product.id == id):
            return product
    return "Product not found"

@app.post("/product")
def add_product(product: Product):
    products.append(product)
    return product # Echo back the product you added to the client

# To update an already existing product's details
@app.put("/products/{product_id}")
def update_product(product_id: int, product: Product):
    for i in range(len(products)):
        if products[i].id == product_id:
            products[i] = product
            return {"message": "Product updated successfully", "product": product}
    return {"error": "Product not found"}

@app.delete("/products/{product_id}")
def delete_product(product_id: int):
    for i in range(len(products)):
        if products[i].id == product_id:
            del products[i]
            return {"message": "Product deleted successfully"}
    return {"error": "Product not found"}



