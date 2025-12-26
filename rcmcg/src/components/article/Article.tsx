interface IArticle {
  title: string
  date: string
}

function Article( {title, date}: IArticle ) {
  return (
    <div className={"_article"}>
      <h3>{title}</h3>
      <div className={"article-date"}>{date}</div>
      <div className={"text"}>
        <div>
          Welcome to my website! I've always wanted one but I've never taken the plunge. Why? Well, ego.
          Putting something out into the world means being judged and rejected. How awful!
        </div>
        <br/>
        <div>
          I have created
          a few personal websites but they're hidden away in private repositories. Knowing someone may look at the code
          paralyzes me with perfectionism. Every time I wrote some ugly, jank code, I immediately thought "someone might
          see this and think I'm a bad programmer. I need to fix it." And so I agonized over the perfect
          way to solve the problem. Such a glacial pace.
          Besides the code quality, I similarly stressed over the
          appearance of the UI. I looked at personal websites of others and compared myself endlessly,
          which demotivated me.
        </div>
        <br/>
        <div>
          I said as much to a few friends over lunch recently. The most experienced among
          us, <a href={"https://jhuang.ca/"} target="_blank">Jarrett Huang</a>, made a great
          point. I don't remember his exact words, but he basically said, "show it off anyway, even if it's garbage.
          You can improve it over time. You can even start over! But you have to start somewhere." Another
          friend, <a href={"https://joeyshi.xyz/"} target="_blank">Joey Shi</a>, said there are 2 priorities in software development:
          <ol>
            <li>
              Get it working
            </li>
            <li>
              Code quality (ego)
            </li>
          </ol>
          <div>
            Of course, code quality is not just about ego. It's about maintainability, extensibility, testability,
            and readability. But the part that was blocking me was my ego.
          </div>
          <br/>
          <div>
            So anyway, here it is, and here's <a href={"https://github.com/rcmcg/personal-website"} target="_blank">the repo</a>.
            Judge away, I don't care. Well, I do, obviously, I'm only human,
            but I'm going to continue anyway.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article