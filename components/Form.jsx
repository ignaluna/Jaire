import Link from "next/link";

const Form = ({ type, show, setShow, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Show</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing shows with the world, and let your imagination
        run wild with any event you desire.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Flyer or Event Image
          </span>
          <input
            value={show.flyer}
            onChange={(e) => setShow({ ...show, flyer: e.target.value })}
            type="text"
            placeholder="Enter flyer or image URL"
            required
            className="form_input"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Event Link
          </span>
          <input
            value={show.eventLink}
            onChange={(e) => setShow({ ...show, eventLink: e.target.value })}
            type="text"
            placeholder="Enter event link"
            required
            className="form_input"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Date
          </span>
          <input
            value={show.date}
            onChange={(e) => setShow({ ...show, date: e.target.value })}
            type="text"
            placeholder="Enter date"
            required
            className="form_input"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Description
          </span>
          <textarea
            value={show.description}
            onChange={(e) => setShow({ ...show, description: e.target.value })}
            placeholder="Write a description"
            required
            className="form_textarea"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Location
          </span>
          <input
            value={show.location}
            onChange={(e) => setShow({ ...show, location: e.target.value })}
            type="text"
            placeholder="Enter location"
            required
            className="form_input"
          />
        </label>


        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
