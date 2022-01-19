import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';

export default function listaScreen() {
    const [fruits, setFruits] = useState(null);

    function getFruits() {
        fetch("http://10.0.2.2:8080/fruits")
            .then(response => response.json())
            .then((responseJson) => {
                setFruits(responseJson);
                setLoading(false);
            })
            .catch(error => console.log(error));
    }


    useEffect(() => {
        getFruits();
    }, []);


    const renderItem = ({ item }) => (
        <View style={{alignContent: 'center', alignItems: 'center'}}>
            <View>
                <Text style={{ fontWeight: 'bold' }}>Nombre: <Text style={{ fontweight: 'normal' }}> {item.name}</Text></Text>
            </View>
            <View>
                <Text style={{ fontweight: 'bold' }}>Precio: <Text style={{ fontweight: 'normal' }}> {item.price}</Text></Text>
            </View>
        </View>
    );
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <View>
                    <Text style={{ fontweight: 'bold', marginLeft: 20, marginTop: 20, fontSize: 20 }}>Bienvenido a tu fruteria</Text>
                    <Text style={{ margin: 20 }}>Hoy tenemos de oferta los siguientes productos</Text>
                    <FlatList
                        data={fruits}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </SafeAreaView>
                )
    }