from fastapi import FastAPI, Depends
from models import Product
from database import session, engine
from sqlalchemy.orm import Session
import database_models

app = FastAPI()

database_models.Base.metadata.create_all(bind=engine) # This line tells SQLAlchemy that it has to make all the tables

products = [Product(id=1, name="MacBook Air", description="Budget Laptop", price=99, quantity=10),
            Product(id=2, name="MacBook Pro", description="Expensive Laptop", price=999, quantity=5),
            Product(id=3, name="Lenovo Legion", description="Expensive Laptop", price=999, quantity=5),
            Product(id=4, name="Lenovo Ideapad", description="Budget Laptop", price=999, quantity=5)
            ]

# Initialise the DB, so if it did not already had, populate it with above data
def init_db():
    db = session()

    count = db.query(database_models.Product).count # Get number of rows in this table
    
    # Only insert data if the table is empty
    if count == 0:        
        for product in products:
            db.add(database_models.Product(**(product.model_dump())))
            '''
                Description of what above line does:
                (i) db.add(<requires an SQLAlchemy class's object i.e database_models.Product's object>): this is because it will add the "product" into the DB, so the "product" should be an object of the SQLAlchemy class that we have.
                (ii) database_models.Product(<key-value-pairs>) : If given key-value pairs, this will make the required database_models.Product's object
                (iii) "product".model_dump(): this gives a dictionary containing the key-value pair form of the "product" (here, "product" is a pydantic class's object and not SQLAlchemy class's object) 
                (iv) "(iii)" above gives a dictionary but we need key-value pairs. **(<dictionary>) unpacks the <dictionary> into key-value pairs.
            '''      
        db.commit() 

init_db() 

def get_db():
    db = session()

    try:
        yield db
    finally:
        db.close()


@app.get("/")
def greet():
    return "Welcome to my FastAPI backend"

@app.get("/products")
def get_all_products(db: Session = Depends(get_db)):
    # Query the DB
    db_products = db.query(database_models.Product).all()
    return db_products

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



