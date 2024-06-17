export default function Expertise() {
  return (
    <section className="p-4 text-white" id="expertise">
      <h2 className="py-2 text-2xl">Expertise</h2>
      <div className="grid gap-2 sm:grid-cols-3">
        <div>
          <h3 className="text-2xl font-semibold before:mr-5 before:content-['01']">
            Brand Identity
          </h3>
          <p className="ml-12 mt-2 sm:w-32">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
            consequuntur.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold before:mr-5 before:content-['02']">
            Web & App
          </h3>
          <p className="ml-12 mt-2 sm:w-32">
            A, sint neque. Commodi quisquam officia aliquid temporibus
            voluptatum corrupti!
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold before:mr-5 before:content-['03']">
            Print Design
          </h3>
          <p className="ml-12 mt-2 sm:w-32">
            Explicabo optio odit modi quam pariatur officia quis dolore
            laudantium!
          </p>
        </div>
      </div>
    </section>
  );
}
