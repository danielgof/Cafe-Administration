package database

import (
	"gorm.io/driver/postgresql"
	"gorm.io/gorm"
)

func Connect()  {
	connection, err := gorm.Open(postgres.New(postgres.Config{
        DSN: "user=postgersql password=admin dbname= port=5342 sslmode=disable TimeZone=Europe",
        PreferSimpleProtocol: true, // disables implicit prepared statement usage
      }), &gorm.Config{})

    if err != nil {
        panic("could not connect to db")
    }

}