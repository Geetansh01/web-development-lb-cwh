from pydantic import BaseModel

class Product(BaseModel):
    id: int
    name: str
    description: str
    price: float
    quantity: int

    # No need to explicitly give a contructor when you inherit "BaseModel", pydantic handles that. 
    '''
        Q: How can a base class (BaseModel) know about and handle the attributes of child class? 
        A: This is beyond normal C++ OOPS, pydantic uses something called Python MetaClasses Magic! Now, pydantic will auto generate an appropriate constructor for my Product class with validation and all.
    '''
    # def __init__(self, id: int, name: str, description: str, price: float, quantity: int):
    #     self.id = id
    #     self.name = name
    #     self.description = description
    #     self.price = price
    #     self.quantity = quantity