from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine

db_url = "postgresql://postgres:1234@localhost:5432/fastapi_learning_db" # Syntax: postgresql://<postgreSQL-username>:<postgreSQL-password>@localhost:5432/<postgreSQL-DB-name>"
engine = create_engine(db_url)
session = sessionmaker(autoflush=False, bind=engine)