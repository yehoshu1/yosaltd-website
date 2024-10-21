import Link from "next/link"

export type NavLinkProps ={
    children: React.ReactNode,
    // className?: string
    href:string
}

const NavLink = ({ children,href }: NavLinkProps) => {
    return (
        <Link className={"px-2 mx-1 py-2 hover:bg-gray-200 hover:text-green-700 rounded-lg font-bold"} href={href}>
            {children}
        </Link>

    )
}

export default NavLink