import React from 'react'

const dateToDayMonthYear = (date) => {
    date = new Date(date);
    const dateString = `${ date.getMonth() }/${ date.getDay() }/${ date.getFullYear() }`;
    const timeString = `${ date.getHours() % 12 }: ${ date.getMinutes() || '00' }`;
    return `Posted on ${dateString} at ${timeString}`;
};


const BlogPost = (props) => (
    <div className="blogPost">
        <h1>{props.post.id}</h1>
        <h1>{props.post.title}</h1>
        <h1>{props.post.author}</h1>
        <p>{props.post.content}</p>
        <p>{dateToDayMonthYear(props.post.posted_date)}</p>
    </div>
);

export {BlogPost}