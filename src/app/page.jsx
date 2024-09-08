"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="bg-black bg-opacity-70 p-6 fixed w-full z-20 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-extrabold tracking-wider">
            VISION<span className="text-red-500">X</span>
          </h1>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#home"
                  className="hover:text-red-500 transition duration-300"
                >
                  ホーム
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-red-500 transition duration-300"
                >
                  サービス
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-red-500 transition duration-300"
                >
                  作業実績
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-red-500 transition duration-300"
                >
                  会社概要
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-red-500 transition duration-300"
                >
                  お客様の声
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-red-500 transition duration-300"
                >
                  お問い合わせ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="h-screen relative overflow-hidden"
        >
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/path/to/your/video.mp4" type="video/mp4" />
            お使いのブラウザは動画タグをサポートしていません。
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-6xl md:text-8xl font-extrabold mb-6 drop-shadow-lg">
                動画広告で
                <br />
                ビジネスを革新する
              </h2>
              <p className="text-2xl md:text-3xl mb-8 drop-shadow-lg">
                プロフェッショナルな動画制作と戦略的な広告配信で、
                <br />
                あなたのブランドを次のレベルへ。
              </p>
              <a
                href="#contact"
                className="bg-red-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-red-600 transition duration-300 shadow-lg"
              >
                今すぐ相談する
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 bg-black bg-opacity-40">
          <div className="container mx-auto px-4">
            <h3 className="text-5xl font-extrabold mb-16 text-center">
              サービス内容
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="bg-gray-800 p-8 rounded-lg text-center shadow-lg">
                <i className="fas fa-film text-5xl text-red-500 mb-6"></i>
                <h4 className="text-2xl font-semibold mb-4">動画企画・制作</h4>
                <p>高品質で印象的な動画コンテンツを制作</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg text-center shadow-lg">
                <i className="fas fa-chart-line text-5xl text-red-500 mb-6"></i>
                <h4 className="text-2xl font-semibold mb-4">広告戦略立案</h4>
                <p>効果的な広告キャンペーンを設計</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg text-center shadow-lg">
                <i className="fas fa-bullseye text-5xl text-red-500 mb-6"></i>
                <h4 className="text-2xl font-semibold mb-4">
                  ターゲティング最適化
                </h4>
                <p>最適な視聴者層に確実にリーチ</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg text-center shadow-lg">
                <i className="fas fa-chart-bar text-5xl text-red-500 mb-6"></i>
                <h4 className="text-2xl font-semibold mb-4">
                  パフォーマンス分析
                </h4>
                <p>データに基づく継続的な改善</p>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-24 bg-gray-800 bg-opacity-50">
          <div className="container mx-auto px-4">
            <h3 className="text-5xl font-extrabold mb-16 text-center">
              作業実績
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                <img src="/path/to/project1.jpg" alt="プロジェクト1" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-2xl font-semibold mb-2">ブランドA キャンペーン</h4>
                  <p className="text-gray-400">新製品ローンチのための動画広告キャンペーン</p>
                </div>
              </div>
              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                <img src="/path/to/project2.jpg" alt="プロジェクト2" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-2xl font-semibold mb-2">企業B プロモーション</h4>
                  <p className="text-gray-400">企業イメージ向上のための動画シリーズ制作</p>
                </div>
              </div>
              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                <img src="/path/to/project3.jpg" alt="プロジェクト3" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-2xl font-semibold mb-2">サービスC 認知度向上</h4>
                  <p className="text-gray-400">新規サービスの認知度向上のためのSNS広告展開</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-gray-900 bg-opacity-50">
          <div className="container mx-auto px-4">
            <h3 className="text-5xl font-extrabold mb-16 text-center">
              会社概要
            </h3>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl mb-8">
                VISIONXは、革新的な動画広告ソリューションを提供する企業です。私たちは、クリエイティブな思考と最新のテクノロジーを融合させ、クライアントのビジネス成長を支援します。
              </p>
              <p className="text-xl mb-8">
                2015年の設立以来、数多くの成功事例を積み重ね、業界をリードする存在として認められています。私たちの使命は、クライアントのビジョンを魅力的な動画コンテンツに変換し、効果的に目標達成を支援することです。
              </p>
              <a href="#contact" className="text-red-500 hover:text-red-600 font-semibold">
                詳細はお問い合わせください →
              </a>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-24 bg-black bg-opacity-40">
          <div className="container mx-auto px-4">
            <h3 className="text-5xl font-extrabold mb-16 text-center">
              お客様の声
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <p className="mb-4 italic">"VISIONXのおかげで、我が社の新製品の認知度が大幅に向上しました。プロフェッショナルで効果的なアプローチに感謝しています。"</p>
                <p className="font-semibold">- 田中 太郎, CEO at テックイノベーション株式会社</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <p className="mb-4 italic">"彼らの創造性と戦略的思考は素晴らしいです。我々のブランドイメージを一新し、市場での地位を強化することができました。"</p>
                <p className="font-semibold">- 鈴木 花子, マーケティング部長 at グローバルリテール株式会社</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <p className="mb-4 italic">"VISIONXのチームは常に期待以上の結果を出してくれます。彼らとの協力は、我々のデジタルマーケティング戦略に革命をもたらしました。"</p>
                <p className="font-semibold">- 佐藤 健太, CMO at フューチャーテクノロジーズ株式会社</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-gray-900 bg-opacity-50">
          <div className="container mx-auto px-4">
            <h3 className="text-5xl font-extrabold mb-16 text-center">
              お問い合わせ
            </h3>
            <form className="max-w-lg mx-auto bg-gray-800 p-10 rounded-lg shadow-2xl">
              <div className="mb-8">
                <label htmlFor="name" className="block mb-3 font-semibold">
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-4 bg-gray-700 rounded"
                  required
                />
              </div>
              <div className="mb-8">
                <label htmlFor="email" className="block mb-3 font-semibold">
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-4 bg-gray-700 rounded"
                  required
                />
              </div>
              <div className="mb-8">
                <label htmlFor="message" className="block mb-3 font-semibold">
                  お問い合わせ内容
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-4 bg-gray-700 rounded"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white px-6 py-4 rounded font-semibold hover:bg-red-600 transition duration-300 shadow-lg"
              >
                送信
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white p-10">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 VISIONX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;