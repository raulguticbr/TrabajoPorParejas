import React, { useState } from 'react';
import { Text, View, TextInput, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
export default function listaScreen() {
    const [nom_fruta, setNom_fruta] = useState("Manzana");
    const [number, onChangeNumber] = useState(0);
    function llamadaPost() {
        if (!isNaN(number)) {
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
        else {
            return (
               
                alert('El precio de la fruta no es valido, tiene que ser numerico')
            );
        }

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
                <Picker.Item label="Manzana" value="Manzana" />
                <Picker.Item label="Naranja" value="Naranja" />
                <Picker.Item label="Pera" value="Pera" />
                <Picker.Item label="Piña" value="Piña" />
                <Picker.Item label="Platano" value="Platano" />
                <Picker.Item label="Uvas" value="Uvas" />
                <Picker.Item label="Melocoton" value="Melocoton" />
                <Picker.Item label="Kiwi" value="Kiwi" />
            </Picker>

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

