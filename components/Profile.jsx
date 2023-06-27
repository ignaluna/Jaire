import { Slider } from "./Swiper";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{name} Profile</span>
      </h1>
      <p className='desc text-left'>{desc}</p>

      <div className="flex h-screen w-screen items-center justify-center overflow-hidden">
        <Slider />
      </div>
    </section>
  );
};

export default Profile;