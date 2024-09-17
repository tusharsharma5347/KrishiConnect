import React, { useState, useRef } from "react";
import { PhoneIcon, MailIcon, LocationMarkerIcon, MicrophoneIcon } from "@heroicons/react/outline";

const ContactUs = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const mediaRecorderRef = useRef(null);

  // Function to handle recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (e) => {
        const audioBlob = new Blob([e.data], { type: "audio/wav" });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioURL(audioUrl);
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Recording failed: ", err);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-[#2874fc] mb-4">
            Get in Touch
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-8">
            We're here to assist you. Reach out to us for any queries, support, or partnerships.
          </p>
        </div>

        {/* Contact Methods Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Call Us */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <PhoneIcon className="h-12 w-12 text-[#2874fc] mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">Call Us</h3>
            <p className="text-gray-600 mt-2">For immediate assistance, call us:</p>
            <a href="tel:+919876543210" className="text-lg font-medium text-[#2874fc] mt-4 inline-block">
              9079999623
            </a>
            <button className="mt-4 mx-4 bg-gradient-to-r from-[#2874fc] to-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transition duration-300">
              Call Us
            </button>
          </div>

          {/* Email Us */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <MailIcon className="h-12 w-12 text-[#2874fc] mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">Email Us</h3>
            <p className="text-gray-600 mt-2">Reach out to us via email for support or queries:</p>
            <a href="mailto:support@krishiconnect.com" className="text-lg font-medium text-[#2874fc] mt-4 inline-block">
              support@krishiconnect.com
            </a>
          </div>

          {/* Visit Us */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <LocationMarkerIcon className="h-12 w-12 text-[#2874fc] mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">Visit Us</h3>
            <p className="text-gray-600 mt-2">Office Address:</p>
            <p className="text-lg font-medium text-gray-700 mt-4">
              IIIT UNA, Saloh, Una  (H.P) - 177209
            </p>
          </div>
        </div>

        {/* Inquiry Form with Voice Message */}
        <div className="bg-white p-12 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
          <h2 className="text-3xl font-semibold text-[#2874fc] text-center mb-8">Send Us a Message</h2>
          <form className="space-y-6">
            <div className="relative">
              <input
                id="name"
                type="text"
                className="peer h-12 w-full border-b-2 border-gray-300 text-lg text-gray-900 placeholder-transparent focus:outline-none focus:border-[#2874fc]"
                placeholder="Enter your name"
                required
              />
              <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-600 text-lg peer-placeholder-shown:text-lg peer-placeholder-shown:top-2.5 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-lg">
                Name
              </label>
            </div>

            <div className="relative">
              <input
                id="email"
                type="email"
                className="peer h-12 w-full border-b-2 border-gray-300 text-lg text-gray-900 placeholder-transparent focus:outline-none focus:border-[#2874fc]"
                placeholder="Enter your email"
                required
              />
              <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-lg peer-placeholder-shown:text-lg peer-placeholder-shown:top-2.5 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-lg">
                Email
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                className="peer h-32 w-full border-b-2 border-gray-300 text-lg text-gray-900 placeholder-transparent focus:outline-none focus:border-[#2874fc]"
                placeholder="How can we help you?"
                required
              ></textarea>
              <label htmlFor="message" className="absolute left-0 -top-3.5 text-gray-600 text-lg peer-placeholder-shown:text-lg peer-placeholder-shown:top-2.5 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-lg">
                Message
              </label>
            </div>

            {/* Voice Message Section */}
            <div className="relative">
              <h3 className="text-lg font-medium text-gray-800">Record a Voice Message:</h3>
              <div className="mt-4 flex items-center space-x-4">
                <button
                  type="button"
                  onClick={isRecording ? stopRecording : startRecording}
                  className={`flex items-center justify-center w-16 h-16 rounded-full shadow-lg hover:shadow-2xl transition duration-300 ${
                    isRecording ? "bg-red-500 animate-pulse" : "bg-green-500"
                  }`}
                >
                  <MicrophoneIcon className="h-8 w-8 text-white" />
                </button>
                {audioURL && (
                  <div className="flex items-center space-x-2 flex-grow">
                    <audio controls src={audioURL} className="w-full"></audio>
                    <button
                      type="button"
                      className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-2xl transition duration-300"
                    >
                      Upload Audio
                    </button>
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#2874fc] to-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transition duration-300 text-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;