import Head from 'next/head'
export default function Home() {
  const title = 'サンプルアプリ'
  return (
    <>
      <Head>
        <tite>{ title }</tite>
      </Head>
      <h1 className='site-title'>{title}</h1>
      <p>next.jsのサンプルアプリです。</p>
    </>
  )
}