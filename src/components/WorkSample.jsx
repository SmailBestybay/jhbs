export default function WorkSamples() {
  return (
    <section
      aria-label="Work Samples"
      className="grid grid-cols-1 gap-2 sm:grid-cols-2"
    >
      <div className="bg-sky-400">
        <img
          className="h-24 w-full object-cover object-[100%_30%] pt-2"
          src="./sample.jpg"
          alt="sample"
        />
        <h2>Card Heading</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, totam!
        </p>
      </div>
      <div className="bg-green-300">
        <img
          className="h-24 w-full object-cover pt-2"
          src="./sample.jpg"
          alt="sample"
        />
        <h2>Card Heading</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, totam!
        </p>
      </div>
      <div className="bg-purple-500">
        <img
          className="h-24 w-full object-cover pt-2"
          src="./sample.jpg"
          alt="sample"
        />
        <h2>Card Heading</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, totam!
        </p>
      </div>
      <div className="bg-amber-400">
        <img
          className="h-24 w-full object-cover pt-2"
          src="./sample.jpg"
          alt="sample"
        />
        <h2>Card Heading</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, totam!
        </p>
      </div>
    </section>
  );
}
