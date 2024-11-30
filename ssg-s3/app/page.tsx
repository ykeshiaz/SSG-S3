import { BlogPosts } from 'components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Are you inspired by the little things? So am I! That's why I made this page. As a creative,
        It exists to highlight my many talents and passions. I hope to share my code, my baking recipes,
         my makeup and fashion right here on this page. 
        `}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
