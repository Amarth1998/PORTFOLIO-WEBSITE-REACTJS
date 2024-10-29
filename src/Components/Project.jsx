import React from 'react';

const items = [
  {
    title: "Notion Insurance Broker",
    technology: "React | JavaScript | CSS | Tailwind",
    image: "./assets/nib3.png",
    link: "https://www.notioninsurance.com/"
  },
  {
    title: "XpressTech Free Solution",
    technology: "React | JavaScript | MERN",
    image: "./assets/project-1.png",
    link: "https://amarthp.netlify.app/"
  },
  {
    title: "Multi-Tenant Saas ",
    technology: "Laravel |PHP",
    image: "./assets/saas.png",
    link: "https://github.com/Amarth1998/laravel-10-multi-tenants-multidatabse-stancle-tenancy-spatie-role"
  },
  {
    title: "Bank Website",
    technology: "React | JavaScript",
    image: "bank.webp",
    link: "https://bank-website-reactt.netlify.app/"
  },
  {
    title: "Chai Coffee Website",
    technology: "React | JavaScript",
    image: "./assets/project-3.png",
    link: "https://chai-coffe-website-react.netlify.app/"
  },
  {
    title: "Student Management",
    technology: "React | JavaScript",
    image: "sms.webp",
    link: "https://snazzy-frangipane-2dd892.netlify.app/"
  },
  {
    title: "Portfolio Website",
    technology: "React | JavaScript",
    image: "port.webp",
    link: "https://portfolio-websitereact.netlify.app/"
  },
  {
    title: "Adventure Website",
    technology: "React | JavaScript",
    image: "z.jpeg",
    link: "https://a-world-website.netlify.app/"
  }
];

const Project = () => {
  return (
    <div className="container mx-auto p-4 flex flex-wrap justify-center gap-16 mt-10  ">
      {items.map((item, index) => (
        <div
          key={index}
          className="max-w-xs w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 
          transform  hover:scale-105"
        
          
        >
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img
              className="rounded-t-lg w-full h-40 object-cover"
              src={item.image}
              alt={`${item.title} Thumbnail`}
            />
          </a>
          <div className="p-5">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
            </a>
            <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
              {item.technology}
            </p>
            <button
              onClick={() => window.open(item.link, "_blank")}
              className="inline-flex items-center px-10 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Live
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
