"""empty message

Revision ID: 80e022d4c9ce
Revises: 
Create Date: 2019-12-10 15:48:42.776789

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '80e022d4c9ce'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('stations',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('lat', sa.Float(), nullable=True),
    sa.Column('lng', sa.Float(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('stations')
    # ### end Alembic commands ###
