package controller

import (
	db "Clients/config"
	"Clients/model"
	"github.com/gin-gonic/gin"
)

func GetUsers(c *gin.Context) {
	users := []model.User{}
	db.DB.Find(&users)
	c.JSON(200, &users)
}

func CreateUser(c *gin.Context) {
	var user model.User
	c.BindJSON(&user)
	db.DB.Create(&user)
	c.JSON(200, &user)
}

func DeleteUser(c *gin.Context) {
	var user model.User
	db.DB.Where("id = ?", c.Param("id")).Delete(&user)
	c.JSON(200, &user)
}

func UpdateUser(c *gin.Context) {
	var user model.User
	db.DB.Where("id = ?", c.Param("id")).First(&user)
	c.BindJSON(&user)
	db.DB.Save(&user)
	c.JSON(200, &user)
}
