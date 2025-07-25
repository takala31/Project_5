function addEmployee() {
  fetch(`${_spPageContextInfo.webAbsoluteUrl}/_api/web/lists/getbytitle('Employees')/items`, {
    method: "POST",
    headers: {
      "Accept": "application/json;odata=verbose",
      "Content-Type": "application/json;odata=verbose",
      "X-RequestDigest": document.getElementById("__REQUESTDIGEST").value
    },
    body: JSON.stringify({
      "__metadata": { "type": "SP.Data.EmployeesListItem" },
      "Title": "New Employee"
    })
  })
  .then(res => res.json())
  .then(data => alert("Added: " + data.d.Title))
  .catch(err => console.error(err));
}

