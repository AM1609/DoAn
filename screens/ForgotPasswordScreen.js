import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    KeyboardAvoidingView,
    TextInput,
    Pressable,
  } from "react-native";
  import React, { useState,useEffect } from "react";
  import { MaterialIcons } from "@expo/vector-icons";
  import { AntDesign } from "@expo/vector-icons";
  import { useNavigation } from "@react-navigation/native";
  import axios from "axios";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import { firebase } from '../config';
  import { useRoute } from "@react-navigation/native";
  
  const ForgotPasswordScreen = () => {
    const [sendPassworSuccess, setsendPassworSuccess] = useState(false);
    const [email, setEmail] = useState("");
    const dataToSend = " dwadwad"
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    useEffect(() => {
      const checkLoginStatus = async () => {
        try {
          const token = await AsyncStorage.getItem("authToken");
  
          if (token) {
            navigation.replace("Main", {data:dataToSend});
          }
        } catch (err) {
          console.log("error message", err);
        }
      };
      checkLoginStatus();
    }, []);
    const handleLogin = () => {
      const user = {
        email: email,
        password: password,
      };
  
      firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then((userCredential) => {
            setsendPassworSuccess(true);
            
        })
        .catch((error) => {
          alert(error.message);
        });
    };
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "white", alignItems: "center",marginTop:50 }}
      >
        <View>
          <Image
            style={{ width: 150, height: 100 }}
            source={{
              uri: "https://cdn1.vectorstock.com/i/1000x1000/37/30/shopping-bag-e-commerce-logo-vector-30103730.jpg",
            }}
          />
        </View>
  
        <KeyboardAvoidingView>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                marginTop: 12,
                color: "#041E42",
              }}
            >
              Forgot Password
            </Text>
          </View>

          {sendPassworSuccess && <Text style={{ color: 'green' }}>Password reset email sent</Text>}

          
          <View style={{ marginTop: 70 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#D0D0D0",
                paddingVertical: 5,
                borderRadius: 5,
                marginTop: 30,
              }}
            >
              <MaterialIcons
                style={{ marginLeft: 8 }}
                name="email"
                size={24}
                color="gray"
              />
  
              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={{
                  color: "gray",
                  marginVertical: 10,
                  width: 300,
                  fontSize: email ? 16 : 16,
                }}
                placeholder="Enter your Email"
              />
            </View>
          </View>
{/*   
          <View style={{ marginTop: 10 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#D0D0D0",
                paddingVertical: 5,
                borderRadius: 5,
                marginTop: 30,
              }}
            >
              <AntDesign
                name="lock1"
                size={24}
                color="gray"
                style={{ marginLeft: 8 }}
              />
  
              <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                style={{
                  color: "gray",
                  marginVertical: 10,
                  width: 300,
                  fontSize: password ? 16 : 16,
                }}
                placeholder="Enter your Password"
              />
            </View>
          </View> */}
  
          <View
            style={{
              marginTop: 12,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
  
            
          </View>
  
          <View style={{ marginTop: 80 }} />
  
          <Pressable
            onPress={handleLogin}
            style={{
              width: 200,
              backgroundColor: "#FEBE10",
              borderRadius: 6,
              marginLeft: "auto",
              marginRight: "auto",
              padding: 15,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Confirm
            </Text>
          </Pressable>
  
          <Pressable
            onPress={() => navigation.navigate("Register")}
            style={{ marginTop: 15 }}
          >
            
          </Pressable>
          <Pressable
          onPress={() => navigation.goBack()}
          style={{ marginTop: 15 }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
           Back To Login
          </Text>
        </Pressable>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };
  
  export default ForgotPasswordScreen;
  
  const styles = StyleSheet.create({});
  