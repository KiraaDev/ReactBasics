import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      {/* using the navbar component */}
      <Navbar />
      <div className="flex justify-around items-center h-[90svh]">
        <div className="grid grid-cols-2 w-full h-full">
          {/* using the home and about page */}
          <Home />

          <About />
        </div>
      </div>
      {/* using the footer component */}
      <Footer />
    </>
  )
}

export default App
