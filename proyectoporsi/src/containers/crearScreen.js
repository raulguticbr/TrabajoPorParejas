import React, { useState } from 'react';
import { Text, View, TextInput, Button, Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker';
export default function listaScreen() {
    const [nom_fruta, setNom_fruta] = useState("");
    const [number, onChangeNumber] = useState(0);
    const [selectedLanguage, setSelectedLanguage] = useState('jhghjfgh');
    function llamadaPost() {
        return (
            fetch('http://10.0.2.2:8080/fruits', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "name": nom_fruta,
                    "price": number
                }),

            })
                .then((responseJson) => {
                    console.log('getting data from fetch', responseJson);
                    Alert.alert("Fruta añadida correctamente");
                    setNom_fruta(null);
                    onChangeNumber(null);
                })
                .catch(error => console.log(error))
        );
    }
    return (

        <View>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20, marginVertical: 20, fontWeight: 'bold' }}>Aqui puedes crear frutas nuevas</Text>
                <Text>A continuacion selecciona la fruta que quieras añadir o modificar</Text>
            </View>
            
            <Picker
                selectedValue={nom_fruta}
                onValueChange={(itemValue) =>
                    setNom_fruta(itemValue)
                }>
                <Picker.Item label="Naranja" value="Naranja" />
                <Picker.Item label="Manzana" value="Manzana" />
                <Picker.Item label="Mandarina" value="Mandarina" />
                <Picker.Item label="Pera" value="Pera" />
                <Picker.Item label="Piña" value="Piña" />
                <Picker.Item label="Papaya" value="Papaya" />
                <Picker.Item label="Platano" value="Platano" />
                <Picker.Item label="Fresa" value="Fresa" />
                <Picker.Item label="Mango" value="Mango" />
                <Picker.Item label="Albaricoque" value="Albaricoque" />
                <Picker.Item label="Frambuesa" value="Frambuesa" />
                <Picker.Item label="Tomate" value="Tomate" />
                <Picker.Item label="Uvas" value="Uvas" />
            </Picker>
            {/* <TextInput
                style={{ borderColor: 'black', borderWidth: 1, width: 300, marginVertical: 10, marginVertical: 10 }}
                onChangeText={setNom_fruta}
                value={nom_fruta}
            /> */}

            <View style={{ alignItems: 'center' }}>
                <Text>Aqui introduce el precio que quieres que cueste la fruta seleccionada</Text>
                <TextInput
                    style={{ borderColor: 'black', borderWidth: 1, width: 100, marginVertical: 10 }}
                    onChangeText={onChangeNumber}
                    value={number}
                    keyboardType="numeric"
                />
                <View style={{ marginTop: 100 }}>
                    <Button
                        onPress={llamadaPost}
                        title="Crear Fruta"
                        color="orange"

                    />
                </View> 
            </View>
            

        </View>


    );


}