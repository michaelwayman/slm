import React from 'react'

const dateToDayMonthYear = (date) => {
    date = new Date(date);
    const dateString = `${ date.getMonth() }/${ date.getDay() }/${ date.getFullYear() }`;
    const timeString = `${ date.getHours() % 12 }: ${ date.getMinutes() || '00' }`;
    return `Posted on ${dateString} at ${timeString}`;
};


const BlogPost = (props) => (
    <div className="blogPost">
        <div className="row">
            <h1 className="col-md-4">{props.post.title}</h1>
            <h2 className="col-md-4">{props.post.author}</h2>
        </div>
        <p>{props.post.content}</p>
        <p>{dateToDayMonthYear(props.post.posted_date)}</p>
    </div>
);

export {BlogPost}