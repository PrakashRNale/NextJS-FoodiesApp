import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <div>
        <h2>These are blogs</h2>
        <p>
            <Link href={'/blog/blog-1'}>Blog 1</Link>
        </p>
        <p>
            <Link href={'/blog/blog-2'}>Blog 2</Link>
        </p>
        <p>
            <Link href={'/blog/blog-3'}>Blog 3</Link>
        </p>
    </div>
  )
}

export default Blog
