import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'
import { Container } from 'react-bootstrap'

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <>
        <Container className='container fluid'>
      <Link href='/'>
        <a className='btn btn-back'>Go Back</a>
      </Link>
      <div className='card card-page'>
        <h1 className='post-title'>{title}</h1>
        <div className='post-date'>Posted on {date}</div>

        <div className='post-body'>
        <img className='text-center' style={{height: 50 + 'vh', width: 'fit-content'}} src={cover_image} alt={title} />
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
        </Container>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts/tutorials'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts/tutorials', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}