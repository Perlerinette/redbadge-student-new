import React, { useState, useEffect } from "react";
import { Container, Media } from "reactstrap";

const FunctionFetchOnload = (props) => {
  const [blogPostData, setBlogPostData] = useState([]);

  function fetchBlogData() {
    const url = "https://jsonplaceholder.typicode.com/comments?postId=1";
    fetch(url)
      .then((res) => res.json())
      // .then((json) => console.log(json))
      .then((json) => setBlogPostData(json));
  }
  function displayBlogPosts() {
    return blogPostData.map((data) => (
      <Media>
        <Media left href="#">
          <Media
            object
            src="https://picsum.photos/60"
            alt="Generic placeholder image"
            style={{ marginRight: "10px" }}
          />
        </Media>
        <Media body>
          <Media heading>{data.name.toUpperCase()}</Media>
          {data.body}.
          <p>
            Email: <a href={`mailto:${data.email}`}>{data.email}</a>
          </p>
        </Media>
      </Media>
    ));
  }

  useEffect(() => {
    fetchBlogData();
  }, []);
  return (
    <Container>
      <h3>From the Function</h3>
      {displayBlogPosts()}
    </Container>
  );
};

export default FunctionFetchOnload;
