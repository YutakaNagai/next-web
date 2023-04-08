import Header from '../components/header'
import Content from '../components/content'

export default function About() {
  const meta = {
    title: 'About'
  }
  return (
    <Content>
      <Header title={meta.title} />
    </Content>
  )
}