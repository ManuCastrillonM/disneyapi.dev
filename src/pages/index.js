import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Hero from '../components/hero/hero'
import ApiDemo from '../components/apiDemo/apiDemo'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <ApiDemo />
  </Layout>
)

console.log(
  `%c
⠀⠀⠀⢀⣀⣠⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⠀⠀⠀⠀
⠀⢀⣴⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣦⡀⠀
⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄
⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁
⠀⠀⠉⠛⠛⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠛⠛⠉⠀⠀ Hello Dev Friends!
⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⠿⣿⣿⡿⠿⠟⠋⠀⠀⠀⠀⠀⠀⠀⠀
`,
  'color: red; background: white; font-size: 14px'
)
export default IndexPage
