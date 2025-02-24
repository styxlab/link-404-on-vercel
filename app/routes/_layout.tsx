import { Outlet, useLoaderData } from '@remix-run/react'

export const config = { runtime: 'edge' }

export const loader = async () => {
console.log('loader')
  return { text: 'hello world' }
}

export default function Layout() {
  const { text } = useLoaderData<typeof loader>()
  console.log('text', text)

  return (
      <Outlet />
  )
}
