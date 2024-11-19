// console.log("sending");
let logged;

function sendAnalytics(data: string) {
  console.log(data);
  logged = true;
  //   console.log(logged);
  logged = "Max";
}

sendAnalytics("The data");
