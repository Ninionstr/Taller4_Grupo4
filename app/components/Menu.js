"use client"
import "@/app/globals.css";
import Map from "@/app/components/Map"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";

function Menu_1( {data} ) {
    const [Lager, setLager] = useState(0);
    const [SinFiltrar, setFiltrar] = useState(0);
    const [Bock, setBock] = useState(0);
    const [PaleAle, setPaleale] = useState(0);
    const [Trigo, setTrigo] = useState(0);

    const tipos_1 = [{state: Lager, indice: 0},
                {state: SinFiltrar, indice: 1},
                {state: Bock, indice: 2},
                {state: PaleAle, indice: 3},
                {state: Trigo, indice: 4}];

    return(
    <>
        <Menu className="Menu" closeOnSelect={false}>

            <MenuButton as={Button} className="MenuButton" colorScheme={"green"}>
                Filtros
            </MenuButton>

            <MenuList className="Menu" closeOnSelect="false">

                <MenuItem className="checkboxLager">
                    <Checkbox  onChange={()=>setLager(!Lager)}>Lager</Checkbox>
                </MenuItem>

                <MenuItem className="checkboxSinFiltrar">
                    <Checkbox  onChange={()=>setFiltrar(!SinFiltrar)}>SinFiltrar</Checkbox>
                </MenuItem>

                <MenuItem className="checkboxBock">
                    <Checkbox  onChange={()=>setBock(!Bock)}>Bock</Checkbox>
                </MenuItem>

                <MenuItem className="checkboxPaleAle">
                    <Checkbox onChange={()=>setPaleale(!PaleAle)}>PaleALe</Checkbox>
                </MenuItem>

                <MenuItem className="checkboxTrigo">
                    <Checkbox  onChange={()=>setTrigo(!Trigo)}>Trigo</Checkbox>
                </MenuItem>

            </MenuList>
        </Menu>

        <div className="center" color="d8f6d7">
            <Map data={data} tipos={tipos_1}/>
        </div>
    </>
    );


}

export default Menu_1;