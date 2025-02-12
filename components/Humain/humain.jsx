import {s} from './humain.style'
import { Text } from 'react-native'
export function Humain({Nom,Prenom,Age,Activite,children}){
    return <>
        <Text style={s.milay}>
            Je suis {Prenom} {Nom}, nous somme déjà dans le {Age} ans d'existance {' '}
            Nous vous offrons un service de livraison à {Activite.livr} a un coût {Activite.prix} 
        </Text>
        {children}
    </> 
    

}