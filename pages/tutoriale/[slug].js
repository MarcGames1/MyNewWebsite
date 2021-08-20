import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'

import Link from 'next/link'
import { Container, Button, Col, Row } from 'react-bootstrap'

export default function PostPage({
  frontmatter: { title, date, cover_image, table_of_contents },
  slug,
  content,
}) {
  return (
    <>
    
    <Head>
<link rel='stylesheet' href='\posts\common\styles\main.css' />
    </Head>

        <Container className='container fluid'>
      <Link href='/'>
        <Button>Go Back</Button>
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
  const unified = require("unified");
  const highlight = require("remark-highlight.js");
  const markdown = require("remark-parse");
  const html = require("remark-html");
  const markdownWithMeta = fs.readFileSync(
    path.join('posts/tutorials', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  const result = await unified()
  .use(markdown)
  .use(highlight) // highlight code block
  .use(html)
  .process(content); // pass content to process

  return {
    props: {
      frontmatter,
      slug,
      content: result.toString(),
    },
  }
}