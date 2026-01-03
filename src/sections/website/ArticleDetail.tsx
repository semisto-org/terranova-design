import data from '@/../product/sections/website/data.json'
import { ArticleDetail } from './components/ArticleDetail'

export default function ArticleDetailPreview() {
  // Pick a featured article for the preview
  const article = data.articles.find((a) => a.isFeatured) || data.articles[0]

  // Get the lab for this article
  const lab = data.labs.find((l) => l.id === article.labId) || data.labs[0]

  // Get related articles (same category, excluding current)
  const relatedArticles = data.articles
    .filter((a) => a.id !== article.id)
    .slice(0, 3)

  return (
    <ArticleDetail
      article={article}
      lab={lab}
      relatedArticles={relatedArticles}
      onBack={() => console.log('Navigate back')}
    />
  )
}
