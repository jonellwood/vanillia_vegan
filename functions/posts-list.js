async function listPosts() {
  try {
    const response = await fetch("/data/postsIndex.json");
    const data = await response.json();
    const posts = data.posts;
    console.log(posts);
    posts.forEach((post) => {
      const title = post.title;
      const date = post.date;
      const updated = post.updated;
      const categories = post.categories;
      const coverImage = post.coverImage;
      const coverWidth = post.coverWidth;
      const coverHeight = post.coverHeight;
      const excerpt = post.excerpt;
      const author = post.author;
      const postSlug = post.postSlug;
      const featured = post.featured;
      const draft = post.draft;
      const postHTML = `
        <a href="/posts/${postSlug}" class="posts-list-link">
          <div class="post-list">
            <h3>${title} by ${author}</h3>
            <p>${excerpt}</p>
            <p>Published:${date} - Last Updated:${updated}</p>
            <p>${categories}</p>
          </div>
          <div class="post-image">
            <img src="${coverImage}" alt="${title}" width="${coverWidth}%" height="${coverHeight}%" class="post-list-image">
          </div>
        </a>        
            `;
      document.getElementById("posts-list").innerHTML += postHTML;
    });
  } catch (error) {
    console.error("Error loading posts:", error);
  }
}

// const title = post.title;
// const date = post.date;
// const updated = post.updated;
// const categories = post.categories;
// const coverImage = post.coverImage;
// const coverWidth = post.coverWidth;
// const coverHeight = post.coverHeight;
// const excerpt = post.excerpt;
// const author = post.author;
// const postSlug = post.postSlug;
// const featured = post.featured;
// const draft = post.draft;
// const postHTML = `
//                 <div class="post">
//                     <h3><a href="/posts/${postSlug}">${title}</a></h3>
//                     <p>${excerpt}</p>
//                 </div>
//             `;
