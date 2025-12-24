import Header from "../components/header/Header.tsx";
import Article from "../components/article/Article.tsx";

function Blog() {
  return (
    <>
      <Header />
      <Article
        title={"init"}
        date={"December 24th, 2025"}
      />
    </>
  )
}

export default Blog