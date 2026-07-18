import "../App.css"

function ContactPage() {

  const ContactOptions = [
    { path: "https://www.instagram.com/soybeansu_/", label: "Instagram", index: 0 },
    { path: "http://www.linkedin.com/in/joyykwok", label: "LinkedIn", index: 1 },
  ]


  return (
    <>

      <section id="center" className="
        flex
        justify-center
        flex-wrap
        lg:flex-nowrap
      ">
        
        <div className="
        text-center m-6 
        flex flex-col 
        justify-center
        w-full
        ">
          <h1 className="text-4xl">
            Reach Out!
          </h1>
          <p className="text-2xl">
            For inquiries about collaboration or questions, do not hesitate to reach out.
          </p>
        </div>

        <div className="
        flex flex-col
        items-center
        w-full
        p-16
        border-l
        ">
          {/* different button for email, bc it's not a link */}
          <button className="contact-button" onClick={copyEmail}>
            <h1 id="emailButton">
              Email
            </h1>
          </button>

          {ContactOptions.map((option) => (
              <button className="contact-button">
                <a href={option.path} target="_">
                  <h1>
                    {option.label}
                  </h1>
                </a>
              </button>
          ))}  
        </div>      
      </section>
    </>
  )
}
export default ContactPage


function copyEmail() {
  navigator.clipboard.writeText("joykwok2006@gmail.com");

  // change the button text temporarily
  document.getElementById("emailButton").textContent = "copied!";
  setTimeout(() => { document.getElementById("emailButton").textContent = "email"; }, 800);
}