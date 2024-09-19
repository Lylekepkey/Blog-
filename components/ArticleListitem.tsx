import Link from "next/link"
import type { ArticleItem } from "@/types"

interface Props {
    category: string
    article: ArticleItem[]
}

const ArticleItemsList = ({category, article}: Props) => {
    return (
        <div className="flex flex-col gap-5">
            <h2 className="font-cormorant-garamond text-4xl">{category}</h2>
                <div className="flex flex-col gap-2.5 font-poppins text-lg">
                    {
                        article.map((article, id) => (
                            <Link 
                            href={`/${article.id}`}
                            key={id}
                            className="text-neutral-100 hover:text-amber-700 transition duration-150"
                            >
                                {article.title}
                            </Link>
                        ))
                    }
                </div>
        </div>
    )
}

export default ArticleItemsList