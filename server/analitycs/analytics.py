import datetime
import time
from datetime import date


class Analitycs:
    def avgAge(clients):
        # for client in clients:
        #     print(client.get('dob').strftime('%Y'))
        ages  = []
        for client in clients:
            ages.append(date.today().year - int(client.get('dob').strftime('%Y')))
        print(sum(ages)/len(ages))
        return sum(ages)/len(ages)

def main(clients):
    Analitycs.avgAge(clients)


if __name__ == "__main__":
    main([{'id': 1, 'dob': datetime.date(1999, 2, 7), 'lastname': '123dz@gmail.com', 'name': 'Green', 'phonenumber': 'Danzel'}, {'id': 2, 'dob': datetime.date(1996, 2, 7), 'lastname': 'jr@gmail.com', 'name': 'Book', 'phonenumber': 'Jared'}, {'id': 3, 'dob': datetime.date(1978, 2, 7), 'lastname': 'gel_cl@gail.com', 'name': 'Geller', 'phonenumber': 'Fred'}, {'id': 4, 'dob': datetime.date(1986, 2, 19), 'lastname': 'jt_star@gmail.com', 'name': 'Tribianny', 'phonenumber': 'Joui'}])

