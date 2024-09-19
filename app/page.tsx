import ArticleItemsList from "@/components/ArticleListitem"
import { getCategoriesedArticles } from "@/lib/articles"

const HomePage = () => {
  const articles = getCategoriesedArticles()
  // console.log(articles)
  return (
    <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20">
      <header className="font-cormorant-garamond) font-light text-neutral-100 text-6xl text-center">
        <h1>Minimal Blog</h1>
      </header>
      <section className="md-grid md-grid-cols-2 flex flex-col gap-10">
            {/* Display article */}
          {articles !== null && 
           Object.keys(articles).map((article) => (
            <ArticleItemsList
            category={article}
            article={articles[article]}
            key={article}
            />
           ))
          }

      </section>
    </section>
  )
}

export default HomePage
