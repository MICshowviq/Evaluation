import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext, AuthProvider } from "./src/Provider/AuthProvider";
import RegistrationScreen from "./src/Screens/RegistrationScreen";
import EcommerceScreen from "./src/Screens/EcommerceScreen";
const stack = createStackNavigator();
const AuthStack = createStackNavigator();

const AuthStackScreens = () =>{
  return(
    <AuthStack.Navigator initialRouteName="SignIn">
      <AuthStack.Screen name="SignIn" component={RegistrationScreen} options={{headerShown: false}}/>
    </AuthStack.Navigator>
  )
}

function App(){
 return(
  <AuthProvider>
    <AuthContext.Consumer>
  {(auth)=><NavigationContainer>
    {/* <stack.Navigator> */}
      {/* <stack.Screen name="MAD(A)" component={HomeScreen}/>
      <stack.Screen name="List Of Products" component={ListScreen}/>
      <stack.Screen name="Counter" component={CounterScreen}/>
      <stack.Screen name="SignIn" component={LoginScreen}/> */}
      {auth?.isLoggedIn? <EcommerceScreen/> : <AuthStackScreens/>}
    {/* </stack.Navigator> */}
  </NavigationContainer>}
  </AuthContext.Consumer>
  </AuthProvider>
 )
}

export default App;