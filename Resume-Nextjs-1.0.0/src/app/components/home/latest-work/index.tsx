"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";

const LatestWork = () => {
  const [workData, setWorkData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/work-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setWorkData(data?.workData);
      } catch (error) {
        console.error("Error fetching work data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle external link click
  const handleProjectClick = (url: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  if (loading) {
    return (
      <section>
        <div className="bg-softGray">
          <div className="container">
            <div className="py-16 xl:py-32 text-center">
              <p>Loading projects...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="bg-softGray">
        <div className="container">
          <div className="py-16 xl:py-32">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2>Latest Works</h2>
              <p className="text-xl text-orange-500">( {workData?.length || 0} )</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12">
              {workData?.map((value: any, index: number) => (
                <div
                  key={index}
                  className="group flex flex-col gap-3 xl:gap-6 cursor-pointer"
                  onClick={() => handleProjectClick(value?.slug)}
                >
                  <div className="relative">
                    <Image
                      src={getImgPath(value?.image)}
                      alt={value?.title || "Project image"}
                      width={570}
                      height={414}
                      className="rounded-lg w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 backdrop-blur-xs bg-primary/15 w-full h-full hidden group-hover:flex rounded-lg items-center justify-center">
                      <span className="flex justify-center items-center p-5">
                        <svg
                          width="65"
                          height="64"
                          viewBox="0 0 65 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.333374"
                            width="64"
                            height="64"
                            rx="32"
                            fill="#FE4300"
                          />
                          <path
                            d="M25.6667 25.3333H39M39 25.3333V38.6666M39 25.3333L25.6667 38.6666"
                            stroke="#FFFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-0 xl:gap-2">
                    <div className="flex items-center justify-between">
                      <h5 className="hover:text-primary transition-colors">
                        {value?.title}
                      </h5>
                      <Image
                        src={getImgPath("/images/icon/right-arrow-icon.svg")}
                        alt="right-arrow-icon"
                        width={30}
                        height={30}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <p className="text-gray-600 text-sm">
                      {value?.client}
                    </p>
                    {value?.description && (
                      <p className="text-gray-500 text-sm mt-1">
                        {value?.description}
                      </p>
                    )}
                    {value?.tech && value?.tech.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {value?.tech.map((tech: string, i: number) => (
                          <span
                            key={i}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;