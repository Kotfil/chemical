import React, {FC} from "react";
import {title} from "@/components/primitives";

export const MainSection: FC = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-xl text-center justify-center">
                <span className={title({color: "yellow"})}>ONE-STOP SOLUTION SUPPLIER OF &nbsp;</span>
                <span className={title({color: "violet"})}>CIVIL BLASTING AND &nbsp;</span>
                <br/>
                <span className={title({color: "blue"})}>
        CHEMICAL RAW MATERIALS
        </span>

            </div>

        </section>
    )
};

{/*<div className={subtitle({class: "mt-4"})}>*/}
{/*    Beautiful, fast and modern React UI library.*/}
{/*</div>*/}