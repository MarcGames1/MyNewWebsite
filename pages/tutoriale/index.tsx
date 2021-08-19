import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import React, { useState } from "react";
import { Alert, Container, Row, Col, Button, ButtonGroup, CardGroup } from "react-bootstrap";
import Image from 'next/image'
import filterPosts from '../../scripts/FilterPosts';

import { NextSeo } from 'next-seo';
import Post from '../../components/Post/Post';


const title = ''
const description = ''

function TutorialIndex(props: { posts: any[]; }) {
    <NextSeo title = {title} description ={description}/>
    const [filter, setFilter] = useState('toate categoriile')
    const [posts, setPosts] = useState(props.posts)
    const allPosts = props.posts 
  
  
    //setter pt filter
  const ChangeFilter=(filter: React.SetStateAction<string>)=>{
    ResetState()
    setFilter(filter)
    filteredposts=filterPosts(allPosts, filter)
    setPosts(filteredposts)
    console.log(posts)
   
  }
  //reseteaza la starea initiala
  const ResetState=()=>{
    setPosts(allPosts)
    filteredposts = allPosts
  }

   // Pune buton unic pt fiecare Tag
   let tagsList: any[] = []    //lista de taguri initial goala va fi completata ulterior
   let filteredposts: React.SetStateAction<any[]> = [] // lista bloguri filtrate


   props.posts.map((post) => {
       const postTags = post.frontmatter.tags.split(', ') //transforma taglist din string in array

       postTags.forEach((tag: any) => { //pt fiecare tag de mai sus 
        if (!tagsList.includes(tag)) //cauta in talgist sa nu fie acelasi tag
        tagsList.push(tag) //daca nu e il adaugi

     });
   
   
   
    })



   const postsArray = posts.map((post,index)=>(
                
      <Post folder={'tutoriale'} {...post} key={index} />
      ))


    
    return (<>
    <Container fluid>
      <Row>

        <Col md={4} sm={4}>
        <ButtonGroup className='sticky-lg-top position-md-relative d-block' id="sticky-sidebar" vertical>
              <Button active={filter == 'toate categoriile'} onClick={(e) => { ChangeFilter('toate categoriile');  }}>Toate Categoriile</Button>
              {tagsList.map((tag) => {
                return <Button active={filter == tag} onClick={(e) => { ChangeFilter(tag) }}>{tag}</Button> // treci prin fiecare tag si fa un buton cu numele lui
              })}
            </ButtonGroup>
        </Col>

        <Col md={8} sm={12} className="posts">
            {postsArray}
        </Col>
        <Col md={4} sm={12}></Col>
              </Row>
                </Container>

                
              

    </>)
  }




export default TutorialIndex

  export async function getStaticProps(){
      //get files from the posts dir
    const files = fs.readdirSync(path.join('posts/tutorials'))
    //get slug and frontmatter from posts
    const posts = files.map(filename =>{
        //create slug
        const slug = filename.replace('.md', '')
        //get frontmatter
        const markdownWithMeta = fs.readFileSync(path.join('posts/tutorials', filename), 'utf-8')
      const{data:frontmatter} =  matter(markdownWithMeta)

        return{
            slug,
            frontmatter
        }
    })

    console.log(posts)

    return{
        props:{posts}
    };
}
