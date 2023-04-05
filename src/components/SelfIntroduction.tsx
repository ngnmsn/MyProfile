function SelfIntroduction() {
  return (
    <div className="w-full p-3">
      <div className="w-full mb-3">
        <p className="inline-block text-center text-2xl italic font-bold underline">自己紹介</p>
      </div>
      <div>
        <p className="text-lg">
          東京でバックエンドエンジニアしています。新卒で某大手金融系SIerに就職して証券会社のオンライントレードシステムの開発現場で主にJavaを使った開発を行ってきました。
          2023年3月に某Fintechベンチャーに入社予定です。業務はバックエンドを主に行なっていますがフロントエンドも勉強中です。こちらのホームページはReact+Tailwind CSSを使って作成しています。
          <a className="text-blue hover:underline underline-offset-2" href="https://github.com/ngnmsn/myprofile">&#x21D2; View Source</a><br />
          クラフトビールが大好きです。
        </p>
      </div>
    </div>
  );
}

export default SelfIntroduction;