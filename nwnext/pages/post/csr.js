import { useEffect, useState } from "react";
import Link from 'next/link';
import axios from "axios";
export default function CsrPage() {
    console.log("CsrPage");
    const [dataTime, setDateTime] = useState("");
    useEffect(() => {
        axios.get('https://worldtimeapi.org/api/ip')
            .then((res) => {
                setDateTime(res.data.datetime);
            })
            .catch((error) => console.error(error));
    }, []);
    return (
        <>
            <h1>Date Time</h1>
            <h2>{dataTime}</h2>
            <Link href="/post/first">
                <a>Back to home</a>
            </Link>
        </>
    )
}