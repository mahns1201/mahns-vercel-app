import React from 'react';

interface ListLayoutProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

const ListLayout: React.FC<ListLayoutProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <section className="list-layout">
      {title && <h1 className="list-layout__title">{title}</h1>}
      {description && <p className="list-layout__description">{description}</p>}
      <div className="list-layout__content">{children}</div>
    </section>
  );
};

export default ListLayout;
