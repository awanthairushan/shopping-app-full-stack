import {FC} from 'react';
import Carrot from '../../assets/images/carrot.png';
import {Image, Table} from "react-bootstrap";
import {MinusCircle, PlusCircle, X} from "react-feather";

const CheckOutTableItem: FC = () => {
    return (
        <Table className='checkout-table'>
            <thead>
            <tr>
                <td>#</td>
                <td/>
                <td>Item</td>
                <td>Qty</td>
                <td>Unit Price</td>
                <td>Amount</td>
                <td/>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>
                    <Image src={Carrot} className='checkout-table-item-image' fluid={true}/>
                </td>
                <td>Carrot 1Kg</td>
                <td>
                    <MinusCircle size="20"/>
                    <span className="px-1">1000</span>
                    <PlusCircle size="20"/>
                </td>
                <td>Rs.999.99</td>
                <td>Rs.999,000.99</td>
                <td><X/></td>
            </tr>
            </tbody>
        </Table>
    )
}

export default CheckOutTableItem;
