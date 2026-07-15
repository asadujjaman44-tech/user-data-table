let user = document.getElementById("show")
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => data.map((item, i) => {
        return (
            user.innerHTML += `<tr>
       <th>${i+1}</th>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.website}</td>
        <td>
            <button class="btn btn-primary btn-sm">Edit</button>
            <button class="btn btn-danger btn-sm">Delete</button>
        </td>
    </tr>`
        )
    }))