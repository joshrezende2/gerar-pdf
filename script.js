const os_id = prompt("Please enter the OS ID:");

fetch(`https://xdzf-voac-tbv6.b2.xano.io/api:QFLVgUNS/os_1?os_id=${os_id}`)
  .then(response => response.json())
  .then(data => {
    const resultElement = document.getElementById("result");
    resultElement.innerText = JSON.stringify(data, null, 2);
    
    const generatePdfButton = document.getElementById("generate-pdf");
    generatePdfButton.addEventListener("click", () => {
      const pdf = new jsPDF();
      pdf.text(JSON.stringify(data, null, 2), 10, 10);
      pdf.save("os_details.pdf");
    });
  });
