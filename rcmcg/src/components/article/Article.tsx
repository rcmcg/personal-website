import {useEffect, useState} from "react";

interface IArticle {
  title: string
  date: string
}

function Article( {title, date}: IArticle ) {

  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState<string>("");

  useEffect(() => {
    fetch('https://lorem-api.com/api/article/foo')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setArticle(data['content']);
        setIsLoading(false);
      })
  }, []);

  return (
    <div className={"_article"}>
      <h3>{title}</h3>
      <div className={"article-date"}>{date}</div>
      {!isLoading &&
          <article>
            {article}
          </article>
      }

    </div>
  )
}

export default Article