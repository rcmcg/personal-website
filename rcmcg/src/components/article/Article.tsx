interface IArticle {
  title: string
  date: string
  article: string
}

function Article( {title, date, article}: IArticle ) {

  return (
    <div className={"_article"}>
      <h3>{title}</h3>
      <div className={"article-date"}>{date}</div>
      <article>
        {article}
      </article>
    </div>
  )
}

export default Article