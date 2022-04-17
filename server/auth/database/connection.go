package database

import (
	"gorm.io/driver/postgresql"
	"gorm.io/gorm"
)

func Connect()  {
	connection, err := gorm.Open(postgres.New(postgres.Config{
        DSN: "user=gorm password=gorm dbname=gorm port=9920 sslmode=disable TimeZone=Asia/Shanghai",
        PreferSimpleProtocol: true, // disables implicit prepared statement usage
      }), &gorm.Config{})

    if err != nil {
        panic("could not connect to db")
    }

}