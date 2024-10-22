import Link from '@/components/Link'
import Image from 'next/image'
import { Blog } from 'contentlayer/generated'
import { CoreContent } from 'pliny/utils/contentlayer'
import siteMetadata from '@/data/siteMetadata'

const PostCard = ({ post }: { post: CoreContent<Blog> }) => {
  const { slug, date, title, summary, tags, images } = post
  return (
    <Link href={`/blog/${slug}`}>
      <article className="dark:bg-dark-100 mx-auto overflow-hidden rounded-xl duration-300 hover:scale-105 hover:shadow-md">
        <Image
          src={images?.[0] ?? '/static/images/ocean.jpeg'}
          className="aspect-video w-full object-cover"
          width={1600}
          height={900}
          alt=""
        />
        <div className="p-3">
          <h2 className="text-xl font-extrabold">{title || slug}</h2>
          <section className="text-gray-500">
            <p className="truncate">{summary}</p>
          </section>
          <span className="ml-1 text-sm font-bold text-gray-600">
            <time dateTime={date}>
              {new Date(date).toLocaleDateString(
                siteMetadata.locale,
                siteMetadata.postDateTemplate
              )}
            </time>
          </span>
          {/* <div className="mt-1 flex flex-row space-x-3">
            {tags &&
              tags.map((tag) => (
                <div
                  key={tag}
                  className={
                    'rounded-md border-2 bg-gradient-to-r from-lime-500 to-yellow-400 bg-clip-text px-2 text-sm font-bold text-transparent'
                  }
                >
                  {tag}
                </div>
              ))}
          </div> */}
        </div>
      </article>
    </Link>
  )
}

export default PostCard
