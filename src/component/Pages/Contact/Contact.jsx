import Swal from "sweetalert2";

const Contact = () => {

  const handleContact = e => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const subject = form.subject.value
    const email = form.email.value
    const message = form.message.value
    const contactData = {name, subject, email, status: 'pending', message}

    fetch('https://harmony-matrimony-server.vercel.app/contact', {
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
          <h1 className="text-5xl font-bold">Contact Us!</h1>
          <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tempore commodi minus eum natus dignissimos? Repellendus exercitationem voluptates, reprehenderit ratione, natus ullam similique atque incidunt eius beatae corrupti deserunt rerum consequatur a voluptatem fuga odit magni perferendis nisi delectus? Temporibus, quaerat laborum! Mollitia modi harum odit corporis quis ea, totam, veritatis eos architecto aut omnis. Delectus, harum perspiciatis. Voluptatem quisquam eaque rerum iusto voluptas doloremque molestiae veritatis, ducimus obcaecati nobis. Praesentium mollitia quasi impedit sequi facilis exercitationem odio nemo iste, ad consequuntur, necessitatibus ipsum. Distinctio earum possimus rem vitae inventore deleniti, facilis, sequi sit vel consequuntur nesciunt voluptas magnam doloremque.</p>
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