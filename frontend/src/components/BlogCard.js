import React from 'react'
import { Link } from 'react-router-dom'
const BlogCard = () => {
  return (
    <div className='col-3'>
      <div className="blog-card">
        <div className="card-image">
            <img src="images/blog-1.jpg" className='img-fluid' alt="" />
        </div>
        <div className="blog-content">
            <p className='date'> DEC 2023</p>
            <h5 className="title">A beautiful sunday morning </h5>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.  Blanditiis amet inventore ipsam expedita.</p>
            <Link to='/' className='button'>Read More</Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
