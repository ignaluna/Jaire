import ShowCard from "./ShowCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{name} Profile</span>
      </h1>
      <p className='desc text-left'>{desc}</p>

      <div className='mt-10 prompt_layout'>
        {data.map((show) => (
          <ShowCard
            key={show._id}
            show={show}
            handleEdit={() => handleEdit && handleEdit(show)}
            handleDelete={() => handleDelete && handleDelete(show)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;