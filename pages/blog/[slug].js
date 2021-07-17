import React, {useState} from "react";
import {Container, DropdownButton ,Button, ButtonGroup, Row, Dropdown ,Col} from 'react-bootstrap'

import {NextSeo} from 'next-seo'

function BlogPostPage(props) {
  const [show, setShow] = useState(false);
  const showDropdown = (e)=>{
      setShow(!show);
  }
  const hideDropdown = e => {
      setShow(false);
  }

  return (<>
  
      <NextSeo title = {props.blog.metaTitluSeo} description ={props.blog.metaDescriereSeo}/>
    <div className ="min-100-vh  bg-primary-color">
     
      
      <div className="container">
      <Row>
    <Col className='align-items-center' xs={12} md={3} xs={{order:'last'}}>
    <ButtonGroup className='position-fixed-desktop' vertical>
  <Button href='/blog'>Inapoi la articole de blog</Button>
  <Button href = '/'>Pagina principala</Button>

  <DropdownButton  as={ButtonGroup} 
  show={show}
  onMouseEnter={showDropdown} 
  onMouseLeave={hideDropdown}
  title="Servicii" 
  id="bg-vertical-dropdown-1">
    
          <Dropdown.Item href="/drept-penal">Drept Penal</Dropdown.Item>
          <Dropdown.Item href="/dreptul-familiei">Dreptul Familiei</Dropdown.Item>
          <Dropdown.Item href="/drept-civil">Drept Civil</Dropdown.Item>
          <Dropdown.Item href="/malpraxis-medical">Malpraxis Medical</Dropdown.Item>
          <Dropdown.Item href="/dreptul-muncii">Dreptul Muncii</Dropdown.Item>
          <Dropdown.Item href="/executari-silite">Executari Silite</Dropdown.Item>
          <Dropdown.Item href="/drept-imobiliar">Drept Imobiliar</Dropdown.Item>
          <Dropdown.Item href="/drept-contraventional">Drept Contraventional</Dropdown.Item>
          <Dropdown.Item href="/drept-bancar">Drept Bancar</Dropdown.Item>
          <Dropdown.Item href="/drept-administrativ">Drept Administrativ</Dropdown.Item>
  </DropdownButton>

  <Button href='/avocat-online'>Avocat Online</Button>
  <Button href='/contact'>Contact</Button>


</ButtonGroup>
    </Col>
    <Col xs={12} md={9}>
    <h1 className="text-primary text-capitalize text-center text-light">{props.blog.title}</h1>
      <section dangerouslySetInnerHTML={{ __html: props.blog.content }}></section>
      <hr/>

    </Col>
    
  </Row>
 
    {console.log(props)}

      </div>
      
    </div>

    <style jsx >{`
    @media (min-width:979px) {
  .position-fixed-desktop {
    position:fixed;
    bottom:0; 
    right:0; 
  }
  

}
      
      `}</style>
  </>);
}

// pass props to BlogPostPage component
export async function getStaticProps(context) {
  const fs = require("fs");
  const html = require("remark-html");
  const highlight = require("remark-highlight.js");
  const unified = require("unified");
  const markdown = require("remark-parse");
  const matter = require("gray-matter");

  const slug = context.params.slug; // get slug from params
  const path = `${process.cwd()}/contents/${slug}.md`;

    // read file content and store into rawContent variable
    const rawContent = fs.readFileSync(path, {
    encoding: "utf-8",
  });

  const { data, content } = matter(rawContent); // pass rawContent to gray-matter to get data and content

  const result = await unified()
    .use(markdown)
    .use(highlight) // highlight code block
    .use(html)
    .process(content); // pass content to process

  return {
    props: {
            blog: {
                ...data,
          content: result.toString(),
            }
    },
  };
}

// generate HTML paths at build time
export async function getStaticPaths(context) {
  const fs = require("fs");

    const path = `${process.cwd()}/contents`;
  const files = fs.readdirSync(path, "utf-8");

    const markdownFileNames = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => fn.replace(".md", ""));

  return {
    paths: markdownFileNames.map((fileName) => {
      return {
        params: {
          slug: fileName,
        },
      };
    }),
    fallback: false,
  };
}

export default BlogPostPage;