fetch("http://localhost:555/api/s/pay")
    .then(res => res.json())
    .then(data => console.log(data))

