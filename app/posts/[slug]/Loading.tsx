const PostLoading = () => (
  <>
    <div className="flex justify-between items-end my-2 pt-6 pb-8 md:my-5 animate-pulse">
      <div className="h-10 w-2/3 bg-gray-300 dark:bg-gray-700 rounded mb-2" />
      <div className="h-4 w-24 bg-gray-200 dark:bg-gray-600 rounded" />
    </div>
    <section className="mt-6">
      <div className="space-y-4">
        <div className="h-6 w-5/6 bg-gray-300 dark:bg-gray-700 rounded" />
        <div className="h-6 w-4/6 bg-gray-300 dark:bg-gray-700 rounded" />
        <div className="h-6 w-3/6 bg-gray-300 dark:bg-gray-700 rounded" />
        <div className="h-6 w-2/6 bg-gray-300 dark:bg-gray-700 rounded" />
        <div className="h-6 w-1/2 bg-gray-300 dark:bg-gray-700 rounded" />
      </div>
    </section>
  </>
);

export default PostLoading;
