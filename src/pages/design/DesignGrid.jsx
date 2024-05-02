import PropTypes from "prop-types";

function DesignGrid({ grid }) {
  return (
    <section
      id="design-grid"
      className="w-full my-24 md:mx-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-3"
    >
      {grid.map((sample) => (
        <SampleDesign
          key={sample.id}
          img={sample.image}
          title={sample.title}
          para={sample.para}
        />
      ))}
    </section>
  );
}

DesignGrid.propTypes = {
  grid: PropTypes.array.isRequired,
};

export default DesignGrid;

function SampleDesign({ img, title, para }) {
  return (
    <div className="w-[330px] my-12 md:my-6 mx-auto">
      <img
        className="rounded-t-2xl"
        src={img}
        alt="Design sample website image"
      />
      <div className="p-6 rounded-b-2xl text-center bg-lighterPeach">
        <h3 className="text-peach uppercase my-3">{title}</h3>
        <p className="my-3">{para}</p>
      </div>
    </div>
  );
}

SampleDesign.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
};
