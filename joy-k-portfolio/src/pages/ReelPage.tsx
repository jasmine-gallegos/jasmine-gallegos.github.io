import "../App.css"
import NavBar from '../components/NavBar'

function ReelPage() {

  return (
    <>
      <section id="center" className="">
        
        <h1 className="
        text-4xl
        text-center
        mb-3
        ">
          Demo Reel
        </h1>

        <div className="flex justify-center mb-10">
          <video width="1120" height="960" controls autoPlay src="projects/Final Animation.mp4">
          Your browser does not support the video tag.
          </video>
        </div>


      </section>
    </>
  )
}

export default ReelPage;
