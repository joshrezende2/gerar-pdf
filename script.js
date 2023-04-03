
var os_id;

const referrerUrl = document.referrer;
const urlSearchParams = new URLSearchParams(referrerUrl.split("?")[1]);
os_id = urlSearchParams.get("id");
resultElement.innerText = referrerUrl;

