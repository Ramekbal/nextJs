import {useSWRPages } from "swr";
import { usegetBlogs } from "actions";
import { Col } from "react-bootstrap";
import Card from "Component/Card";

export const useGetBlogsPages =({blogs:initialData, filter})=>{

return useSWRPages ('index-pages',({offset, withSWR})=>{
    const {data:blogs}= withSWR(usegetBlogs(initialData));
    if(!blogs){return 'Loading...'}

    return blogs?.map((blog) => {
        filter.view.list ==1 ?
          <Col lg="4" key={blog.slug}>
            {" "}
            <Card
              author={blog.author}
              title={blog.title}
              subTitle={blog.subTitle}
              date={blog.date}
              imageUrl={ blog.CoverImage}
              link={{
                href:'blog/[slug]', 
                as:`blog/${blog.slug}`
              }}
            />{" "}
          </Col>
          :
          <Col key={blog.slug}>
            {" "}
            <Card
              author={blog.author}
              title={blog.title}
              subTitle={blog.subTitle}
              date={blog.date}
              imageUrl={ blog.CoverImage}
              link={{
                href:'blog/[slug]', 
                as:`blog/${blog.slug}`
              }}
            />{" "}
          </Col>
      })
},
//here you will compute offeset that will get passed into prepvioue callback function
//SWR: data you will get from wuthSWR function

(SWR, index)=>{
return 0
},
[]
)
}