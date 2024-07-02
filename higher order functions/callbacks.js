/*
const posts = [
    {
        title: 'post1',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio natus dolorem laboriosam dicta aperiam est quas quos repudiandae pariatur magni?',
    },
    {
        title: 'post2',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio natus dolorem laboriosam dicta aperiam est quas quos repudiandae pariatur magni?',
    }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach(post => {
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    }, 2000)
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
}


createPost({
    title: 'post3',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio natus dolorem laboriosam dicta aperiam est quas quos repudiandae pariatur magni?'
}, getPosts)

// we are using setTimeout to create a feel of getting data from db
*/



/*
const posts = [
    {
        title: 'post1',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio natus dolorem laboriosam dicta aperiam est quas quos repudiandae pariatur magni?',
    },
    {
        title: 'post2',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio natus dolorem laboriosam dicta aperiam est quas quos repudiandae pariatur magni?',
    }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach(post => {
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    }, 2000)
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('something went wrong');
            }
        }, 2000)
    })
}


// createPost({
//     title: 'post3',
//     body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio natus dolorem laboriosam dicta aperiam est quas quos repudiandae pariatur magni?'
// })
//     .then(getPosts)
//     .catch(err => console.log(err));


const promise1 = Promise.resolve('Hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'GoodBye');
});
const promise4 = fetch('..');

Promise.all([promise1, promise2, promise3]).then((values) => console.log(values));

*/



const posts = [
    {
        title: 'post1',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio natus dolorem laboriosam dicta aperiam est quas quos repudiandae pariatur magni?',
    },
    {
        title: 'post2',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio natus dolorem laboriosam dicta aperiam est quas quos repudiandae pariatur magni?',
    }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach(post => {
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    }, 2000)
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('something went wrong');
            }
        }, 2000)
    })
}

async function init() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    // console.log(data);
    // for fetch we have to use .then() twice, once to convert in json and other to get the data
}

init();