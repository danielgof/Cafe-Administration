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
                                    database="client")
            print("conect to db successfully")
            return connection
        except (Exception, Error) as error:
            print("Ошибка при работе с PostgreSQL", error)


    # """создание таблицы"""
    # def create(connection):
    #     try:
    #         cursor = connection.cursor()
    #         """query create table"""
    #         create_table_query = """CREATE TABLE IF NOT EXISTS public.purchases
    #                                 (
    #                                     id SERIAL,
    #                                     price real,
    #                                     name text,
    #                                     company_name text
    #                                 )

    #                                 TABLESPACE pg_default;

    #                                 ALTER TABLE IF EXISTS public.purchases
    #                                     OWNER to postgres;"""
    #         # Выполнение команды: это создает новую таблицу
    #         cursor.execute(create_table_query)
    #         connection.commit()
    #         print("Таблица успешно создана в PostgreSQL")
    #     except (Exception, Error) as error:
    #         print("Ошибка при работе с PostgreSQL", error)

    """выбор всех клиентов"""
    def select(connection):
        try:
            clients = []
            cursor = connection.cursor()
            cursor.execute("SELECT * from client")
            record = cursor.fetchall()
            for r in range(len(record)):
              d = {'id':'', 'dob': '', 'lastname':'', 'name': '', 'phonenumber': ''}
              d["id"] = record[r][0]
              d["dob"] = record[r][1]
              d["lastname"] = record[r][2]
              d["name"] = record[r][3]
              d["phonenumber"] = record[r][4]
              clients.append(d)
            print("Результат", record)
            print("Dict", clients)
            return clients
        except (Exception, Error) as error:
            print("Ошибка при работе с PostgreSQL", error)

    """добавление клиентов в таблицу"""
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
            











