const BASE_BLOG_URL = 'http://localhost:8000/api/blog/';
const BLOG_POST_URL = BASE_BLOG_URL + 'posts';
const BLOG_COMMENT_URL = BASE_BLOG_URL + 'comments';


const getBlogPosts = () => {
    return fetch(BLOG_POST_URL)
        .then(res => res.json())
};

const getCommentsByPostId = (id) => {
    return fetch(`${BLOG_COMMENT_URL}/?post=${id}`)
        .then(res => res.json())
};


const getPostById = (id) => {
  return fetch(`${BLOG_POST_URL}/${id}`)
      .then(res => res.json())
};


export {getBlogPosts, getCommentsByPostId, getPostById}
