type Props = {}

export const Navigation = ({}: Props) => {
  const liStyle = 'mx-4 hover-underline-animation'

  return (
    <nav className="sticky top-0 z-30 bg-white/40">
      <ul className="text-black flex justify-end p-4 w-full">
        <li className={liStyle}>
          <a href="#about">About</a>
        </li>
        <li className={liStyle}>
          <a href="#skills">Skills</a>
        </li>
        <li className={liStyle}>
          <a href="#projects">Projects</a>
        </li>
        <li className={liStyle}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
