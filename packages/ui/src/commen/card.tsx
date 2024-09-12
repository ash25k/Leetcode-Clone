import { ReactNode} from 'react'


export const Card = ({children}:{children:ReactNode}) => {
    return (
        <div className="ui-flex ui-w-full ui-h-full ui-flex-wrap ui-items-center ui-justify-center ui-py-2">
            <div className="ui-w-full ui-max-w-md ">
                <div className="ui-bg-white ui-shadow-md ui-rounded ui-px-8 ui-pt-6 ui-pb-8 ui-mb-6">
                    {children}
                </div>
            </div>
        </div>
    )
}
