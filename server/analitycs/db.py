from json import dumps
import psycopg2




import psycopg2
from psycopg2 import Error
import auth


class Database:

    """функция инициализации подключения"""
    def connect():
        try:
            connection = psycopg2.connect(user="postgres",
                                    # password to database
                                    password=auth.passwd,  
                                    host="127.0.0.1",
                                    port="5432",
                                    database="purchases")
            print("conect to db successfully")
            return connection
        except (Exception, Error) as error:
            print("Ошибка при работе с PostgreSQL", error)


    """создание таблицы"""
    def create(connection):
        try:
            cursor = connection.cursor()
            """query create table"""
            create_table_query = """CREATE TABLE IF NOT EXISTS public.purchases
                                    (
                                        id SERIAL,
                                        price real,
                                        name text,
                                        company_name text
                                    )

                                    TABLESPACE pg_default;

                                    ALTER TABLE IF EXISTS public.purchases
                                        OWNER to postgres;"""
            # Выполнение команды: это создает новую таблицу
            cursor.execute(create_table_query)
            connection.commit()
            print("Таблица успешно создана в PostgreSQL")
        except (Exception, Error) as error:
            print("Ошибка при работе с PostgreSQL", error)

    """выбор всех закупок"""
    def select(connection):
        try:
            cursor = connection.cursor()
            cursor.execute("SELECT * from purchases")
            record = cursor.fetchall()
            print("Результат", record)
            return record
        except (Exception, Error) as error:
            print("Ошибка при работе с PostgreSQL", error)

    """добавление закупки в таблицу"""
    def insert(connection, price, name, product_name):
        try:
            cursor = connection.cursor()
            # cursor.execute(f"INSERT INTO purchases ( price, name, company_name ) VALUES ({data[0][0]}, '{data[0][1]}', '{data[0][2]}');")
            insert_query = f"INSERT INTO purchases ( price, name, company_name ) VALUES ({price}, '{name}', '{product_name}');"
            cursor.execute(insert_query)
            connection.commit()
            print("1 запись успешно вставлена")
            # Получить результат
            cursor.execute("SELECT * from purchases")
            record = cursor.fetchall()
            print("Результат", record)
            return record
        except (Exception, Error) as error:
            print("Ошибка при работе с PostgreSQL", error)
            











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




#   def __init__(self, database, user, password, host, port):
#     self.connection = self.createConnection(database, user, password, host, port)


#
#     except psycopg2.OperationalError as e:
#       print('Unable to connect!\n{0}').format(e)


#   def get_data(self):

#     cursor = self.con.cursor()
#     return self.ExecuteReadQuery(cursor.execute("SELECT * FROM orders"))

