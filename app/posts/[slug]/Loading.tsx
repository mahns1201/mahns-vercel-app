import SectionContainer from '../../../components/layouts/SectionContainer';

const PostLoading = () => (
  <SectionContainer>
    <div className="flex flex-col space-y-2 sm:space-y-5 my-2 pt-6 pb-8 md:my-5 animate-pulse">
      <div className="h-14 w-1/2 bg-gray-300 dark:bg-gray-700 rounded" />
      <div className="h-8 w-40 bg-gray-200 dark:bg-gray-600 rounded" />
      <div className="ml-auto h-4 w-24 bg-gray-200 dark:bg-gray-600 rounded" />
    </div>
    <div className="mt-6 space-y-4">
      <div className="h-8 w-1/3 bg-gray-300 dark:bg-gray-700 rounded" />
      <div className="h-6 w-4/6 bg-gray-300 dark:bg-gray-700 rounded" />
      <div className="h-6 w-3/6 bg-gray-200 dark:bg-gray-600 rounded" />
      <div className="h-6 w-3/6 bg-gray-300 dark:bg-gray-700 rounded" />
      <div className="h-6 w-3/6 bg-gray-200 dark:bg-gray-600 rounded" />
      <div className="h-6 w-2/6 bg-gray-300 dark:bg-gray-700 rounded" />
      <div className="h-6 w-5/8 bg-gray-300 dark:bg-gray-700 rounded" />
    </div>
  </SectionContainer>
);

export default PostLoading;
