import React from 'react';

export default function PostDetailPageLoading() {
  return (
    <div className="p-8 text-center">
      <div className="mx-auto mb-4 w-10 h-10 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin" />
      <p>게시글을 불러오는 중입니다...</p>
    </div>
  );
}
