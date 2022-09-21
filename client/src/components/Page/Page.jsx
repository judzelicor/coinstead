import { useEffect } from "react"

function Page({ children, pageTitle }) {
    useEffect(() => {
        document.title = pageTitle;
    }, [])

    return (
        <>
            { children }
        </>
    )
}

export default Page;