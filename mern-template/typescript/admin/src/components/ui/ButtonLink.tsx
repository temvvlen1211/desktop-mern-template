import { FC, ReactNode } from "react";

interface ButtonLinkProps {
  children: ReactNode;
}

export const ButtonLink: FC<ButtonLinkProps> = ({
  children,
  ...otherProps
}) => (
  <span
    {...otherProps}
    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
  >
    {children}
  </span>
);
