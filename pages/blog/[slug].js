import React from 'react';
import { useRouter } from 'next/router';
import {getBlogBySlug, getAllBlog} from "lib/api";
import {Card, Button} from "react-bootstrap";
import BlockContent from "../../Component/BlockContent";


export default function BlogDetails(result) {
    const {query}= useRouter();
    //query?.slug slug is coming from dynamic route name what is write [] the braces
    console.log("sdsdsd111111", result);
  return (
    <>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={result.author?.avatar} />
    <Card.Text>
    {result.author?.name}
  </Card.Text>
<Card.Img variant="top" src={result.CoverImage} />
<Card.Body>
  <Card.Title>{result.title}</Card.Title>
 
  <Card.Text>
    {result.date}
  </Card.Text>
  <Card.Text>
    {result.subTitle}
  </Card.Text>
</Card.Body>
</Card>
<hr/>
 <BlockContent
 content={result.content}/>
 </>
  )
}

// export async function getServerSideProps({params}){
//     // console.log("params",params?.slug)
//     const result = await getBlogBySlug(params?.slug);
//     console.log("result===", result);
//     return {
//         props:{...result}
//     }

// }

export async function getStaticProps({params}){
    const result = await getBlogBySlug(params?.slug);
    console.log("result===", result);
    return {
        props:{...result}
    }

}
export async function getStaticPaths(){
   const allBlogData = await getAllBlog();
   const paths = allBlogData?.map(blog =>{
    return {
        params:{slug:blog.slug} 
    }
   })
return {
    paths,
    // paths:[{
    //     params:{slug:"my-first-blog"}
    // },
    // {
    //     params:{slug:"my-third-blog"}
    // },
    // {
    //     params:{slug:"my-second-blog"}
    // }],
    fallback:false
}
}