import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

type DefaultMarginSectionProps = {
  children: ReactNode;
  isBackgroundImage: boolean;
  className?: string;
  backgroundClass?: string;
  imgAdress?: any;
  imgAlt?: any;
  id?: string;
  hasNoMarginTop?: boolean;
  hasNoMarginBottom?: boolean;
};

export function DefaultMarginSectionBg(props: DefaultMarginSectionProps) {
  return (
    <>
      <section
        className={
          "relative" +
          (props.backgroundClass ? " " + props.backgroundClass : "")
        }
      >
        <div
          className={
            "px-8 py-32 sm:px-16 md:py-64 xl:px-0 xl:w-[1110px] xl:m-auto" +
            (props.hasNoMarginTop ? " xl:pt-0" : "") +
            (props.hasNoMarginBottom ? " xl:pb-0" : "") +
            (props.className ? " " + props.className : "")
          }
        >
          {props.children}
        </div>
        {props.isBackgroundImage ? (
          <Image
            src={props.imgAdress}
            alt={props.imgAlt}
            unoptimized={true}
            style={{ zIndex: -1, objectFit: "cover", objectPosition: "center" }}
            fill
          />
        ) : (
          ""
        )}
      </section>
    </>
  );
}
