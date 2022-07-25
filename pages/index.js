import React, { useEffect, useState } from "react";
import Head from "next/head";
import {usegetHello, usegetBlogs} from './../actions/index';
import NavbarComponent from "Component/NavbarComponent";
import Card from "Component/Card";
import { Row, Col, Container } from "react-bootstrap";
import { getAllBlog } from "lib/api";
import FilterMenu from "Component/FilterMenu";
export default function HomePage({ blogs : initialData }) {
  const [gridView, setView]=useState({
    view:{list:1}
  })
  const promisess= new Promise((resolve,reject)=>{
    reject("hiiii")

  })
  useEffect(()=>{
  //  console.log(1);
  //  setTimeout(()=>{console.log(2)},1000);
  //  setTimeout(()=>{console.log(3)},0);

  //  console.log(4);
   printName()

    // console.log("==", objE)
  },[]);

  function printName() {
    setTimeout(()=>{
      console.log("======",i);
    },1000)
    let i=1;
  }

  // const {data, error}= usegetHello();
  // console.log("data", data);

  const {data:datas, errors} = usegetBlogs(initialData);
  console.log("datas", datas);

  // const dataBLogs = usegetBlogs();
  // console.log("data=====", dataBLogs);
  // if(!datas){
  //   return <div>Loading...</div>
  // }
 
  // useEffect(()=>{
  //  async function getAllData(){
  //     const blogs = await getAllBlog();
  //     return blogs
  //   }
  //   getAllData();
  // },[])
  // console.log(blogs);
  const clickHandler =() =>{
      setView({
        view:{
          list:gridView.view.list==0?1:0
        }
      })
  }
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavbarComponent />
      <Container>
        <hr/>
        <FilterMenu onCLickHabdler ={clickHandler}></FilterMenu>
        <Row xs={1} md={2} className="g-4">
          {/* <h1>fsdf</h1> */}
          {datas?.map((blog) => {
           
            return (
              gridView.view.list ==1 ?
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
            );
          })}
        </Row>
      </Container>
    </>
  );
}

//This function is called during the build time means server side
// provide props to your page
//it will create static page
export async function getStaticProps() {
  const blogs = await getAllBlog();
  return {
    props: {
      blogs,
    },
  };
}

// this is create dynamic page
//this is called run time
// when is used  if you need to pre-render a page with data fetched at request time
// export async function getServerSideProps() {
//   const blogs = await getAllBlog();
//   return {
//     props: {
//       blogs,
//     },
//   };
// }
