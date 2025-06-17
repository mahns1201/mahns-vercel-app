const SemiTitle = ({ semiTitle }: { semiTitle: string }) => {
  return (
    <>
      <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl md:text-4xl dark:text-gray-100">
        {semiTitle}
      </h2>
    </>
  );
};

export default SemiTitle;
