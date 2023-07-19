function Button ({text, type, className}) {
    return (
        <button type={type} className={className}>
            {text}
        </button>
    )
}

export default Button;