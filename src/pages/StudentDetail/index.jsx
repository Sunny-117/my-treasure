import React from 'react'
import { useParams } from "react-router-dom";
export default function StudentDetail(sNo) {
    let params = useParams();
    return (
        <div>StudentDetai:
            <h1>
                {params.sNo}

            </h1>
        </div>
    )
}
