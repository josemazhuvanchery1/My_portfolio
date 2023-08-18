"use client";
import Image from "next/image";
import React, { useState, ChangeEvent, FormEvent } from "react";
import contactImg from "../public/Assets/contact.png";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import internal from "stream";
import { sendContactForm } from "@/lib/api";

const initState = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
  const [state, setState] = useState(initState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setIsSent(false);
  };
  const isFormIncomplete =
    !state.name || !state.email || !state.subject || !state.message;
  const onSubmit = async () => {
    setIsLoading(true);

    try {
      await sendContactForm(state);
      setState(initState);
      setIsSent(true);
      setError("");
      console.log("message sent")
    } catch (error:any) {
      setIsLoading(false);
      setError(error.message);
    }finally {
      setIsLoading(false); 
    }
  };
  console.log(isSent)
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onSubmit();
  };

  // console.log(state)

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#2929ac]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}

          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={contactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Jose Mazhuvanchery</h2>
                <p>Full Stack Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with me</p>
                <div className="flex items-center justify-between py-4">
                  <a href="https://www.linkedin.com/in/jose-mazhuvanchery/">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a href="https://github.com/josemazhuvanchery1">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <a href="mailto:jose1998mathew@gmail.com">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </a>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Name</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                    value={state.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows={10}
                    name="message"
                    value={state.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                {!error && isFormIncomplete && !isLoading && (
                  <p className="text-red-500">
                    Please fill out all required fields
                  </p>
                )}
                {isSent && <p className="text-green-500">Message has been sent!</p>}
                <button
                  disabled={isFormIncomplete}
                  onClick={handleButtonClick}
                  className={isSent?"w-full p-4 text-gray-100 mt-4 bg-gradient-to-r from-[#48d354] to-[#b8f6c2]":"w-full p-4 text-gray-100 mt-4"}
                >
                  {isLoading ? "Sending..." : isSent ? "Sent!" : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#2929ac]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
