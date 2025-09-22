function Projects() {
  return (
    <div className="p-20 bg-base-200">
      <div className=" text-center">
        <h1 className="text-5xl font-bold pb-10">Projects</h1>
      </div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical px-20">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2023</time>
            <div className="text-lg font-black">IFUN Website</div>A website
            built for an Islamic competition hosted at my school, designed to
            provide information and streamline event management.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">2024</time>
            <div className="text-lg font-black">Sonic Linguistic Website</div>A
            platform developed for a national competition in science, sports,
            and languages, helping participants access schedules and results. <a target="_blank" href="https://github.com/faizr206/WebSonlis24" className=" underline text-blue-500">Link to Github.</a>
          </div>

          <hr />
        </li>
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2024</time>
            <div className="text-lg font-black">OSIS Website</div>A website for
            the school’s student government (OSIS), built to share
            announcements, activities, and student resources.
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
}

export default Projects;
