import psycopg2


# con = psycopg2.connect(
# database="client", 
# user="postgres", 
# password="admin", 
# host="127.0.0.1", 
# port="5432"
# )

# print("Database opened successfully")

# cursor = con.cursor()
# cursor.execute("SELECT * FROM client")
# for row in cursor:
#   print(row)

class Database:

  def connect():
    con = psycopg2.connect(
    database="client", 
    user="postgres", 
    password="admin", 
    host="127.0.0.1", 
    port="5432"
    )
    print("Database opened successfully")

  def __init__(self, con):
    self.con = con


  def print_data(self):

    cursor = self.con.cursor()
    cursor.execute("SELECT * FROM client")
    for row in cursor:
      print(row)


con = Database.connect()
Database.print_data(con)