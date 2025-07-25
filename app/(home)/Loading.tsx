const HomeLoading = () => (
  <div className="flex">
    <div className="flex flex-col w-full sm:flex-row items-center gap-4 animate-pulse">
      <div className="w-full h-60 sm:w-54 sm:h-42 bg-gray rounded-md flex-shrink-0" />
      <div className="sm:flex-1 space-y-2 w-full">
        <div className="h-6 bg-gray rounded w-3/4" />
        <div className="h-4 bg-gray rounded w-full" />
        <div className="h-4 bg-gray rounded w-5/6" />
        <div className="flex flex-wrap gap-2 mt-2">
          <div className="h-6 w-16 bg-gray rounded-full" />
          <div className="h-6 w-20 bg-gray rounded-full" />
          <div className="h-6 w-12 bg-gray rounded-full" />
        </div>
        <div className="h-4 bg-gray rounded w-1/3 ml-auto" />
      </div>
    </div>

    <div className="hidden xl:block w-44 pt-6 ml-10 animate-pulse">
      <div className="h-6 bg-gray rounded w-20 mb-4" />
      <div className="space-y-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-6 bg-gray rounded" />
        ))}
      </div>
    </div>
  </div>
);

export default HomeLoading;
