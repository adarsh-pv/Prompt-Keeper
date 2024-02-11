
import Feed from "@components/Feed"
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Discover & Share
        <br className="max-md:hidden"/>
        <span className="orange_gradient text-center">AI-Powred Prompts</span>
        </h1> 
        <p className="desc text-center">
          Prompt Ai is an open-slource AI platform.
          modern world to discover to create and Share your thoughts.
        </p>
        <Feed/>
        </section>
  )
}

export default Home