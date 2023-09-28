import DateFormatter from './date-formatter'
import Link from 'next/link'

type Props = {
  title: string
  date: string
  slug: string
}

const PostPreview = ({
  title,
  date,
  slug,
}: Props) => {
  return (
    <div>
      <h3 className="text-xl mb-3 leading-snug font-bold">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-sm mb-4">
        <DateFormatter dateString={date} />
      </div>
    </div>
  )
}

export default PostPreview
