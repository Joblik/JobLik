import React from 'react'
import Post from "../components/Posts"
import Header from "../components/Header";
import Layout from "../components/Layout"; 
function Posts() {
  return (
     <Layout>
      <Header breadcrumbs={["Pages", "Posts"]}>
        <Post />
      </Header>
    </Layout>
  )
}

export default Posts

