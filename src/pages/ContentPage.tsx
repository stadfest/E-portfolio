import { Blocks } from '../components/Blocks'
import type { Page } from '../content/types'

export function ContentPage({ page }: { page: Page }) {
  return (
    <article className="pt-6">
      <h1>{page.title}</h1>
      {page.intro && <p className="mt-2 text-zinc-600 dark:text-zinc-400">{page.intro}</p>}
      <Blocks blocks={page.blocks} />
    </article>
  )
}
