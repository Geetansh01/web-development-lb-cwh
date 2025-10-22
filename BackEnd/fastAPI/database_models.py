from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Float, func, DateTime

Base = declarative_base()

class Product(Base):

    __tablename__ = "product"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    description = Column(String)
    price = Column(Float)
    quantity = Column(Integer)

class Company(Base):
    __tablename__ = 'company'

    id = Column(Integer, primary_key=True)
    name = Column(String(60), unique=True)
    address = Column(String(60), unique=True)
    created_at = Column(DateTime, default=func.now())

    # In Python, "repr" refers to the "representation" of an object, primarily intended for developers and debugging. It provides an unambiguous string representation of an object, 
    def __repr__(self):
        return f"id: {self.id}, name: {self.name}"
