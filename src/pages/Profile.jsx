import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useSelector } from "react-redux";
import b1 from '../assets/badges/b1.jpg'
import b2 from '../assets/badges/b2.jpg'
import b3 from '../assets/badges/b3.jpg'

const Profile = () => {
  const navigate = useNavigate();
  function Logout() {
    localStorage.removeItem("user");
    navigate("/login");
  }
  const post = useSelector((state) => state.post);
  const user = useSelector((state) => state.user);
  const badge = (user) =>{
    if(user.pt>=0 &&user.pt<100){
      return b1
    }
    else if(user.pt>=100&&user.pt<200){
      return b2
    }else if(user.pt>=200){
      return b3
    }
  }
  return (
    <div className="md:px-[100px] px-2">
      <div className="flex text-[1.6rem] flex-col gap-10">
        <Nav />
        <div className="flex justify-between items-center">
          <div className="flex   justify-between items-center py-6 gap-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-8">
                <div className="bg-gray-400 rounded-full w-32 h-32 flex justify-center items-center text-5xl text-white">
                  <img className="rounded-full" src={badge(user)} alt="" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[4rem]">{user.name}</h1>
                  <h1 className="text-[2rem]">የሶፍትዌር መሐንዲስ | የአካል ብቃት ባለሙያ</h1>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => Logout()}
            className="bg-main text-white h-fit py-3 rounded-lg px-5"
          >
            ውጣ
          </button>
        </div>
        <div className="flex">
          <h1 className="text-[3rem] text-main font-bold">
            {user.pt ? user.pt : 0}
            <span className=" text-[1.7rem]">
              pt
            </span>
          </h1>
        </div>
        <div className="flex flex-col gap-10">
          <ul className="flex gap-10">
            <li className="text-main underline">ፖስቶች</li>
            <li>ስለ እኔ</li>
            <li>ጓደኞች</li>
            <li>እንቅስቃሴ</li>
          </ul>
           <div className="flex flex-col gap-5">
            
               {post.map((p) => {
                if(p.user==user.name){
                  return (
                    <p key={p.id} className=" px-5 shadow-sm py-3">{p.content}</p>
                  );
                }
               
              })}
           
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
