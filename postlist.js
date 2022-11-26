// Patika.dev linkim --> https://app.patika.dev/ailker

/* const posts = [
    { postName: "Post 1", authorName: "Author 1" },
    { postName: "Post 2", authorName: "Author 2" },
    { postName: "Post 3", authorName: "Author 3" }
];
const listPosts = () => {
    posts.map((post) => {
        console.log(post.postName);
    });
};

const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
        posts.push(newPost);
    });

    return promise1;
};

addPost({ postName: "Post 4", authorName: "Author 4" })
    .then(() => {
        console.log("New List");
        listPosts();
    })
    .catch((error) => {
        console.log(error);
    });

listPosts(); */

const posts = [
    { postName: "Post 1", authorName: "Author 1" },
    { postName: "Post 2", authorName: "Author 2" },
    { postName: "Post 3", authorName: "Author 3" }
];

const listPosts = () => {
    posts.map((post) => {
        console.log(post.postName, post.authorName);
    });
};

const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts);
        reject('Bir hata olustu');
    });

    return promise1;
};

async function showPosts() {
    try {
        await addPost({ postName: "Post 4", authorName: "Author 4" });
        listPosts();
    } catch (error) {
        console.log(error);
    }
}

showPosts();