import Feed from "@components/Feed"


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover and Share
            <br className="max-md:hidden"></br>
            <span className="orange_gradient text-center">Ai-powered prompts</span>
            </h1>
            <p className="desc text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit laudantium excepturi ducimus aperiam corporis omnis quia in, aspernatur veniam repellendus, eos, ea consequatur. Illo doloribus vero, similique aut pariatur porro!
            </p>
            <Feed/>
    </section>
  )
}

export default Home