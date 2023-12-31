import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import type Author from '../interfaces/author'

type Props = {
  title: string
  date: string
}

const PostHeader = ({ title, date }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
        <div className="mb-6 text-sm text-right italic text-slate-500">
          <DateFormatter dateString={date} />
        </div>
    </>
  )
}

export default PostHeader
