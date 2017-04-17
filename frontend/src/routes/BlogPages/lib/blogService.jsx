const BASE_BLOG_URL = '/api/blog/';
const BLOG_POST_URL = BASE_BLOG_URL + 'posts';
const BLOG_COMMENT_URL = BASE_BLOG_URL + 'comments';

const defaultJSONHeaders = new Headers({
    'Content-Type': 'application/json'
});

const getBlogPosts = () => {
    return fetch(BLOG_POST_URL)
        .then(res => res.json())
};

const getCommentsByPostId = (id) => {
    return fetch(`${BLOG_COMMENT_URL}/?post=${id}`)
        .then(res => res.json())
};

const postCommentToBlogByBlogId = (blogId, comment) => {
    const payload = {
        ...comment,
        post: blogId
    };
    return fetch(`${BLOG_COMMENT_URL}/`, {
        method: 'POST',
        headers: defaultJSONHeaders,
        body: JSON.stringify(payload)
    })
};


const getPostById = (id) => {
  return fetch(`${BLOG_POST_URL}/${id}`)
      .then(res => res.json())
};


export {getBlogPosts, getCommentsByPostId, getPostById, postCommentToBlogByBlogId}
