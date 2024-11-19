package api

import (
	"io"
	"log"
	"net/http"
)

func GetDetailedMeasurements() []byte {

	url := "https://measurement-unit-converter.p.rapidapi.com/measurements/detailed"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("x-rapidapi-key", "83bf703b51msh7ae20d0f1148c8fp157141jsnae9300ae1e01")
	req.Header.Add("x-rapidapi-host", "measurement-unit-converter.p.rapidapi.com")

	res, err := http.DefaultClient.Do(req)
	if err != nil{
		log.Fatal(err)
	}

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)


	return(body)

}