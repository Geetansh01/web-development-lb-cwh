"""Create user table

Revision ID: de1bb338be87
Revises: 
Create Date: 2025-10-22 10:42:43.492744

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'de1bb338be87'
down_revision: Union[str, Sequence[str], None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Create a user table"""
    op.create_table(
        "user",
        sa.Column("id", sa.Integer, primary_key=True),
        sa.Column("name", sa.String, nullable=False),
        sa.Column("happy", sa.Boolean, default=True)
    )


def downgrade() -> None:
    """Drop the user table"""
    op.drop_table("user" )
