const Footer = () => {
  return (
    <>
      <div className="flex gap-20 justify-center items-center">
        <p className="text-[#fdfdfd] text-sm">
          We protect your data.{" "}
          <span className="text-primary">More on Security</span>
        </p>

        <div className="flex ">
          <div className="flex gap-8 text-[15px]">
            <div className="flex gap-1 items-center">
              <img
                className="w-5 h-5"
                src="./homepage/check-right-icon.svg"
                alt=""
              />
              <p>
                <span className="text-[#fdfdfd]"> SOC2 Type 2</span> Certified
              </p>
            </div>

            <div className="flex gap-1 items-center">
              <img
                className="w-5 h-5"
                src="./homepage/check-right-icon.svg"
                alt=""
              />
              <p>
                <span className="text-[#fdfdfd]"> HIPAA Compliant</span>{" "}
                Compliant
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="w-full mx-auto my-10 py-30 px-24 border-y border-y-zinc-700">
          <div className="w-full grid grid-cols-6 gap-8">
            <div className="col-span-2">
              <div className="w-42">
                <img
                  className="object-contain"
                  src="/logo-img.png"
                  alt="logo-img"
                />
              </div>
              <div className="flex w-42 justify-between mt-8 opacity-50">
                <img src="./homepage/twitter-x-icon.svg" alt="" />
                <img src="/github-icon.svg" alt="" />
                <img src="/discord-icon.svg" alt="" />
                <img src="/youtube-icon.svg" alt="" />
              </div>
            </div>
            {FooterData.map((key, index) => (
              <div key={index}>
                <div className="col-span-1">
                  <h2 className="text-[#fdfdfd] text-sm mb-2">{key.title}</h2>
                  {key.links.map((k, ind) => (
                    <div
                      key={ind}
                      className="py-1 text-[13px] hover:text-[#fdfdfd] cursor-pointer"
                    >
                      <span>{k}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-11/12 mx-auto mb-30 text-[12px] flex justify-between items-center">
          <span>&copy; Supabase Inc</span>
          <img
            className="opacity-70 w-5 h-5"
            src="/dark-theme.svg"
            alt="theme"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;

const FooterData = [
  {
    title: "Product",
    links: [
      "Database",
      "Auth",
      "Functions",
      "Realtime",
      "Storage",
      "Vector",
      "Cron",
      "Pricing",
      "Launch Week",
    ],
  },

  {
    title: "Resources",
    links: [
      "Support",
      "System Status",
      "Become a Partner",
      "Integrations",
      "Brand Assets / Logos",
      "Security and Compliance",
      "DPA",
      "SOC2",
      "HIPAA",
    ],
  },

  {
    title: "Developers",
    links: [
      "Documentation",
      "Changelog",
      "Contributing",
      "Open Source",
      "SupaSquad",
      "DevTo",
      "RSS",
    ],
  },

  {
    title: "Company",
    links: [
      "Customer Stories",
      "Careers",
      "Company",
      "Events & Webinars",
      "General Availability",
      "Terms of Service",
      "Privacy Policy",
      "Privacy Settings",
      "Acceptable Use Policy",
      "Support Policy",
      "Service Level Agreement",
      "Humans.txt",
      "Lawyers.txt",
      "Security.txt",
    ],
  },
];
