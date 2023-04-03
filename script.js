var os_id;
const referrerUrl = document.referrer;
const urlSearchParams = new URLSearchParams(referrerUrl.split("?")[1]);
os_id = urlSearchParams.get("id");
const resultElement = document.getElementById("result");
if (resultElement) {
  resultElement.innerText = referrerUrl;
} else {
  console.log("The element with ID 'result' doesn't exist.");
}
