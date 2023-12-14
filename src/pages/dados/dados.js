import { RiDeleteBack2Line } from "react-icons/ri";
import React, { useState } from 'react';
import logo2 from '../../image/LogoReserva.png';
import './dados.css'

export default function Dados() {
    return (
        <div>
            <div className="imgPorm">
                <img src={logo2} className='porta' alt='logo' />
            </div>

            <div className="inputs">


                <div>
                    <h1>Colaborador:</h1>
                    <input></input>
                </div>
                <div>
                    <h1>CPF:</h1>
                    <input></input>
                </div>
                <div>
                    <h1>Setor:</h1>
                    <input></input>
                </div>
<div className="divConfirm">
<button className="confirm">CONFIRMAR</button>
</div>
            </div>

        </div>
    )
}
