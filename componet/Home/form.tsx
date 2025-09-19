"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState ("")
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 

    
    try {
      await fetch("https://formspree.io/f/xyzdbwwz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name,email, message }),
      });

      setStatus("✅ Thank you! Your message was sent.");
      setName(""); 
      setMessage("");
      setEmail("")
        setTimeout(() => {
        setStatus("");
      }, 3000);
    } catch (err) {
      setStatus("❌ Something went wrong. Please try again.");
       setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  };

  return (
    <div>
     < div className="mt-30 w-[100%]h-auto px-3 flex justify-center items-center " data-aos="fade-up"> 
      <form  onSubmit={handleSubmit} className="w-[100%] bg-gray-400 max-w-150 px-5 py-8 md:px-5 rounded-xl flex flex-col justify-center items-center gap-5 relative" >
         {status && <p className="mt-3 text-black absolute top-16">{status}</p>}
        <h1 className="text-center text-3xl text-black font-bold mb-5">Contact Me</h1>
        <div>
          < label htmlFor="name">Name</label>
          <input type="text" name="name" value={name}
        onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email"  value={email}
        onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Message</label>
          <textarea  value={message}
        onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
        <div>
          < button className="bg-orange-600 rounded-xl h-15 text-white transition duration-500 ease-in-out hover:translate-y-[-3px] ">Send Message</button>
        </div>

      </form>
      </div> 

    </div>
    
    
  );
}
