package main


import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/hello", helloHandleFunc)
	http.ListenAndServe(":8080", nil)
}

func helloHandleFunc(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Welcome to WEB")
}