export default function Header() {
  return (
    <>
      <header className="flex flex-col p-6 md:flex-row md:justify-between">
        <div className="text-4xl italic">
          <span className="relative">
            <span
              className="absolute -inset-1 block -skew-x-12 skew-y-0 bg-pink-500"
              aria-hidden="true"
            ></span>
            <span className="relative text-white">Justin HB Schwartz</span>
          </span>
        </div>
        <nav>
          <ol className="mt-2 flex flex-col md:mt-0 md:flex-row md:space-x-10">
            <li>About</li>
            <li>Expertise</li>
            <li>Achievements</li>
            <li>Work Samples</li>
          </ol>
        </nav>
      </header>
    </>
  );
}
