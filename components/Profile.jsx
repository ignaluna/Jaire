import { Slider } from "./Swiper";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className='w-full'>

      <div className="flex h-screen w-screen items-center justify-center overflow-hidden">
        <Slider 
        data={data}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        />
      </div>
    </section>
  );
};

export default Profile;