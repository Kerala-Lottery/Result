document.getElementById("customerForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  
  document.getElementById('loader').style.display = 'block';
  
  fetch('https://sheetbase.co/api/anil/1HDpBk5tljclFYPaW0faB2wVxjYCEPJsyLp-kAPLNA1M/sheet1/')
    .then(response => response.json())
    .then(data => {
      const serialNumber = document.getElementById("serialNumber").value;
      const mobileNumber = document.getElementById("mobileNumber").value;
      const customer = data.data.find(c => c.serialNumber === serialNumber && c.mobileNumber === mobileNumber);
      if (customer) {
        
       document.getElementById('loader').style.display = 'none';
        const customerDetails = `
          <b><p style="font-size: 24px; color: #65AC0E;">Hi <span style="text-transform: uppercase;">${customer.name}</span>,<br>Congratulations</p></b>
          <h3><u>Prize Details</u></h3>
          <table>
            <tr>
              <th>Name</th>
              <td>${customer.name}</td>
            </tr>
            
            <tr>
              <th>Mobile Number</th>
              <td>${customer.mobileNumber}</td>
            </tr>
            
            <tr>
              <th>Ticket Number</th>
              <td>${customer.serialNumber}</td>
            </tr>
            
            <tr>
              <th>Win Price</th>
              <td>Rs. ${customer.prizeAmount}</td>
            </tr>
            
          </table>
        
        `;
    document.getElementById("customerDetails").innerHTML = customerDetails;
    document.getElementById('customerForm').style.display = 'none';
} else {
       document.getElementById('loader').style.display = 'none';
    document.getElementById("customerDetails").innerHTML = `<p style="color: red;">No customer found with the provided details.</p>`;
    alert('Details Not Found.\nPlease Check Your Details.');
}
})
  .catch(error => console.error('Error:', error));
});