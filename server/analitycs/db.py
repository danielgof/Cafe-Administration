import psycopg2

class Database:

  def __init__(self, database, user, password, host, port):
    self.connection = self.createConnection(database, user, password, host, port)

  def createConnection(self, database, user, password, host, port):
    
    connection = None
    try:
      connection = psycopg2.connect(
      database="client", 
      user="postgres", 
      password="admin", 
      host="127.0.0.1", 
      port="5432"
      )
    except psycopg2.OperationalError as e:
      print('Unable to connect!\n{0}').format(e)


  def get_data(self):

    cursor = self.con.cursor()
    return self.ExecuteReadQuery(cursor.execute("SELECT * FROM client"))




