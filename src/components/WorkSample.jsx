// import PropTypes from "prop-types";

export default function WorkSamples() {
  return (
    <section className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      <div className="bg-sky-400">
        <img
          className="object-[100%_30%] h-24 w-full object-cover pt-2"
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

// function Card(props) {
//   return (
//     <div className={props.className ? props.className : ""}>
//       <img className="h-24 w-96 object-cover" src={props.img} alt={props.alt} />
//       <h2>{props.headingText}</h2>
//       <p>{props.paragraph}</p>
//     </div>
//   );
// }

// Card.propTypes = {
//   img: PropTypes.string,
//   alt: PropTypes.string,
//   headingText: PropTypes.string,
//   paragraph: PropTypes.string,
//   className: PropTypes.string,
// };

{
  /* <Card
        className="bg-amber-200"
        img="./sample.jpg"
        alt="sample text"
        headingText="Heading Text"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, numquam.
      "
      />
      <Card
        img="./sample.jpg"
        alt="sample text"
        headingText="Heading Text"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, numquam.
      "
      />
      <Card
        img="./sample.jpg"
        alt="sample text"
        headingText="Heading Text"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, numquam.
      "
      />
      <Card
        className="bg-slate-400"
        img="./sample.jpg"
        alt="sample text"
        headingText="Heading Text"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, numquam.
      "
      /> */
}
