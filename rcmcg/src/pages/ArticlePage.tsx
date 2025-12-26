// import {useParams} from "react-router";
import Header from "../components/header/Header.tsx";
import Article from "../components/article/Article.tsx";

function ArticlePage() {
  // TOOD: Use when fetching article from backend
  // const params = useParams();
  // const articleId = params.articleId;

  return (
    <>
      <Header />
      <div className={"viewing-margin"}>
        <Article title={"init"} date={"December 24th, 2025"} />
      </div>
    </>
  )
}

export default ArticlePage