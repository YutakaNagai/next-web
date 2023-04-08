import Head from 'next/head'
import Link from 'next/link'

import Styles from '../styles/Home.module.css'

import Header from './components/header'
import Content from './components/content'

const meta = {
  title: 'サンプルアプリ'
}

export default function Home() {
  return (
    <Content>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Header title={meta.title} />
      <p>next.jsのサンプルアプリです。</p>
      <div>
        <Link href="/about">About</Link>
      </div>
      <style jsx>{`
        h1 {
          color: white;
        }
      `}
      </style>
    </Content>
  )
}
