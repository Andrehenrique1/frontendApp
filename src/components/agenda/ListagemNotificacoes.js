import React, {useEffect, useState} from 'react';
import {
    BackHandler,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity, ScrollView
} from 'react-native';
import filter from '../img/icons/filter.png';
import chaveiro from '../img/profissoes/chaveiro.png';
import cuidador from '../img/profissoes/cuidador.png';
import encanador from '../img/profissoes/ecanadorIcon.png';
import eletricista from '../img/profissoes/eletricistaIcon.png';
import faxineiro from '../img/profissoes/faxineiraIcon.png';
import jardineiro from '../img/profissoes/jardineiroIcon.png';
import pedreiro from '../img/profissoes/pedreiroIcon.png';
import pintor from '../img/profissoes/pintorIcon.png';
import piscineiro from '../img/profissoes/piscineiroIcon.png';
import {FontAwesome} from "@expo/vector-icons";
import {Picker} from "@react-native-picker/picker";
import {BASE_URL} from "../../Config";
import MenuAutonomo from "../componentes/menuAutonomo";

export default function ListagemNotificacoes({route, navigation}) {

    const [openFilter, setOpenFilter] = useState(false);
    const [status, setStatus] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const {customerId} = route.params;
    const {csrfToken} = route.params;
    const {countNotifications} = route.params;

    const closeOption = () => {
        setOpenFilter(false);
    };

    const hasFilters = () => {
        return !!status;
    };

    const clearFilters = () => {
        setStatus('');

        // Recarregue a lista completa (sem filtros)
        fetch(`${BASE_URL}/get-autonomo`)
            .then((response) => response.json())
            .then((responseData) => {
                setFilteredData(responseData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    const handleFilter = () => {
        const apiUrl = `${BASE_URL}/get-autonomo?status=${status}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((responseData) => {
                setFilteredData(responseData);
                setOpenFilter(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.list}>
                    {openFilter ? (
                        <View style={styles.overlay}>
                            <View style={styles.filterGroup}>
                                <View style={styles.align}>
                                    <View style={styles.alignFilter}>
                                        <TouchableOpacity onPress={() => closeOption()}>
                                            <View style={styles.filterContainer}>
                                                <FontAwesome name="window-close" size={20} color="#666"/>
                                                <Text style={styles.profissao}>Fechar</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.form}>
                                <View style={styles.inputFlex}>
                                    <Text style={styles.subtitle}>Busque pela status do serviço</Text>
                                    <Picker
                                        style={styles.picker}
                                        selectedValue={status}
                                        onValueChange={(itemValue) => setStatus(itemValue)}
                                    >
                                        <Picker.Item label="Selecione um status" value=""/>
                                        <Picker.Item label="Pendente" value="pintor"/>
                                        <Picker.Item label="Em progresso" value="eletricista"/>
                                        <Picker.Item label="Concluído" value="pedreiro"/>
                                    </Picker>
                                </View>
                                {hasFilters() && (
                                    <TouchableOpacity style={styles.buttonClearOne} onPress={clearFilters}>
                                        <Text style={styles.buttonClear}>Limpar Filtros</Text>
                                    </TouchableOpacity>
                                )}
                                <TouchableOpacity style={styles.button} onPress={handleFilter}>
                                    <Text style={styles.buttonText}>Filtrar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : (
                        <View style={styles.align}>
                            <View style={styles.alignFilter}>
                                <TouchableOpacity onPress={() => setOpenFilter(true)}>
                                    <View style={styles.filterContainer}>
                                        <Image style={{width: 22, height: 22}} source={filter}/>
                                        <Text style={styles.profissao}>Filtrar</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </View>
                <Text style={styles.titlePage}>Serviços Pendentes</Text>
                <View style={styles.list}>
                    <TouchableOpacity style={styles.box}>
                        <View style={styles.content}>
                            <Text>
                                Cliente: <Text style={styles.span}>André Henrique</Text>
                            </Text>
                            <Text>
                                Status: <Text style={styles.span}>Pendente</Text>
                            </Text>
                            <Text>
                                Data: <Text style={styles.span}>15/06/2002</Text>
                            </Text>
                            <Text>
                                Horário: <Text style={styles.span}>08:00</Text>
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box}>
                        <View style={styles.content}>
                            <Text>
                                Cliente: <Text style={styles.span}>André Henrique</Text>
                            </Text>
                            <Text>
                                Status: <Text style={styles.span}>Pendente</Text>
                            </Text>
                            <Text>
                                Data: <Text style={styles.span}>15/06/2002</Text>
                            </Text>
                            <Text>
                                Horário: <Text style={styles.span}>08:00</Text>
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={styles.titlePage}>Serviços em progresso</Text>
                <View style={styles.list}>
                    <TouchableOpacity style={styles.progresso}>
                        <View style={styles.content}>
                            <Text>
                                Cliente: <Text style={styles.span}>André Henrique</Text>
                            </Text>
                            <Text>
                                Status: <Text style={styles.span}>Em progresso</Text>
                            </Text>
                            <Text>
                                Data: <Text style={styles.span}>15/06/2002</Text>
                            </Text>
                            <Text>
                                Horário: <Text style={styles.span}>08:00</Text>
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={styles.titlePage}>Serviços Concluídos</Text>
                <View style={styles.list}>
                    <TouchableOpacity style={styles.concluido}>
                        <View style={styles.content}>
                            <Text>
                                Cliente: <Text style={styles.span}>André Henrique</Text>
                            </Text>
                            <Text>
                                Status: <Text style={styles.span}>Concluído</Text>
                            </Text>
                            <Text>
                                Data: <Text style={styles.span}>15/06/2002</Text>
                            </Text>
                            <Text>
                                Horário: <Text style={styles.span}>08:00</Text>
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <MenuAutonomo csrfToken={csrfToken} customerId={customerId} navigation={navigation}
                          countNotifications={countNotifications}></MenuAutonomo>
        </>
    );
}

const styles = StyleSheet.create({
    overlay: {
        position: 'relative',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#fff',
        zIndex: 1000,
        padding: 18,
        paddingTop: 0
    },
    inputFlex: {
        flexDirection: 'column'
    },
    button: {
        backgroundColor: '#1333cd',
        color: 'white',
        padding: 12,
        marginVertical: 8,
        borderWidth: 0,
        fontWeight: '600',
        borderRadius: 4,
        width: '100%',
        fontSize: 17,
        shadowColor: '#00000033',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 2,
    },
    buttonClearOne: {
        color: 'white',
        padding: 1,
        marginVertical: 8,
        borderWidth: 0,
        fontWeight: '600',
        borderRadius: 4,
        width: '100%',
        fontSize: 17
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    buttonClear: {
        color: '#666',
        textAlign: 'center',
    },
    picker: {
        borderWidth: 2,
        borderColor: 'transparent',
        transitionProperty: 'borderColor, boxShadow',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-in-out',
        width: 375,
        padding: 12,
        marginVertical: 8,
        boxSizing: 'border-box',
        height: 50,
        backgroundColor: '#f3f3fd',
    },
    subtitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#666666',
    },
    input: {
        borderWidth: 2,
        borderColor: 'transparent',
        transitionProperty: 'borderColor, boxShadow',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-in-out',
        width: '100%',
        padding: 12,
        marginVertical: 8,
        boxSizing: 'border-box',
        height: 50,
        backgroundColor: '#f3f3fd',
    },
    textFilter: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        color: '#333',
        marginRight: 10
    },
    filterGroup: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    list: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    align: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titlePage: {
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 12,
        color: '#333',
    },
    alignFilter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e8e9eb',
        padding: 10,
        marginTop: 20,
        marginBottom: 5,
        borderRadius: 10,
    },
    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-around'
    },
    box: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 15,
        paddingBottom: 20,
        paddingTop: 20,
        backgroundColor: '#F8F8F8',
        borderRadius: 10,
        margin: 10,
        shadowColor: '#2C2C2C',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },
    concluido: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 15,
        paddingBottom: 20,
        paddingTop: 20,
        backgroundColor: '#F8F8F8',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#6fdc03',
        margin: 10,
        shadowColor: '#2C2C2C',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },
    progresso: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 15,
        paddingBottom: 20,
        paddingTop: 20,
        backgroundColor: '#F8F8F8',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#0340dc',
        margin: 10,
        shadowColor: '#2C2C2C',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },
    icon: {
        width: 50,
        height: 50,
        marginRight: 15,
    },
    content: {
        flexDirection: 'column',
        flex: 1,
        gap: 5,
    },
    name: {
        textTransform: 'capitalize',
    },
    span: {
        color: '#666666',
        textTransform: 'capitalize',
    },
    avaliation: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avaliationIcon: {
        width: 20,
        height: 20,
    },
    numberAvaliation: {
        textTransform: 'capitalize',
        marginLeft: 8,
        fontSize: 14,
    },
});