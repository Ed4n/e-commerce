
type ShoppingResumeProps = {
    totalPrice: number;
    totalQuantity: number
}

const ShoppingResume: React.FC<ShoppingResumeProps> = ({ totalPrice, totalQuantity }) => {

    const totalShipping = totalQuantity * 1.5
    const totalTaxes = Math.floor((totalPrice * totalQuantity) * 0.07)

    const finalTotal = (totalPrice * totalQuantity) + totalTaxes + totalShipping
    return (

        (
            <div className="w-full bg-gray-500 rounded-t-2xl h-[40vh] bottom-0 absolute p-9 text-gray-50 flex flex-col gap-7">
                {
                    totalPrice > 0 && totalQuantity > 0 ?
                        (<>
                            <div className=" flex justify-between items-center">
                                <span className=" text-lg">Total: </span>
                                <span className=" text-lg font-bold">${totalPrice * totalQuantity}</span>
                            </div>
                            <div className=" flex justify-between items-center">
                                <span className=" text-lg">Total Shipping: </span>
                                <span className=" text-lg font-bold">${totalShipping}</span>
                            </div>

                            <div className=" flex justify-between items-center">
                                <span className=" text-lg">Total Taxes: </span>
                                <span className=" text-lg font-bold">${totalTaxes}</span>
                            </div>

                            <div className=" flex justify-between items-center">
                                <span className=" text-xl">Final Total: </span>
                                <span className=" text-2xl font-bold">${finalTotal}</span>
                            </div>
                        </>

                        ) : (<div className=" justify-center self-center text-lg">Nothing to Check</div>)
                }


            </div>
        )
    )
}

export { ShoppingResume }