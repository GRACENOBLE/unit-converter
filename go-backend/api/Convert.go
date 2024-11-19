package api

import (
	"fmt"
	"io"
	"log"
	"net/http"
)

func Convert(from string, to string) {

	url := fmt.Sprintf("https://measurement-unit-converter.p.rapidapi.com/length?value=1200&from=%s&to=%s", from, to)

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("x-rapidapi-key", "83bf703b51msh7ae20d0f1148c8fp157141jsnae9300ae1e01")
	req.Header.Add("x-rapidapi-host", "measurement-unit-converter.p.rapidapi.com")

	res, err := http.DefaultClient.Do(req)
	if err != nil {
		log.Fatal(err)
	}

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
