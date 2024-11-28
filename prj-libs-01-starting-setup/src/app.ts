// Code goes here!
import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = "AIzaSyBzxyntYjJsp2P2MFajN0E66qF_xG7VbzM";

//declare var google: any;

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  type GoogleGeocodingResponse = {
    results: { geometry: { location: { lat: number; lng: number } } }[];
    status: "OK" | "ZERO_RESULTS";
  };

  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then((respond) => {
      if (respond.data.status !== "OK") {
        throw new Error("Could not fetch location!");
      }
      const coordinates = respond.data.results[0].geometry.location;

      const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          center: coordinates,
          zoom: 16,
        }
      );

      new google.maps.Marker({ position: coordinates, map: map });

      //console.log(coordinates);
    })
    .catch((err) => {
      console.log(err.message);
      console.log(err);
    });
}

form.addEventListener("submit", searchAddressHandler);
