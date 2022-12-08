package routes

import (
	"Clients/controller"
	"github.com/gin-gonic/gin"
)

func UserRoute(router *gin.Engine) {
	router.GET(
		"/api/clients/all", controller.GetUsers)
	router.POST(
		"/api/clients/new", controller.CreateUser)
	router.DELETE(
		"/:id", controller.DeleteUser)
	router.PUT(
		"/:id", controller.UpdateUser)
}
