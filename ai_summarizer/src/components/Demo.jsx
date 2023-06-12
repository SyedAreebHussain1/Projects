import { useState } from "react";
import { linkIcon } from "../assets";

import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: ''
  })


  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery()



  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('useLazyGetSummaryQuery', useLazyGetSummaryQuery)
    console.log('article', article)
    console.log('getSummary', getSummary)
    console.log('error', error)
    console.log('isFetching', isFetching)
    const { data } = await getSummary({ articleUrl: article.url })
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary }
      setArticle(newArticle)
      console.log('newArticle',newArticle)
    }
  }

  return (
    <section className='mt-16 w-full max-w-xl'>
      {/* Search */}
      <div className="flex flex-col w-full gap-2">
        <form action="" onSubmit={handleSubmit} className="relative flex justify-center items-center">
          <img src={linkIcon} className="absolute left-0 my-2 ml-3 w-5" alt="link_icon" />
          <input type="url" value={article.url} placeholder="Enter a URL" onChange={(e) => setArticle({ ...article, url: e.target.value })} required className="url_input peer" />
          <button
            type='submit'
            className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 '
          >
            <p>↵</p>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Demo