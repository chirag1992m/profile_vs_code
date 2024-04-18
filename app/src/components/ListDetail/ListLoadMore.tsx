import ReactVisibilitySensor from 'react-visibility-sensor'

import LoadingIcons from 'react-loading-icons'

export function ListLoadMore({ setIsVisible }): React.ReactElement {
    return (
        <ReactVisibilitySensor
            partialVisibility
            onChange={(visible: boolean) => setIsVisible(visible)}
        >
            <div className="flex w-full items-center justify-center p-4">
                <LoadingIcons.Circles />
            </div>
        </ReactVisibilitySensor>
    )
}
