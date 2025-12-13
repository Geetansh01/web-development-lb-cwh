"""add job_title column to user table

Revision ID: 1489e571822b
Revises: de1bb338be87
Create Date: 2025-10-22 11:23:01.136228

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '1489e571822b'
down_revision: Union[str, Sequence[str], None] = 'de1bb338be87'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.add_column(
        "user",
        sa.Column("job_title", sa.String(64), nullable=True)
    )


def downgrade() -> None:
    op.drop_column("user", "job_title")
