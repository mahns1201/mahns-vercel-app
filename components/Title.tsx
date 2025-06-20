const Title = ({ title }: { title: string }) => {
  return (
    <div className="my-2 pt-6 pb-8 md:my-5">
      <h1 className="h1">{title}</h1>
    </div>
  );
};

export default Title;
