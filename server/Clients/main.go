package main

import (
	db "Clients/config"
	"Clients/routes"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.New()
	db.Connect()
	routes.UserRoute(router)
	router.Run(":5000")
}
