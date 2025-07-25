const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto max-w-4xl px-8 sm:px-12 xl:px-0">{children}</div>
  );
};

export default MainContainer;
