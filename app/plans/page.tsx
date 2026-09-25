"use client";

import { useContext } from "react";
import { PlansContext } from "../Context/PlansContext";
import Image from "next/image";

export interface PlansPageProps {
    prop: string
}

export default function PlansPage() {
    const {myPlan} = useContext(PlansContext);
    console.log(myPlan)
    if(myPlan.length == 0){
        return<div>
            <h2>NOTHING HERE YET</h2>
            <p>Browse the library and add a lift to get today moving.</p>
        </div>
    }
    return (<>
    <div>
        {
            myPlan.map(plan => (

                <div key={plan.id} className="flex justify-start gap-4 items-center">
                    <div>
                        <Image
                        src={plan.image}
                        alt={plan.name}
                        height={80}
                        width={150}
                        />
                    </div>
                    <div>
                        <h2>{plan.name}</h2>
                    </div>
                </div>
            ))
        }
    </div>
    
    
    </>)
}