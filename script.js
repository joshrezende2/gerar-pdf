var os_id;
const referrerUrl = document.referrer;
const urlSearchParams = new URLSearchParams(window.location.search);
os_id = urlSearchParams.get("id");
const resultElement = document.getElementById("result");
if (resultElement) {
  resultElement.innerText = referrerUrl + ("?id=" + os_id);
} else {
  console.log("The element with ID 'result' doesn't exist.");
}
