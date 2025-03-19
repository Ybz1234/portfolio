import { useEffect, useState } from "react"

import About from "./components/About"
import BackEnd from "./components/BackEnd"
import Banner from "./components/Banner"
import Databases from "./components/Databases"
import Environments from "./components/Environments"
import Footer from "./components/Footer"
import FrontEnd from "./components/FrontEnd"
import MoreLanguages from "./components/MoreLanguages"
import Nav from "./components/Nav"

import { BallTriangle } from "react-loader-spinner"
import Styling from "./components/Styling"
import { MackBookContainer } from "./components/MackBookContainer"
import { SparklesContainer } from "./components/SparklesContainer"

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <>
      {
        loading ?
        <div className="bg-slate-900 h-[100vh] flex justify-center items-center"><BallTriangle height={100} width={100} radius={5} color="#d946ef" ariaLabel="ball-triangle-loading" wrapperStyle={{}} wrapperClass="" visible={true}/></div>
          :
          <div className="bg-slate-900">
            <Nav />
            <Banner />
            <About />
            <BackEnd />
            <Databases />
            <FrontEnd />
            <Styling />
            <MoreLanguages />
            <Environments />
            <MackBookContainer />
            <SparklesContainer />
            <Footer />
          </div>
      }
    </>
  )
}

export default App
