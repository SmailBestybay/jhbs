export default function Header() {
  return (
    <>
      <header className="flex flex-col sm:flex-row sm:justify-between">
        <div>Justin HB Schwartz</div>
        <nav>
          <ol className="mt-2 flex flex-col sm:mt-0 sm:flex-row sm:space-x-10">
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
