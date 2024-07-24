import React from 'react'

interface WidgetProp {
    img?: string;
    children: React.ReactNode;
}

export const Widget: React.FC<WidgetProp> = ( {img, children} ) => {
  return (
    <div className='Widget'>
        <img src={img}></img>
        {children}
    </div>
  )
}
