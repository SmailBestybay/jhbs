import sampleImg from "../assets/sample.jpg";
export default function About() {
  return (
    <div className="grid sm:grid-cols-2">
      <div className="my-2 flex flex-col gap-2">
        <h1>Hi there, I am Justin</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          magni!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          magni!
        </p>
      </div>
      <div className="sm:flex sm:justify-end">
        <img
          className="max-w-52 sm:max-w-80"
          src={sampleImg}
          alt="Sample image"
        />
      </div>
    </div>
  );
}
