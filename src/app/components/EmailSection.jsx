"use client";
import React, { useState } from "react";
import Link from "next/link";

const GithubIcon = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    aria-hidden="true"
  >
    <path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 31.66536 35.956939 38.122519 29 40.251953 L 29 35.136719 C 29 33.226635 27.899316 31.588619 26.308594 30.773438 A 10 8 0 0 0 32.4375 18.720703 C 32.881044 17.355414 33.376523 14.960672 32.199219 13.076172 C 29.929345 13.076172 28.464667 14.632086 27.765625 15.599609 A 10 8 0 0 0 24 15 A 10 8 0 0 0 20.230469 15.59375 C 19.529731 14.625773 18.066226 13.076172 15.800781 13.076172 C 14.449711 15.238817 15.28492 17.564557 15.732422 18.513672 A 10 8 0 0 0 21.681641 30.779297 C 20.3755 31.452483 19.397283 32.674042 19.097656 34.15625 L 17.783203 34.15625 C 16.486203 34.15625 15.98225 33.629234 15.28125 32.740234 C 14.58925 31.851234 13.845172 31.253859 12.951172 31.005859 C 12.469172 30.954859 12.144453 31.321484 12.564453 31.646484 C 13.983453 32.612484 14.081391 34.193516 14.650391 35.228516 C 15.168391 36.160516 16.229687 37 17.429688 37 L 19 37 L 19 40.251953 C 12.043061 38.122519 7 31.66536 7 24 C 7 14.593391 14.593385 7 24 7 z" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z" />
  </svg>
);

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-foreground my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-muted-foreground mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <Link
          href="mailto:yimesgenamanuel1@gmail.com"
          className="text-foreground hover:text-sky-500 font-medium mb-4 inline-block transition-colors"
        >
          yimesgenamanuel1@gmail.com
        </Link>
        <div className="socials flex flex-row gap-4">
          <Link
            href="https://github.com/yimesgen7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-sky-500 transition-colors"
            aria-label="GitHub profile"
          >
            <GithubIcon className="h-10 w-10" />
          </Link>
          <Link
            href="https://linkedin.com/in/yimesgen-amanuel-627a60343"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-sky-500 transition-colors"
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon className="h-10 w-10" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-foreground block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-card border border-border placeholder-muted-foreground text-foreground text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 outline-none transition-colors"
                placeholder="yimesgenamanuel1@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-foreground block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-card border border-border placeholder-muted-foreground text-foreground text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 outline-none transition-colors"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-foreground block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-card border border-border placeholder-muted-foreground text-foreground text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 outline-none transition-colors"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-sky-500 hover:bg-sky-600 text-white font-medium py-2.5 px-5 rounded-lg w-full shadow-sm shadow-sky-500/25 transition-colors"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
