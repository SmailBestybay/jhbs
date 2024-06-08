import Nav from "./Nav";

export default function Header() {
  return (
    <>
      <div className="m-4 flex flex-col space-y-1 sm:flex-row sm:justify-between">
        <div>Justin HB Schwartz</div>
        <Nav />
      </div>
    </>
  );
}
