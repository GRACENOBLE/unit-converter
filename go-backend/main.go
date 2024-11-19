package main

import (
	"log"
	"net/http"
	"github.com/GRACENOBLE/unit-converter/api"
)

func main() {
	server := http.NewServeMux()
	server.HandleFunc("/measurements", func(w http.ResponseWriter, r *http.Request){
		data := api.GetMeasurements()
		w.Write([]byte(data))
	} )
	server.HandleFunc("/detailed-measurements", func(w http.ResponseWriter, r *http.Request){
		data := api.GetDetailedMeasurements()
		w.Write([]byte(data))
	} )
	server.HandleFunc("/units", func(w http.ResponseWriter, r *http.Request){
		data := api.GetUnits()
		w.Write([]byte(data))
	} )
	// server.HandleFunc("/convert", func(w http.ResponseWriter, r *http.Request){
	// 	data := api.Convert()
	// 	w.Write([]byte(data))
	// } )
	err := http.ListenAndServe(":3333", server)
	if err != nil {
		log.Fatal("Error opening server")
	}
}
