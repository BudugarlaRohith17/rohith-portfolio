import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2020-2022",
            title: "Backend Developer",
            company: "Innovation Geeks",
            type: "Fulltime",
            description: "Built backend systems for e‑commerce and ERP apps and improved stability by fixing 20+ production issues.Handled SQL operations and deployments to keep applications fast, consistent, and dependable."
        },
        {
            year: "2022",
            title: "Backend Developer",
            company: "Ezee.ai",
            type: "Fulltime",
            description: "Engineered Node.js APIs and resolved 30+ performance issues while automating 25+ endpoint tests with Selenium, cutting manual QA effort by 60%."
        },
        {
            year: "2022-2024",
            title: "Associate Software Engineer",
            company: "Freightify",
            type: "Fulltime",
            description: "Built automated Python ETL pipelines and microservices that cut manual data entry by 70% and enabled real‑time sync across systems.Containerized and deployed services on AWS ECS, optimizing workflows to process 10,000+ documents/month and reduce latency by 20%. "
        },
        
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 1 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 1 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;