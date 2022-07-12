import React from "react";
import Head from "next/head";
import NavbarComponent from "Component/NavbarComponent";
import Card from "Component/Card";
import { Row, Col, Container } from "react-bootstrap";
import { getAllBlog } from "lib/api";
export default function HomePage({ blogs }) {
  console.log(blogs);
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
        <Row xs={1} md={2} className="g-4">
          {/* <h1>fsdf</h1> */}
          {blogs.map((blog) => {
            return (
              <Col lg="4" key={blog.slug}>
                {" "}
                <Card
                  author={blog.author}
                  title={blog.title}
                  subTitle={blog.subTitle}
                  date={blog.date}
                  imageUrl={blog.CoverImage}
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
