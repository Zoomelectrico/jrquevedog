import { ReactNode, FunctionComponent } from 'react';

type Props = {
  children?: ReactNode;
};

const Container: FunctionComponent = ({ children }: Props) => {
  return <div className="container mx-auto px-8">{children}</div>;
};

export default Container;
