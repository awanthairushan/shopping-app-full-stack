import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Navbar, NavLink, Nav, NavDropdown} from "react-bootstrap";
import {ISelectOption} from "../../Types/ISelectOption";

const NavBar: React.FC = () => {

    //handle categories dropdown
    const onHandleDropdownSelect = (e: null | string) => {
        options.forEach((item) => {
            if (item.value.toString() === e) {
                SetSelectedCategoryDropdownItem(item);
            }
        });
    }

    const options: ISelectOption[] = [
        {value: 1, label: 'Category 1'},
        {value: 2, label: 'Category 2'},
        {value: 3, label: 'Category 3'},
        {value: 4, label: 'Category 4'},
    ];

    const renderCategories = () => {
        return options.map((option) => {
            return <NavDropdown.Item key={option.value} eventKey={option.value}>{option.label}</NavDropdown.Item>
        })
    }
    const [selectedCategoryDropdownItem, SetSelectedCategoryDropdownItem] = useState<null | ISelectOption>(null)


    return (
        <Navbar className='py-4 header-navbar' collapseOnSelect expand='lg'>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ms-1 mb-2 ms-lg-5 ms-md-4 ps-2"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='ms-0 ms-lg-5 ms-md-4'>
                    <NavDropdown
                        title={selectedCategoryDropdownItem ? selectedCategoryDropdownItem.label : "Categories"}
                        id="collasible-nav-dropdown" className="navbar-dropdown ps-0 px-lg-3 py-0"
                        onSelect={onHandleDropdownSelect}>
                        {renderCategories()}
                    </NavDropdown>
                    <NavLink as={Link} to='/' className='mx-lg-2'>Home</NavLink>
                    <NavLink as={Link} to='/faq' className='mx-lg-2'>FAQ</NavLink>
                    <NavLink as={Link} to='/about' className='mx-lg-2'>About Us</NavLink>
                    <NavLink as={Link} to='/contact' className='mx-lg-2'>Contact Us</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;


