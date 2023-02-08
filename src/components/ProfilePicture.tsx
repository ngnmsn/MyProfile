function ProfilePicture() {
  return (
    <div className="w-full h-52">
      <div className="w-full h-36 flex items-center justify-center">
        <div className="w-36 h-36 rounded-full  flex items-center justify-center bg-blue">
          <div className="profile_picture rounded-full"></div>
        </div>
      </div>
      <div className="w-full h-10 flex items-end justify-center">
        <p className="inline-block text-center text-xl font-bold">長沼 伸 (Shin Naganuma)</p>
      </div>
      <div className="w-full h-6 flex items-center justify-center">
        <p className="inline-block text-center text-sm font-bold">Software Engineer</p>
      </div>
    </div>
  );
}
  
export default ProfilePicture;