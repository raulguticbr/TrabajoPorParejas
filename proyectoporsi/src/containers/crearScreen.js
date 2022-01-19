import React, { useState } from 'react';
import { Text, View, TextInput,Button, Alert } from 'react-native';
// import Picker from '@react-native-picker/picker';
export default function listaScreen() {
    const [nom_fruta, setNom_fruta] = useState("");
    const [number, onChangeNumber] = useState(0);
    function llamadaPost(){
        return(
            fetch('http://10.0.2.2:8080/fruits',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name":nom_fruta,
                "price":number
            }),
    
    })
    .then((responseJson)=>{
        console.log('getting data from fetch', responseJson);
        Alert.alert("Fruta añadida correctamente");
        setNom_fruta(null);
        onChangeNumber(null);
    })
    .catch(error => console.log(error))
        );
    }
    return (

        <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 20, marginVertical: 20, fontWeight: 'bold' }}>Aqui puedes crear frutas nuevas</Text>
            <Text>A continuacion selecciona la fruta que quieras añadir o modificar</Text>
            {/* <Picker
                selectedValue={nom_fruta}
                onValueChange={(itemValue) => this.setNom_fruta({ itemValue })
                }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker> */}
             <TextInput
                style={{ borderColor: 'black', borderWidth: 1, width: 300, marginVertical: 10 ,marginVertical: 10}}
                onChangeText={setNom_fruta}
                value={nom_fruta}
            />
            <Text>Aqui introduce el precio que quieres que cueste la fruta seleccionada</Text>
            <TextInput
                style={{ borderColor: 'black', borderWidth: 1, width: 100, marginVertical: 10 }}
                onChangeText={onChangeNumber}
                value={number}
                keyboardType="numeric"
            />
            <View style={{marginTop: 100}}>
            <Button
                onPress={llamadaPost}
                title="Crear Fruta"
                color="orange"
                
            />
            </View>
            
        </View>


    );
          

}