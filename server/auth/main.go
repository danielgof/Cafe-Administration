package main

import (
    "./database"
    "./routes"
        )

func main() {
    database.Connect()

    app := fiber.New()

    routes.Setup(app)

    app.Listen(":8000")
}