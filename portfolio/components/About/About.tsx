type Props = {}

export const About = ({}: Props) => {
  const liStyle = 'mx-4'

  return (
    <div className="z-20 bg-tv-tower bg-fixed bg-bottom bg-cover bg-no-repeat relative">
      <div className="container mx-auto pt-40 pb-96" id="about">
        <h1 className="h1 text-white fixed"> Tanja Aylin Rosner</h1>
        <p className="text-white fixed pt-80">Frontend focused Software Developer from Berlin </p>
      </div>
    </div>
  )
}

export default About
