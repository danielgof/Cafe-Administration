package main

import (
	"Clients/routes"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.New()
	routes.UserRoute(router)

	router.Run(":5000")
}
