import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { url } from "inspector";
import Image from "next/image";
import {
  FC,
  memo,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { isMobile } from "../../config";
import { portfolioItems, SectionId } from "../../data/data";
import { PortfolioItem } from "../../data/dataDef";
import useDetectOutsideClick from "../../hooks/useDetectOutsideClick";
import RedirectIcon from "../Icon/RedirectIcon";
import Section from "../Layout/Section";

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-white" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="text-xl font-bold text-black">Portfolio</h2>
        {/* <div className="grid-col-2 md:grid-col-3 lg:grid-col-4 grid w-full"> */}
        <div className="grid w-full grid-cols-1  gap-12  md:grid-cols-2">
          {portfolioItems.map((item, index) => {
            const { title, image, description, tech } = item;
            return (
              <div className="my-8 pb-6" key={`${title}-${index}`}>
                <div
                  className={classNames(
                    "relative h-80 w-auto overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl"
                  )}
                >
                  <Image
                    alt={title}
                    className=""
                    fill
                    placeholder="blur"
                    src={image}
                  />
                  {/* TODO apply overlay to whole card */}
                  <ItemOverlay item={item} />
                </div>
                <div className="m-2 my-4 text-3xl text-black">{title}</div>
                <div className="my-4 h-40 text-lg text-neutral-400">
                  {description}
                </div>
                <div className="flex flex-row gap-2 text-sm text-neutral-400">
                  {/* tech i used */}
                  Tech: {tech ? tech : ""}
                  {/* <img
                    alt="typescript"
                    src="https://img.shields.io/badge/TypeScript%20-%23F7DF1E.svg?logo=typescript&logoColor=white&color=3178C6"
                  />
                  <img
                    alt="react"
                    src="https://camo.githubusercontent.com/9486dfd7127246a3a63e2daa9fbb4351fb94c48cd5c9513aeab772a2599fbaf5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742d3230323332413f6c6f676f3d7265616374266c6f676f436f6c6f723d363144414642"
                  />
                  <img
                    alt="redux-toolkit"
                    src="https://camo.githubusercontent.com/2c6ccbd85922f9303bc7f6bd20c1e966731c948fc659e8081b4710e1d3ede920/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5265647578253230546f6f6c6b69742d3539334438383f6c6f676f3d7265647578266c6f676f436f6c6f723d7768697465"
                  />
                  <img
                    alt="redux-saga"
                    src="https://camo.githubusercontent.com/0b40ffefc43d86bd8d6c3a0f570c25e5bb55586e27b1dd6c72a8a3be3d52d6c5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5265647578253230536167612d3836443436423f6c6f676f3d726564757825323073616761266c6f676f436f6c6f723d776869746526636f6c6f723d373443343137"
                  /> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = "Portfolio";
export default Portfolio;

const ItemOverlay: FC<{ item: PortfolioItem }> = memo(
  ({ item: { url, title } }) => {
    const [mobile, setMobile] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const linkRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
      // Avoid hydration styling errors by setting mobile in useEffect
      if (isMobile) {
        setMobile(true);
      }
    }, []);
    useDetectOutsideClick(linkRef, () => setShowOverlay(false));

    const handleItemClick = useCallback(
      (event: MouseEvent<HTMLElement>) => {
        if (mobile && !showOverlay) {
          event.preventDefault();
          setShowOverlay(!showOverlay);
        }
      },
      [mobile, showOverlay]
    );

    return (
      <a
        className={classNames(
          "absolute inset-0 h-full w-full  bg-gray-900 transition-all duration-300",
          { "opacity-0 hover:opacity-80": !mobile },
          showOverlay ? "opacity-80" : "opacity-0"
        )}
        href={url}
        onClick={handleItemClick}
        ref={linkRef}
        target="_blank"
      >
        <div className="relative h-full w-full p-4">
          <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
            <h2 className="flex h-screen items-center justify-center gap-2 text-center font-bold text-white opacity-100">
              {title}
              {/* <ArrowTopRightOnSquareIcon className="h-4 w-4 shrink-0 text-white" /> */}
            </h2>
          </div>
        </div>
      </a>
    );
  }
);
