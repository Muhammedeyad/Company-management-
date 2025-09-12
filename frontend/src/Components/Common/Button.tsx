import React from 'react'
import type { ButtonType } from '../../types/CompanyAdmin/PropTypes'
import { BtnAnimation } from '../../Animations/BtnAnimation'

export const Button: React.FC<ButtonType> = ({ title, icon, bgcolor, textcolor, textcommoncolor, width, mt, onClick, customCSS}) => {
    return (
        <BtnAnimation>
            <p onClick={onClick} className={`btn gap-2 mx-0 text-${textcolor}-600 text-${textcommoncolor} w-${width} mt-${mt} ${customCSS}`} style={{ backgroundColor: bgcolor }}><span className='lg:block '>{icon}</span><span>{title}</span></p>
        </BtnAnimation>


    )
}
