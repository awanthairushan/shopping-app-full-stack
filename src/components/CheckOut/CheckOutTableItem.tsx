import {BaseSyntheticEvent, FC, useEffect, useState} from 'react';
import Carrot from '../../assets/images/carrot.png';
import {Image, Table} from "react-bootstrap";
import {MinusCircle, PlusCircle, X} from "react-feather";

type checkOutTableItemProps = {
    onClose?: () => void;
}
const CheckOutTableItem: FC<checkOutTableItemProps> = (props) => {
    const {onClose} = props;
    const unitPrice: number = 99999.00; //This should be replaced with the real unit value
    const [itemQty, setItemQty] = useState<number>(0);
    const [itemTotal, setItemTotal] = useState<number>(0)

    //Item quantity  increase handler
    const handleOnItemQtyIncrease = (e: BaseSyntheticEvent) => {
        const newQty = itemQty + 1;
        setItemQty(newQty);
    }

    //Item quantity  decrease handler
    const handleOnItemQtyDecrease = (e: BaseSyntheticEvent) => {
        if (itemQty === 0) {
            return;
        }
        const newQty = itemQty - 1;
        setItemQty(newQty);
    }

    //handle item total on quantity change
    useEffect(() => {
        const newItemTotal = itemQty * unitPrice;
        setItemTotal(newItemTotal);
    }, [itemQty])

    const handleOnRemoveItemClick = (e: BaseSyntheticEvent) => {
        console.log('close');
        // onClose();
    }
    return (
            <tr >
                <td>1</td>
                <td>
                    <Image src={Carrot} className='checkout-table-item-image' fluid={false}/>
                </td>
                <td className="">Carrot 1Kg</td>
                <td>
                    <MinusCircle size="20" className="hover-pointer table-item-icon" id="increaseQty"
                                 onClick={handleOnItemQtyDecrease}/>
                    <span className="px-1 ">{itemQty}</span>
                    <PlusCircle size="20" className="hover-pointer table-item-icon" id="decreaseQty" onClick={handleOnItemQtyIncrease}/>
                </td>
                <td>Rs.{unitPrice.toFixed(2)}</td>
                <td>Rs.{itemTotal}</td>
                <td><X className="hover-pointer" onClick={handleOnRemoveItemClick}/></td>
            </tr>

    )
}

export default CheckOutTableItem;
