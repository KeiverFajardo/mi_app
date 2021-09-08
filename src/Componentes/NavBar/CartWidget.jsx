
const CartWidget = () => {
    return (
        <>
            <a> 
                <img className="w-25" 
                    src="data:image/png;base64,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" alt="" /></a>
        </>
    )
}

export default CartWidget