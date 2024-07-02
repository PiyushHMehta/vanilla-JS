document.querySelector('#getText').addEventListener('click', getText);

// function getText() {
//     fetch('sample.txt')
//     .then((res) => {
//         return res.text();  // This returns a promise that resolves with the text data
//     })
//     .then((data) => {
//         document.getElementById('output').innerHTML = data;  // This logs the actual text data
//     })
//     .catch(e => {
//         console.log(e);
//     })
// }

// async function getText() {
//     const res = await fetch('sample.txt');  // Await the fetch promise
//     const data = await res.text();          // Await the text() promise
//     console.log(data);                      // Log the text data
// }


// function getText() {
//     fetch('users.json')
//     .then((res) => {
//         return res.json();  
//     })
//     .then((data) => {
//         let output = '<h2>Users</h2>'
//         data.forEach((user) => {
//             output += `<li>${user.name}</li>`;
//         })

//         document.querySelector('#output').innerHTML = output;
//     })
//     .catch(e => {
//         console.log(e);
//     })
// }


function getText() {
    fetch('https://api.github.com/users')
    .then((res) => {
        return res.json();  
    })
    .then((data) => {
        let output = '<h2>Users</h2>'
        data.forEach((user) => {
            output += `
            <img src=${user.avatar_url} width='70' height='70'>
            <ul>
            <li>ID: ${user.id}</li>
            <li>Login: ${user.login}</li>
            </ul>
            `;
        })

        document.querySelector('#output').innerHTML = output;
    })
    .catch(e => {
        console.log(e);
    })
}