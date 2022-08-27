package model

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Id                  int    `json:"id" gorm:"primary_key"`
	Home_store          string `json:"home_Store"`
	Name                string `json:"name"`
	Email               string `json:"email"`
	Customer_since      string `json:"customer-_-since"`
	Loyalty_card_number string `json:"loyalty_Card_Number"`
	Birthdate           string `json:"birthdate"`
	gender              string `json:"gender"`
	birth_year          string `json:"birth_Year"`
}
