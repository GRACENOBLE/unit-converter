package main

import (
	"log"
	"net/http"

	"github.com/GRACENOBLE/unit-converter/api"
)

func main() {
	server := http.NewServeMux()
	server.HandleFunc("/measurements", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
			return
		}
		data := api.GetMeasurements()
		w.Write([]byte(data))
	})

	server.HandleFunc("/detailed-measurements", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
			return
		}
		data := api.GetDetailedMeasurements()
		w.Write([]byte(data))
	})

	server.HandleFunc("/units", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
			return
		}
		data := api.GetUnits()
		w.Write([]byte(data))
	})

	server.HandleFunc("/convert", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
			return
		}

		from := r.URL.Query().Get("from")
		to := r.URL.Query().Get("to")
		value := r.URL.Query().Get("value")

		data := api.Convert(value, from, to)
		w.Write([]byte(data))
	})

	err := http.ListenAndServe(":3333", server)
	if err != nil {
		log.Fatal("Error opening server")
	}
}
