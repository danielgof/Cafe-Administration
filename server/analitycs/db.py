from json import dumps
import psycopg2

class Database_Clients:


  def __init__(self, database_name, user_name, password_name, host_name, port_name):
    self.connection = self.createConnection(database_name, user_name, password_name, host_name, port_name)
    

  def createConnection(self, database_name, user_name, password_name, host_name, port_name):

    connection = None
    try:
      connection = psycopg2.connect(
      database=database_name, 
      user=user_name, 
      password=password_name, 
      host=host_name, 
      port=port_name
      )
      self.cursor = self.connection.cursor()
      self.cursor.execute("SELECT * FROM client")
      print(self.cursor.fetchall())
      print("Connection created successfully")
    except psycopg2.OperationalError as e:
      print('Unable to connect!\n{0}').format(e)


  def get_data(self):
    print("Query")
    # cursor = self.connection.cursor()
    # cursor.execute("SELECT * FROM client")
    # print(cursor.fetchall())


# result = Database_Clients("client", "postgres", "admin", "127.0.0.1", "5432")
# # result.createConnection("client", "postgres", "admin", "127.0.0.1", "5432")
# result.get_data()
# # print(result.get_data())
# # class Database_Orders:


#   def __init__(self, database, user, password, host, port):
#     self.connection = self.createConnection(database, user, password, host, port)


#   def createConnection(self, database, user, password, host, port):

#     connection = None
#     try:
#       connection = psycopg2.connect(
#       database="orders", 
#       user="postgres", 
#       password="admin", 
#       host="127.0.0.1", 
#       port="5432"
#       )
#     except psycopg2.OperationalError as e:
#       print('Unable to connect!\n{0}').format(e)


#   def get_data(self):

#     cursor = self.con.cursor()
#     return self.ExecuteReadQuery(cursor.execute("SELECT * FROM orders"))

