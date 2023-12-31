import React, { useState } from "react";
import { Button, View, TextInput, Image, StyleSheet } from "react-native";
import Logo from "../../assets/public/icons/login_logo.png";
import { AuthContext, IAuthProvider } from "../Provider/AuthProvider";

const RegistrationScreen=(props:any)=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const match = {
        'email' : 'test@gmail.com',
        'password': 'abcd1234'
    }

    const handleOnSubmit = (authData: IAuthProvider)=>{
        if(email === match['email'] && password === match['password'])
        {
            console.log("SUCCESSFULL")
            authData.setIsLoggedIn(true)
            // props.navigation.navigate("Counter")
        }
        else
        {
            console.log("FAILED")
        }
    }

    const handleEmailInput = (emailInput:string) =>{
        // console.log(emailInput)
        setEmail(emailInput)
    }

    const handlePassInput = (passInput: string) =>{
        // console.log(passInput)
        setPassword(passInput)
    }
    return(
        <AuthContext.Consumer>
        {(auth)=><View style={styles.mainContainer}>
            <Image source={Logo} style={styles.imageStyles}/>
            <View style={styles.inputContainer}>
                <TextInput value={email} onChangeText={handleEmailInput} style={styles.inputStyles}/>
                <TextInput value={password} onChangeText={handlePassInput}style={styles.inputStyles}/>
            </View>
            <View>
                <Button title="Sign Up" onPress={()=>handleOnSubmit(auth as IAuthProvider)}/>
            </View>
        </View>}
        </AuthContext.Consumer>
    )
}

const styles=StyleSheet.create({
    mainContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyles:{
        height: 100,
        width: 100,
        margin: 40
    },
    inputContainer:{
        display: 'flex',
        margin: 10
    },
    inputStyles:{
        width: 200,
        height: 60,
        marginTop: 20,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 25
    }
})
export default RegistrationScreen;