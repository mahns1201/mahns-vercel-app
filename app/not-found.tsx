const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-md mx-auto">
      <h1 className="text-6xl font-extrabold text-gray-900 md:text-8xl dark:text-gray-100">
        404
      </h1>
      <p className="mb-4 text-xl font-bold md:text-2xl text-center">
        페이지를 찾을 수 없습니다.
      </p>
    </div>
  );
};

export default NotFound;
