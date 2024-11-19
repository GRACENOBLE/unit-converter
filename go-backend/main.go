package main

import (
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request){
		w.Write([]byte("Hello from a Go program"))
	} )
	err := http.ListenAndServe(":3333", nil)
	if err != nil {
		log.Fatal("Error opening server")
	}
}
