import React from 'react';
import Image from 'next/image';
import SemiTitle from '../../components/SemiTitle';

const AboutPage = () => {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <div className="flex flex-col items-center mb-20">
            <Image
              src="/logo-white.png"
              alt="Profile"
              width={180}
              height={180}
              className="rounded-full shadow-md mb-4"
            />
            <SemiTitle semiTitle="서민혁" />
            <p className="text-gray-500 mt-2">백엔드 개발자</p>
          </div>

          <section className="mb-20">
            <h3 className="text-2xl font-semibold mb-3">반갑습니다 🙋🏽‍♂️</h3>
            <p className="text-gray-500 leading-relaxed">
              Typescript & Nest.js, Java & Spring 기반의 백엔드 개발자입니다.
              블록체인 마켓 플레이스 어드민, IoT 기기 통신 서버 그리고 통합 관제
              시스템 구축 등의 프로젝트를 경험했습니다. 단순한 문제 해결을 넘어,
              시스템화를 통해 지속 가능한 플랫폼 환경을 만드는 데 집중합니다.
              기술 전문가로서의 성장뿐만 아니라, 인간적인 성숙도 함께
              추구합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">口耳之學</h2>
            <p className="text-gray-500 leading-relaxed">
              “소인의 학문은 귀로 듣고 입으로 나간다”라는 말이 있습니다. 이
              블로그는 개발 중 경험한 내용과 문제 해결 과정을 기록하고
              공유함으로써, 스스로 학습하고 성장하기 위해 운영되고 있습니다.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
