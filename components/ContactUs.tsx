export default function ContactUs() {
    return (
        <div className="w-full max-w-[53rem] p-6 flex flex-col py-[58px] px-[1.5rem] md:px-[8rem] items-center gap-[25px] mx-auto">
            <div id="contact-form" className="w-full max-w-[53rem] flex flex-col py-[58px] items-start">
                <h2 className="text-[32px] font-bold tracking-[-.03em] leading-[110%] text-black dark:text-white mb-[16px]">
                    Get in touch
                </h2>

                <p className="text-[16px] font-normal tracking-[.01em] leading-[1.6em] text-[#5a5a5a] dark:text-white/70 mb-[32px] max-w-[600px]">
                    I'm always interested in exploring new opportunities, collaborating, or exchanging ideas with like-minded individuals.
                    Feel free to book a call or email me if you'd like to see my portfolio deck or to discuss a potential project.
                </p>

                <form className="w-full flex flex-col gap-4">
                    <div className="grid md:flex gap-4 w-full">
                        <input
                            placeholder="Full Name"
                            required
                            className="flex-1 bg-[#f2f2f2] dark:bg-[#1a1a1a] border border-[#0000001a] dark:border-white/10 rounded-[14px] px-[24px] py-[14px] text-[16px] outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                            type="text"
                            name="name"
                        />

                        <input
                            placeholder="Email Address"
                            required
                            className="flex-1 bg-[#f2f2f2] dark:bg-[#1a1a1a] border border-[#0000001a] dark:border-white/10 rounded-[14px] px-[24px] py-[14px] text-[16px] outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                            type="email"
                            name="email"
                        />
                    </div>

                    <textarea
                        name="message"
                        placeholder="Write your Message"
                        required
                        className="w-full bg-[#f2f2f2] dark:bg-[#1a1a1a] border border-[#0000001a] dark:border-white/10 rounded-[14px] px-[24px] py-[14px] text-[16px] h-[150px] outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all resize-none"
                    />

                    <button
                        type="submit"
                        className="bg-black dark:bg-white relative text-white dark:text-black py-[14px] px-[24px] rounded-[14px] text-[16px] hover:opacity-90 duration-300 transition-all w-full disabled:opacity-70"
                    >
                        <img
                            alt="Doodle"
                            className="absolute object-cover top-0 left-0 opacity-10 h-full w-full pointer-events-none"
                            src="/images/backgrounds/net.svg"
                        />
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
