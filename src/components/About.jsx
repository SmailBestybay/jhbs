import sampleImg from "../assets/sample.jpg";
export default function About() {
  return (
    <section className="grid md:grid-cols-2">
      <div className="my-2 flex flex-col gap-2">
        <h1 className="text-4xl font-light">Hi there, I am Justin</h1>
        <p className="text-2xl font-semibold">
          I build data-driven design experiences for your business
        </p>
      </div>
      <div className="md:flex md:justify-end">
        <img
          className="max-w-full md:max-w-96"
          src={sampleImg}
          alt="Sample image"
        />
      </div>
    </section>
  );
}
