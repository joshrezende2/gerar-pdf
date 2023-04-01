$(document).ready(function() {
  // Get the OS ID from the URL
const os_id = urlParams.get("id");

  // Make the API call
  const api_url = `https://xdzf-voac-tbv6.b2.xano.io/api:QFLVgUNS/os_1?os_id=${os_id}`;
  $.get(api_url, function(data) {
    // Create the PDF
    const doc = new jsPDF();
    doc.text(`OS ID: ${data.os_id}`, 10, 10);
    doc.text(`Name: ${data.name}`, 10, 20);
    doc.text(`Address: ${data.address}`, 10, 30);
    doc.text(`City: ${data.city}`, 10, 40);
    doc.text(`State: ${data.state}`, 10, 50);
    doc.text(`Zip Code: ${data.zip_code}`, 10, 60);
    doc.text(`Phone: ${data.phone}`, 10, 70);
    doc.text(`Email: ${data.email}`, 10, 80);
    doc.text(`Service Requested: ${data.service_requested}`, 10, 90);
    doc.text(`Service Description: ${data.service_description}`, 10, 100);
    doc.text(`Service Date: ${data.service_date}`, 10, 110);
    doc.text(`Service Time: ${data.service_time}`, 10, 120);
    doc.text(`Payment Method: ${data.payment_method}`, 10, 130);

    // Download the PDF
    $('#download-btn').click(function() {
      doc.save('service-request.pdf');
    });
  });
});
