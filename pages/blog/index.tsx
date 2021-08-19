import fs from 'fs'
import path from 'path'
import React from "react"
import { Alert, Button } from "react-bootstrap"
import Image from "next/image"

function BlogIndex(){

    return (<>
        <Alert variant={'warning'}>
            <Button href='/'>Acasa</Button>
    
        <h1  className='text-center d-block'>Aceasta Pagina Va fi Disponibila incurand</h1>
        </Alert>
        <div className='d-flex flex-column justify-content-center align-content-center text-center mx-auto my-auto' >
            <Image  src='/img/construction/construction.gif' alt='construction img' width={300} height={300}  layout='intrinsic'/>
        </div>
    
        
        
        <style>{`
            
            body{
                
               min-height:100vh;
                
                background-repeat: no-repeat;
                background-size: contain;
                background-position: 50% 10%;
                background-blend-mode:normal ;
            }
    
    
            `}</style>
        </>)
      }


      export async function getStaticProps(){
          const files = fs.readdirSync(path.join('posts/blogs'))
          console.log(files)
          
      }

export default BlogIndex