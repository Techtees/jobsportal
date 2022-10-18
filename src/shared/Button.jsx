function Button ({text, type, btnStyle}) {
    return (
        <button type={type} className={btnStyle}  >
            {text}
        </button>
    )
}

export default Button;