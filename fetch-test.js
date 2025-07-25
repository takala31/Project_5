fetch('data.json')
  .then(response => {
    console.log(response.status);    // 200
    console.log(response.ok);        // true
    return response.json();          // extract the usable data
  })
  .then(data => {
    console.log(data);               // the actual content from 'data.json'
  })