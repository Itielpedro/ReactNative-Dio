import React from "react";
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';

const colorGitHub = '#010409';
const colorFontGitHub = '#C9D1D9'; 
const colorDarkFontGitHub = '#4F565E'; 
const imageProfile = 'https://avatars.githubusercontent.com/u/86886606?v=4';
const urlToGitHub = 'https://github.com/itielpedro';

const App = () => {

    const openUrlGitHub = async () =>{
        console.log('verificando Link...');
       const res = await Linking.canOpenURL(urlToGitHub);
       
       if(res){
            console.log('Link Aprovado!');
            await Linking.openURL(urlToGitHub);
            console.log('Abrindo Link...');
       }
    }
    return (
        <SafeAreaView style = {style.container}>
            <StatusBar backgroundColor={colorGitHub} barStyle ='ligth-content'></StatusBar>
            <View style = {style.content}>
                <Image accessibilityLabel="Foto de Perfil Itiel Pedro" source={{uri: imageProfile}} style={style.avatar}></Image>
                <Text accessibilityLabel="Nome GitHub Itiel Pedro" style ={[style.text, style.name]}>Itiel Pedro</Text>
                <Text accessibilityLabel="Nickname GitHub Itiel Pedro" style ={[style.text, style.nickname]}>Itielpedro</Text>
                <Text accessibilityLabel="Descrição: Estudante de Análise e Desenvolvimento de Sistemas no IFBA | Developer Web e Mobile" style ={[style.text, style.bio]}>Baiano, Estudante de Análise e Desenvolvimento de Sistemas no IFBA | Developer Web e Mobile.</Text>
                <Pressable onPress={openUrlGitHub}>
                    <View style = {style.button}>
                    <Text style = {[style.text, style.textbutton]}>Open in GitHub</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGitHub,
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 150,
        width: 150,
        borderRadius: 75,
        borderColor: '#FFC3C3',
        borderWidth: 2,
    },
    text:{
        color: colorFontGitHub,
    },
    name:{
        fontSize: 24,
        fontWeight: "bold",
    },
    nickname:{
        fontSize: 19,
        color: colorDarkFontGitHub,
    },
    bio:{
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        
    },
    button:{
        backgroundColor: colorDarkFontGitHub,
        borderRadius: 10,
        padding: 20,
        marginTop: 20, 
    },
    textbutton:{
        fontSize: 16,
        fontWeight: 'bold', 
    },
    button:{
        
        backgroundColor: colorDarkFontGitHub,
        borderRadius: 10,
        padding: 20,
        marginTop: 20, 
    },
});
