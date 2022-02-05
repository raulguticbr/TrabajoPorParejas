import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, FlatList, RefreshControl, Image } from 'react-native';

export default function listaScreen() {
    const [fruits, setFruits] = useState(null);
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(true);

    const wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false), getFruits());
    }, []);

    function getFruits() {
        fetch("http://10.0.2.2:8080/fruits")
            .then(response => response.json())
            .then((responseJson) => {
                setFruits(responseJson);
                console.log(responseJson);
                console.log(responseJson.length);
                setLoading(false);
            })
            .catch(error => console.log(error));
    }


    useEffect(() => {
        getFruits();
    }, []);


    function renderItem({ item }) {
        if (item.name === 'Pera') {
            return (
                <View style={{ alignItems: 'center', flexDirection: 'row', marginBottom: 10 }}>
                    <View>
                        <Image style={{ width: 120, height: 100, marginRight: 50 }} source={require('../../assets/pera.png')} />
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>{item.name} {item.price}€</Text>
                    </View>

                </View>
            )
        }
        if (item.name === 'Platano') {
            return (
                <View style={{ alignItems: 'center', flexDirection: 'row', marginBottom: 10 }}>
                    <View>
                        <Image style={{ width: 120, height: 100, marginRight: 50 }} source={require('../../assets/platano.png')} />
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>{item.name} {item.price}€</Text>
                    </View>

                </View>
            )
        }
        if (item.name === 'Naranja') {
            return (
                <View style={{ alignItems: 'center', flexDirection: 'row', marginBottom: 10 }}>
                    <View>
                        <Image style={{ width: 120, height: 100, marginRight: 50 }} source={require('../../assets/naranja.png')} />
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>{item.name} {item.price}€</Text>
                    </View>

                </View>
            )
        }
        if (item.name === 'Uvas') {
            return (
                <View style={{ alignItems: 'center', flexDirection: 'row', marginBottom: 10 }}>
                    <View>
                        <Image style={{ width: 120, height: 100, marginRight: 50 }} source={require('../../assets/uvas.png')} />
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>{item.name} {item.price}€</Text>
                    </View>

                </View>
            )
        }
        if (item.name === 'Piña') {
            console.log("He entrado en piña")
            return (
                <View style={{ alignItems: 'center', flexDirection: 'row', marginBottom: 10 }}>
                    <View>
                        <Image style={{ width: 120, height: 100, marginRight: 50 }} source={require('../../assets/pina.png')} />
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>{item.name} {item.price}€</Text>
                    </View>

                </View>
            )
        }
        if (item.name === 'Kiwi') {
            console.log("He entrado en kiwi")
            return (
                <View style={{ alignItems: 'center', flexDirection: 'row', marginBottom: 10 }}>
                    <View>
                        <Image style={{ width: 120, height: 100, marginRight: 50 }} source={require('../../assets/kiwi.png')} />
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>{item.name} {item.price}€</Text>
                    </View>

                </View>
            )
        }
        if (item.name === 'Melocoton') {
            return (
                <View style={{ alignItems: 'center', flexDirection: 'row', marginBottom: 10 }}>
                    <View>
                        <Image style={{ width: 120, height: 100, marginRight: 50 }} source={require('../../assets/melocoton.png')} />
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>{item.name} {item.price}€</Text>
                    </View>

                </View>
            )
        }
        if (item.name === 'Manzana') {
            return (
                <View style={{ alignItems: 'center', flexDirection: 'row', marginBottom: 10 }}>
                    <View>
                        <Image style={{ width: 120, height: 100, marginRight: 50 }} source={require('../../assets/manzana.png')} />
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>{item.name} {item.price}€</Text>
                    </View>

                </View>
            )
        }


    };
    if (loading) {
        return (
            <Text>Cargando...</Text>
        )
    } else {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontweight: 'bold', fontSize: 30 }}>Frutería de Pablo y Raúl</Text>
                    <Text style={{ margin: 20 }}>Esta es la fruta fresca de hoy</Text>
                    <FlatList style={{marginBottom: 110}}
                        data={fruits}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />}
                    />
                </View>
            </SafeAreaView>
        )
    }
}