import psycopg2
import pandas
conn = psycopg2.connect(database="usersdata", user="daniel",
    password="admin", host="localhost", port=5432)


data = pandas.read_csv("customer.csv")

print(data.values[2])
cur = conn.cursor()
# cur.execute(f"INSERT INTO users (home_store, name, email, customer_since, loyalty_card_number, birthdate) VALUES ('sss', 'sss', 'sss', 'sss', 'sss', 'sss')")
conn.commit()
for value in data.values:
    print(value[4])

    cur.execute(f"INSERT INTO users (home_store, name, email, customer_since, loyalty_card_number, birthdate) VALUES ('{value[1]}', '{value[2]}', '{value[3]}', '{value[4]}', '{value[5]}', '{value[6]}')")
    conn.commit()