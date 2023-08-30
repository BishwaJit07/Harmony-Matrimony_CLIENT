import Swal from "sweetalert2";
import Heading from "../../../Shared/Heading";

const Contact = () => {

  const handleContact = e => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const subject = form.subject.value
    const email = form.email.value
    const message = form.message.value
    const contactData = {name, subject, email, status: 'pending', message}

    fetch('https://soulmates-server-two.vercel.app/contact', {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(contactData)
      })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Thank you',
              showConfirmButton: false,
              timer: 1500
            })
          } 
        })
  }
  
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-1/2">
           <Heading title="Contact"/>
          <p className="py-6 text-2xl">We're here to help you on your journey towards finding a lifelong partner. At <span className="text-red-500 ">'Soulmate Matrimony'</span> , we value your feedback, questions, and suggestions. <br /> Whether you have inquiries about our services, need assistance with your profile, or simply want to share your success story, our dedicated support team is ready to assist you. <br /> Feel free to reach out to us through the contact form . Your satisfaction and happiness are our top priorities, and we look forward to being a part of your quest to find love and companionship..</p>
        </div>
        <div className="card w-1/2 shadow-2xl bg-base-100">
          <form onSubmit={handleContact} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="Name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input type="text" name="subject" placeholder="Subject" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              {/* <input type="text" placeholder="password" className="input input-bordered" /> */}
              <textarea rows={5} name="message" className="textarea textarea-primary" placeholder="Message"></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;