import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-slate-50">
      <h1 className="text-6xl font-bold mb-4 text-slate-800">404</h1>
      <p className="text-xl mb-8 text-slate-500">페이지를 찾을 수 없습니다.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
