package database

import (
    "gorm.io/gorm"
    "gorm.io/driver/postgres"
  )
  
  
func Connect()  {
    dsn := "host=localhost user=postgersql password=admin dbname=cafe_po_auth port=5432 sslmode=disable"
    _, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

    if err != nil {
        panic("could not connect to db")
    }

}