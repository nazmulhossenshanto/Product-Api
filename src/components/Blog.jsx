import React from "react";

const Blog = ({ blog }) => {
    // reading_time,poster_date,author,autho_img,
  const { title, hashtags,cover } = blog;
  return (
    <div className="card bg-base-100 shadow-sm mb-5">
      <figure>
        <img className="w-full h-56 object-cover"
          src={cover}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions ">
        
            {hashtags.map(tag=>(
              <p className="text-green-600">{tag}</p>
            ))}
        
         <div className="gap-5 flex">
           <button className="btn btn-accent">Bookmark</button>
          <button className="btn btn-accent">Reading time</button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
