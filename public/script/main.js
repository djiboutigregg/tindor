fetch(`https://jsonplaceholder.typicode.com/users/${Number(Math.ceil(Math.random() * 10))}`)
    .then(response => response.json())
    .then(json => console.log(json))
