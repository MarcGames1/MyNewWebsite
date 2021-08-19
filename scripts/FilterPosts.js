
 function filterPosts (posts, filter)  {
     let filteredPosts=[]
    posts.map((post)=>{
        if(filter==='toate categoriile'){
            console.log('filterposts.js')
            console.log(post)
            filteredPosts.push(post)
        }else {
            let tagsString = post.frontmatter.tags
            
         let  tags =  tagsString.split(', ')
            tags.forEach(tag=>{
               if (tag == filter) //cauta in talgist sa nu fie acelasi tag
               filteredPosts.push(post) //daca nu e il adaugi
               
            })
        }
    })
    
 
 
     
return filteredPosts
 }
export default filterPosts