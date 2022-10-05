import React, {useEffect, useState} from 'react';
import serieDB from '../api/ConeccionDB';
import {Pers, CharacterInterfaceDB} from '../interfaces/characterInterface';

//interface que usaremos en el useSerie
interface SerieState {
  characterPage1: Pers[];
  characterPage2: Pers[];
  characterPage3: Pers[];
  characterPage4: Pers[];
  characterPage5: Pers[];
  characterPage6: Pers[];
  characterPage7: Pers[];
  characterPage8: Pers[];
  characterPage9: Pers[];
  characterPage10: Pers[];
}

export const useSerie = () => {
  //load
  const [isLoad, setIsLoad] = useState(true);
  //set al state inicializamos con un objt vacio
  const [serieState, setSerieState] = useState<SerieState>({
    characterPage1: [],
    characterPage2: [],
    characterPage3: [],
    characterPage4: [],
    characterPage5: [],
    characterPage6: [],
    characterPage7: [],
    characterPage8: [],
    characterPage9: [],
    characterPage10: [],
  });

  const getSeries = async () => {
    //llamado a db
    const personajePromise1 = serieDB.get<CharacterInterfaceDB>('character');
    const personajePromise2 =
      serieDB.get<CharacterInterfaceDB>('character?page=2');
    const personajePromise3 =
      serieDB.get<CharacterInterfaceDB>('character?page=3');
    const personajePromise4 =
      serieDB.get<CharacterInterfaceDB>('character?page=4');
    const personajePromise5 =
      serieDB.get<CharacterInterfaceDB>('character?page=5');
    const personajePromise6 =
      serieDB.get<CharacterInterfaceDB>('character?page=6');
    const personajePromise7 =
      serieDB.get<CharacterInterfaceDB>('character?page=7');
    const personajePromise8 =
      serieDB.get<CharacterInterfaceDB>('character?page=8');
    const personajePromise9 =
      serieDB.get<CharacterInterfaceDB>('character?page=9');
    const personajePromise10 =
      serieDB.get<CharacterInterfaceDB>('character?page=10');

    //atedemos la promesas todas juntas
    const response = await Promise.all([
      personajePromise1,
      personajePromise2,
      personajePromise3,
      personajePromise4,
      personajePromise5,
      personajePromise6,
      personajePromise7,
      personajePromise8,
      personajePromise9,
      personajePromise10,
    ]);
    //set a state con cada lugar en el arreglo
    setSerieState({
      characterPage1: response[0].data.results,
      characterPage2: response[1].data.results,
      characterPage3: response[2].data.results,
      characterPage4: response[3].data.results,
      characterPage5: response[4].data.results,
      characterPage6: response[5].data.results,
      characterPage7: response[6].data.results,
      characterPage8: response[7].data.results,
      characterPage9: response[8].data.results,
      characterPage10: response[9].data.results,
    });

    setIsLoad(false); //set al loader
  };

  useEffect(() => {
    getSeries();
  }, []);

  return {
    ...serieState,
    isLoad,
  };
};
