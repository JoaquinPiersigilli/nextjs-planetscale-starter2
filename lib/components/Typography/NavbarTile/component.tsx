import React from "react";
import cls from "classnames";
import Image from "next/image";

import DiagonalArrowIcon from "./DiagonalArrowIcon.svg";

import styles from "./component.module.scss";
import Link from "next/link";

const NavbarTile = ({
  children,
  isSelected,
  linkTo,
  showArrow,
  isExternal,
}: {
  children: React.ReactNode;
  isSelected: boolean;
  linkTo?: string;
  showArrow?: boolean;
  isExternal?: boolean;
}) => {
  return (
    <div
      className={cls(
        styles.navbarTile,
        isSelected && styles.selected,
        linkTo && styles.isLink
      )}
    >
      {linkTo ? (
        <Link href={linkTo} target={isExternal ? "_blank" : undefined} legacyBehavior>
          {children}
        </Link>
      ) : (
        children
      )}
      {showArrow && <Image src={DiagonalArrowIcon} alt={"Diagonal Arrow"} />}
    </div>
  );
};

export { NavbarTile };
