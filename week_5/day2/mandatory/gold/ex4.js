const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
];

// Version async/await avec try/catch et sans then()
const getDataAsyncAwait = async function() {
        try {
                const responses = await Promise.all(urls.map(url => fetch(url)));
                const users = await responses[0].json();
                const posts = await responses[1].json();
                const albums = await responses[2].json();
                console.log('users', users);
                console.log('posts', posts);
                console.log('albums', albums);
        } catch (error) {
                console.error('ooooooops', error);
        }
}

getDataAsyncAwait();