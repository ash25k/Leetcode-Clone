import React, { FC } from 'react'

interface NavbarProps {
    links: { name: string, onClick: () => void }[]
}

export const Navbar: FC<NavbarProps> = ({ links }) => {
    return (
        <nav
            className="ui-relative ui-flex ui-w-full ui-flex-wrap ui-items-center ui-justify-between ui-bg-[#FBFBFB] ui-py-2 ui-text-neutral-500 ui-shadow  dark:ui-bg-neutral-600 lg:ui-py-4 ui-mb-10">
            <div className="ui-flex ui-w-full ui-flex-wrap ui-items-center ui-justify-between ui-px-3">
                <div className="ui-ml-2">
                    <a className="ui-font-medium ui-text-neutral-800 ui-dark:text-neutral-200" href="/">
                        Neetcode
                    </a>
                </div>
                <div className="ui-flex ui-flex-wrap ui-items-center ui-px-3">
                    {
                        links.map(link =>
                            <button key={link.name} className="ui-font-medium ui-dark:text-neutral-200 hover:ui-text-neutral-800 ui-px-2" onClick={link.onClick}>
                                {link.name}
                            </button>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}
