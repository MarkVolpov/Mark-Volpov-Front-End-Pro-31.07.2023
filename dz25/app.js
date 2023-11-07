
const postIdInput = document.getElementById("postId");
const searchButton = document.getElementById("searchButton");
const postInfo = document.getElementById("postInfo");
const getCommentsButton = document.getElementById("getCommentsButton");

function getPost(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }else {
                throw new Error("Post not found");
            }
            
        });
}
function getComments(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((response) => {
            if (!response.ok) {
                return response.json();
            }else {
                throw new Error("Сomments not found");
            }
        });
}

document.addEventListener("DOMContentLoaded", () => {
    searchButton.addEventListener("click", () => {
        const postId = postIdInput.value;

        if (postId >= 1 && postId <= 100) {
            getPost(postId)
                .then((post) => {
                    postInfo.innerHTML = `
                        <h2>Post id#${post.id}</h2>
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                    `;
                    getCommentsButton.style.display = "block";
                })
                .catch((error) => {
                    postInfo.innerHTML = `Post not found. Error: ${error.message}`;
                    getCommentsButton.style.display = "none";
                });
        } else {
            postInfo.innerHTML = "Type post id (1-100)";
            getCommentsButton.style.display = "none";
        }
    });

    getCommentsButton.addEventListener("click",() =>{
        const postId = postIdInput.value;

        getComments(postId)
            .then((comments) => {
                const commentsList = document.createElement("ul");
                comments.forEach((comment) => {
                    const listItem = document.createElement("li");
                    listItem.innerText = comment.name + ": " + comment.body;
                    commentsList.appendChild(listItem);
                });
                postInfo.appendChild(commentsList);
            })
            .catch((error) => {
                postInfo.innerHTML = `Receiving comments error: ${error.message}`;
            });
    });
    
   

    
});

