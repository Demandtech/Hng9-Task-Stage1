import React from 'react'

const Button = (props) => {
    let {
        className,
        id,
        title,
        href,
        btnName,
        to,
    } = props.button
    return (
        <a
            href={href}
            id={id}
            to={to}
            className={className}
            title={title}
        >
            {btnName}
        </a>
    )
}

export default Button