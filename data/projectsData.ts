interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Treasure Box',
    description: `Treasure Box 带给你最好的 ChatGPT, OLLaMA, Gemini, Claude WebUI 使用体验`,
    imgSrc: '/static/images/20240907090710.png',
    href: 'https://www.liaoliao.love',
  },
  {
    title: 'Screen2Code',
    description: `一个简单的工具，可以使用 AI 将截图、设计稿和 Figma 设计转换为干净、功能齐全的代码。`,
    imgSrc: '/static/images/avatar.gif',
    href: 'http://screen.liaoliao.love',
  },
]

export default projectsData
