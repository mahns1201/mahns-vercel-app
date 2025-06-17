const Title = ({ title }: { title: string }) => {
  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-6xl dark:text-gray-100">
        {title}
      </h1>
    </div>
  );
};

export default Title;
