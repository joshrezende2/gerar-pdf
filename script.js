var os_id;

const referrerUrl = document.referrer;
const urlSearchParams = new URLSearchParams(referrerUrl.split("?")[1]);
os_id = urlSearchParams.get("id");
  fetch(`https://xdzf-voac-tbv6.b2.xano.io/api:QFLVgUNS/os_1?os_id=${os_id}`)
  .then(response => response.json())
  .then(data => {
    const resultElement = document.getElementById("result");
    resultElement.innerText = JSON.stringify(data, null, 2);

  });
