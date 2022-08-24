package db

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	db, err := gorm.Open(postgres.Open("user=gorm password=gorm dbname=gorm port=9920 sslmode=disable TimeZone=Asia/Shanghai"), &gorm.Config{})
	if err != nil {
		panic(err)
	}
	DB = db
}
