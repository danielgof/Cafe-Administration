package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
)

var app *gin.Engine

func main() {
	fmt.Println("Hello, World!")
	app := gin.Default()
	index()
	app.Run()
}
