import React from 'react';
import { Character } from '../services/DataService';
import './CharacterCard.scss';

type Props = {
    character: Character
}

function CharacterCard({ character }: Props) {

    function uppercaseFirstLetter(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <article className='characterCard'>

            <div className={'profileImage ' + character.house}>
                <img src={character.image} className="image" alt="profileImage" />
            </div>

            <section className={'cardInformation ' + character.alive}>

                <div className='statusInformation'>
                    <div className='statuses'>
                        <h4> {character.alive ? 'VIVO' : 'FINADO'}</h4>
                        <h4 className='separator'>/</h4>
                        <h4 >{character.hogwartsStudent ? 'ESTUDIANTE' : 'STAFF'}</h4>
                    </div>
                    <div className="iconoRectangulo" >
                        <img src='./images/Rectangle.png' alt="iconoRectangulo" />
                    </div>
                </div>

                <div className='characterInformation'>
                    <div className='charactersName'>
                        <h1 className='name'>{character.name}</h1>
                    </div>
                    <div className='profile'>
                        <p><span className='fontBold'>Cumpleaños:</span> {character.dateOfBirth}</p>
                        <p><span className='fontBold'>Género:</span> {uppercaseFirstLetter(character.gender)}</p>
                        <p><span className='fontBold'>Color de ojos:</span> {uppercaseFirstLetter(character.eyeColour)}</p>
                        <p><span className='fontBold'>Color de pelo:</span> {uppercaseFirstLetter(character.hairColour)}</p>
                    </div>
                </div>
                {/* <h1 className='nombrePersonaje'>name del personaje</h1>
                <h4>alive si es true retornar vivo sino finado</h4>
                <h4>hogwartsStudent:true retornar estudiante, hogwartsStaff:true retornar staff</h4> */}
            </section>
        </article >

    );
}

export default CharacterCard;
