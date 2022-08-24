package main

import "github.com/gin-gonic/gin"

func index() {
	app.POST("/test", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hello World",
		})
	})
}
