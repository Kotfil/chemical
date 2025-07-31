"use client";
import React, { FC, Suspense } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Skeleton,
  useDisclosure,
} from "@heroui/react";
import {
  Flag,
  FlexWrapGrid,
  FlexWrapGrid2,
  Grid,
  ScrollContainer,
} from "./localization.styles";
import { Grid as MUIgrid } from "@mui/material";
import { languages } from "@/mock/languages-list.mock";
import { PlanetIcon } from "@/components/icons";

// const EUFlagIcon = ({
//                         size = 24,
//                         ...props
//                     }: React.SVGProps<SVGSVGElement> & { size?: number }) => {
//     return (
//         <svg
//             width={size}
//             height={size}
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             {...props}
//         >
//             <rect width="24" height="24" rx="2" fill="#003399"/>
//             <g fill="#FFCC00">
//                 {[...Array(12)].map((_, i) => {
//                     const angle = (i * 30 * Math.PI) / 180;
//                     const cx = 12 + 7 * Math.cos(angle);
//                     const cy = 12 + 7 * Math.sin(angle);
//                     return (
//                         <polygon
//                             key={i}
//                             points={`${cx},${cy - 0.75} ${cx + 0.25},${cy - 0.25} ${cx + 0.75},${cy - 0.25} ${cx + 0.35},${cy + 0.1} ${cx + 0.5},${cy + 0.6} ${cx},${cy + 0.3} ${cx - 0.5},${cy + 0.6} ${cx - 0.35},${cy + 0.1} ${cx - 0.75},${cy - 0.25} ${cx - 0.25},${cy - 0.25}`}
//                             fill="#FFCC00"
//                         />
//                     );
//                 })}
//             </g>
//         </svg>
//     );
// };

export const Localization: FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Suspense fallback={<Skeleton />}>
        <Button
          aria-label="Like"
          isIconOnly
          onPress={onOpen}
          variant={"solid"}
          color="default"
          size={"md"}
        >
          <PlanetIcon />
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={"5xl"}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                <ModalBody>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(5, 1fr)",
                      gap: "8px",
                    }}
                  >
                    {languages.slice(0, 48).map(({ title, alt, link }, i) => (
                      <Button
                        key={i}
                        size={"sm"}
                        variant={"flat"}
                        // href={link}
                        // target="_blank"
                        rel="noopener noreferrer"
                        aria-label={title}
                        endContent={
                          <Flag width={14} height={14} src={link} alt={alt} />
                        }
                      >
                        {title}
                      </Button>
                    ))}
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="default" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </Suspense>
    </>
  );
};
