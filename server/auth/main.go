package main

import (
    "./database"
    "github.com/gofiber/fiber/v2"
        )

func main() {
    database.Connect()

    app := fiber.New()

    app.Get("/", func(c *fiber.Ctx) error {
        return c.SendString("Hello, World 👋!")
    })

    app.Listen(":8000")
}