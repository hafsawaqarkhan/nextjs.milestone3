import React from 'react'

function page() {
  return (
    <div>
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-4">
  <div className="col-span-1 bg-white shadow-lg p-6 rounded">
    <div className="mb-8">
      <div className="flex items-center space-x-4">
        <div className=""><i className="fas fa-phone-alt text-3xl"></i> </div>
        <h3 className="text-xl font-medium">Call To Us</h3>
      </div><p className="mt-4 text-gray-500">
        We are available 24/7, 7 days a week.
      </p>
      <p className="mt-2 font-medium text-gray-700">Phone: +1 234 567 890</p>
    </div><hr/>
    <div className="mt-8">
      <div className="flex items-center space-x-4">
        <div className="">
          <i className="fas fa-envelope text-3xl"></i></div>
        <h3 className="text-xl font-medium">Write To Us</h3>
      </div>
      <p className="mt-4 text-gray-500">
        Fill out our form, and we will contact you within 24 hours.
      </p>
      <p className="mt-2 text-gray-700">
        Emails: <br />
        <span className="font-medium">support@coffeehub.com</span> <br />
       
      </p>
    </div>
  </div>
  <div className="col-span-2 bg-white shadow-lg p-6 rounded">
    <h3 className="text-xl font-medium mb-6">Send Us a Message</h3>
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Your Name *"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#A77D54]"/>
        <input
          type="email"
          placeholder="Your Email *"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#A77D54]"/>
        <input
          type="text"
          placeholder="Your Phone *"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#A77D54]"/>
      </div>
      <textarea
        placeholder="Your Message" rows={6}
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#A77D54]"></textarea>
      <button 
        type="submit"
        className="bg-[#A77D54] text-white px-6 py-2 rounded font-bold focus:ring-2"
      >
        Send Message</button>
    </form>
  </div>
</div>


    </div>
  )
}

export default page
