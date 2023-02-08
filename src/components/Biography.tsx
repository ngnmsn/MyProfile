function ProfilePicture() {
  return (
    <div className="w-full flex flex-col justify-center p-3">
      <div className="w-full mb-3">
        <p className="inline-block text-center text-2xl italic font-bold underline">経歴</p>
      </div>
      <div className="w-full h-full flex items-start justify-start mb-3">
        <div className="h-full mr-6">
          <p className="inline-block text-2xl">1994</p>
        </div>
        <div className="h-full pt-[0.2rem]">
          <p className="inline-block text-xl">山梨県に生まれる。</p>
        </div>
      </div>
      <div className="w-full h-full flex items-start justify-start mb-3">
        <div className="h-full mr-6">
          <p className="inline-block text-2xl">2017</p>
        </div>
        <div className="h-full pt-[0.2rem]">
          <p className="inline-block text-xl">横浜国立大学 理工学部 数物・電子情報系学科 卒業</p>
        </div>
      </div>
      <div className="w-full h-full flex items-start justify-start mb-3">
        <div className="h-full mr-6">
          <p className="inline-block text-2xl">2019</p>
        </div>
        <div className="h-full pt-[0.2rem]">
          <p className="inline-block text-xl">横浜国立大学院 工学府 物理情報工学専攻 卒業</p>
        </div>
      </div>
      <div className="w-full h-full flex items-start justify-start mb-3">
        <div className="h-full mr-6">
          <p className="inline-block text-2xl">2019</p>
        </div>
        <div className="h-full pt-[0.2rem]">
          <p className="inline-block text-xl">某大手金融系SIer 入社</p>
        </div>
      </div>
      <div className="w-full h-full flex items-start justify-start mb-3">
        <div className="h-full mr-6">
          <p className="inline-block text-2xl">2023</p>
        </div>
        <div className="h-full pt-[0.2rem]">
          <p className="inline-block text-xl">某大手金融系SIer 退社</p>
        </div>
      </div>
      <div className="w-full h-full flex items-start justify-start mb-3">
        <div className="h-full mr-6">
          <p className="inline-block text-2xl">2023</p>
        </div>
        <div className="h-full pt-[0.2rem]">
          <p className="inline-block text-xl">某Fintechベンチャー 入社予定</p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePicture;