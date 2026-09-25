let posts = [
    {
        id: 1,
        username: "Rahul",
        content: "Welcome to SocialConnect! 🎉",
        likes: 5
    },

    {
        id: 2,
        username: "Priya",
        content: "This is my first post on this platform.",
        likes: 3
    }
];


// =============================
// SHOW HOME
// =============================

function showHome() {

    document.getElementById("homeSection").style.display = "block";

    document.getElementById("profileSection").style.display = "none";

    document.getElementById("logoutSection").style.display = "none";

    displayPosts();
}


// =============================
// SHOW PROFILE
// =============================

function showProfile() {

    document.getElementById("homeSection").style.display = "none";

    document.getElementById("profileSection").style.display = "flex";

    document.getElementById("logoutSection").style.display = "none";

    updateProfile();
}


// =============================
// LOGOUT
// =============================

function logout() {

    document.getElementById("homeSection").style.display = "none";

    document.getElementById("profileSection").style.display = "none";

    document.getElementById("logoutSection").style.display = "flex";
}


// =============================
// LOGIN AGAIN
// =============================

function loginAgain() {

    showHome();

}


// =============================
// DISPLAY POSTS
// =============================

function displayPosts() {

    const postsContainer =
        document.getElementById("postsContainer");

    postsContainer.innerHTML = "";


    posts.forEach(function(post) {

        const postElement =
            document.createElement("div");

        postElement.className = "post";


        postElement.innerHTML = `

            <div class="post-header">

                <span class="post-user">
                    ${post.username}
                </span>

                <span>
                    ❤️ ${post.likes}
                </span>

            </div>


            <div class="post-content">
                ${post.content}
            </div>


            <div class="post-actions">

                <button
                    onclick="likePost(${post.id})">

                    ❤️ Like

                </button>


                <button
                    onclick="commentPost(${post.id})">

                    💬 Comment

                </button>


                <button
                    class="delete-btn"
                    onclick="deletePost(${post.id})">

                    🗑 Delete

                </button>

            </div>

        `;


        postsContainer.appendChild(postElement);

    });
}


// =============================
// CREATE POST
// =============================

function createPost() {

    const username =
        document.getElementById("username").value.trim();


    const postText =
        document.getElementById("postText").value.trim();


    if (username === "" || postText === "") {

        alert("Please enter your name and post.");

        return;
    }


    const newPost = {

        id: Date.now(),

        username: username,

        content: postText,

        likes: 0
    };


    posts.unshift(newPost);


    document.getElementById("username").value = "";

    document.getElementById("postText").value = "";


    displayPosts();

    updateProfile();

}


// =============================
// LIKE POST
// =============================

function likePost(postId) {

    const post =
        posts.find(function(item) {

            return item.id === postId;

        });


    if (post) {

        post.likes++;

        displayPosts();

    }
}


// =============================
// COMMENT
// =============================

function commentPost(postId) {

    const comment =
        prompt("Enter your comment:");


    if (comment === null || comment.trim() === "") {

        return;

    }


    alert("Comment added: " + comment);

}


// =============================
// DELETE POST
// =============================

function deletePost(postId) {

    const confirmation =
        confirm("Are you sure you want to delete this post?");


    if (!confirmation) {

        return;

    }


    posts =
        posts.filter(function(post) {

            return post.id !== postId;

        });


    displayPosts();

    updateProfile();

}


// =============================
// UPDATE PROFILE
// =============================

function updateProfile() {

    const profileName =
        document.getElementById("profileName");


    const postCount =
        document.getElementById("postCount");


    postCount.textContent = posts.length;


    if (posts.length > 0) {

        profileName.textContent =
            posts[0].username + "'s Profile";

    } else {

        profileName.textContent =
            "User Profile";

    }
}


// =============================
// START APPLICATION
// =============================

showHome();