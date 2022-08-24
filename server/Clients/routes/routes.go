package routes

import (
	"Clients/controller"
	"github.com/gin-gonic/gin"
)

func UserRoute(router *gin.Engine) {
	router.GET(
		"/", controller.UserController)
}
