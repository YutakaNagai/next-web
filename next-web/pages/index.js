import Head from 'next/head'
const meta = {
  title: 'サンプルアプリ'
}

export default function Home() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <h1>{meta.title}</h1>
      <p>next.jsのサンプルアプリです。</p>
    </>
  )
}
