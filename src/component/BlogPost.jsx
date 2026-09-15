import "./BlogPost.css";
function BlogPost(){
    return(
        <article className="blog-post">
        <img className="blog-image" src="https://picsum.photos/88/400"
        alt="Blog"/>
        <div className="blog-content"> <h2 className="blog-title">
            learn react component</h2>
            <p className="blog-meta">by sama . sep 14,2026</p>
            <p className="blog-description">
               learn the basics of react component and jsx
            </p>
            <button className="read-more"> Read More</button>
            </div>
        </article>
    );
}
export default BlogPost;
