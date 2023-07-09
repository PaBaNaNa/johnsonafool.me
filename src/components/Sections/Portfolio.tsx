import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import {
  FC,
  memo,
  // MouseEvent,
  // useCallback,
  // useEffect,
  // useRef,
  // useState,
} from "react";

// import { isMobile } from "../../config";
import { portfolioItems, SectionId } from "../../data/data";
// import { PortfolioItem } from "../../data/dataDef";
// import useDetectOutsideClick from "../../hooks/useDetectOutsideClick";
import Section from "../Layout/Section";

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-white" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        {/* <h2 className="text-xl font-bold text-black">Portfolio</h2> */}
        {/* <div className="grid-col-2 md:grid-col-3 lg:grid-col-4 grid w-full"> */}
        <div className="grid w-full grid-cols-1  gap-20  md:grid-cols-2">
          {portfolioItems.map((item, index) => {
            const { title, image, description, tech, link } = item;
            return (
              <div
                className="duration-y mt-8 transform transition hover:scale-105"
                key={`${title}-${index}`}
              >
                <div
                  className={classNames(
                    "relative h-72 w-auto overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl"
                  )}
                >
                  <Image
                    alt={title}
                    className=""
                    fill
                    placeholder="blur"
                    src={image}
                  />
                  {/* <ItemOverlay item={item} /> */}
                </div>
                <div className="p-4">
                  <div className="my-4 text-2xl font-medium text-black">
                    {title}
                  </div>
                  <div className="my-4 h-40 text-base text-neutral-400">
                    {description}
                  </div>
                  <div className="my-4 flex flex-row text-sm text-neutral-400">
                    Tech: {tech ? tech : ""}
                  </div>
                  <div className="my-4 justify-start text-sm text-neutral-400">
                    <span className="mr-2">{link && `Link:`}</span>
                    {link &&
                      link.map((item, index) => (
                        <Link
                          className="mr-2 font-medium text-sky-500 underline hover:no-underline dark:text-sky-400"
                          href={item.href}
                          key={`${item}-${index}`}
                        >
                          {item.text}
                        </Link>
                      ))}
                  </div>
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

// const ItemOverlay: FC<{ item: PortfolioItem }> = memo(
//   ({ item: { url, title } }) => {
//     const [mobile, setMobile] = useState(false);
//     const [showOverlay, setShowOverlay] = useState(false);
//     const linkRef = useRef<HTMLAnchorElement>(null);

//     useEffect(() => {
//       // Avoid hydration styling errors by setting mobile in useEffect
//       if (isMobile) {
//         setMobile(true);
//       }
//     }, []);
//     useDetectOutsideClick(linkRef, () => setShowOverlay(false));

//     const handleItemClick = useCallback(
//       (event: MouseEvent<HTMLElement>) => {
//         if (mobile && !showOverlay) {
//           event.preventDefault();
//           setShowOverlay(!showOverlay);
//         }
//       },
//       [mobile, showOverlay]
//     );

//     return (
//       <a
//         className={classNames(
//           "absolute inset-0 h-full w-full  bg-gray-900 transition-all duration-300",
//           { "opacity-0 hover:opacity-80": !mobile },
//           showOverlay ? "opacity-80" : "opacity-0"
//         )}
//         href={url}
//         onClick={handleItemClick}
//         ref={linkRef}
//         target="_blank"
//       >
//         <div className="relative h-full w-full p-4">
//           <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
//             <h2 className="flex h-screen items-center justify-center gap-2 text-center font-bold text-white opacity-100">
//               {title}
//               {/* <ArrowTopRightOnSquareIcon className="h-4 w-4 shrink-0 text-white" /> */}
//             </h2>
//           </div>
//         </div>
//       </a>
//     );
//   }
// );
