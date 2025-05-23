import { Text, View, ImageBackground, TouchableOpacity } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

//Import styles
import { styles } from './src/assets/styles/StylesSheet.js';

// Import icones
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign'


export default function app() {
  const [quant, setQuant] = useState(1);
  const pricePerDrink = 8;
  const totalPrice = quant * pricePerDrink;

  const moreProduct = () => {
    setQuant(prevQuant => prevQuant + 1);
    console.log(totalPrice)
  }

  const lessProduct = () => {
    if (quant > 1) {
      setQuant(prevQuant => prevQuant - 1);
    }
  }

  return (
    <View style={styles.container} >
      <StatusBar hidden></StatusBar>
      <ImageBackground
        source={require("./src/assets/images/coca.jpg")}
        style={{ width: "100%", height: "72%", resizeMode: "cover" }}>

        <TouchableOpacity
          style={{
            position: "absolute",
            top: 40,
            left: 30,
            width: 48,
            height: 48,
            backgroundColor: "#302e3b",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <FontAwesome5 name="arrow-left" size={24} color="white" ></FontAwesome5>
        </TouchableOpacity>
      </ImageBackground>

      <View style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: "100%",
        height: "50%",
        backgroundColor: "#302e3b",
        borderTopRightRadius: 50,
      }}>

        <Text style={{ color: "#fff", fontSize: 30, letterSpacing: 2, fontStyle: "italic" }}>Lemon Drink</Text>
        <Text style={{ color: '#797993' }}>Fresh Drink</Text>
        <View style={{
          position: "absolute",
          right: 60,
          top: -60,
          backgroundColor: "#48485b",
          width: 60,
          justifyContent: "center",
          alignItems: "center",
          padding: 5,
          borderRadius: 10,
          gap: 10
        }}>
          <TouchableOpacity style={{
            widht: 20,
            height: 20,
            backgroundColor: "#302e3b",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center"
          }}
            onPress={moreProduct}>
            <Text style={{ color: "#fff" }}>+</Text>
          </TouchableOpacity>
          <Text style={{
            color: "#fff",
            width: 20,
            height: 20,
            backgroundColor: "#797993",
            borderRadius: 20,
            textAlign: "center",
          }}>{quant}</Text>
          <TouchableOpacity style={{
            widht: 20,
            height: 20,
            backgroundColor: "#302e3b",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center"
          }}
            onPress={lessProduct}>
            <Text style={{ color: "#fff" }}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={{ width: "100%", marginTop: 10, gap: 20, flexDirection: "row" }}></View>
        <View style={{
          width: 80,
          padding: 10,
          borderWidth: 1,
          borderColor: '#797993',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{ color: '#797993' }}>15%</Text>
          <Text style={{ color: '#797993' }}>Lemon</Text>
        </View>

        <View style={{
          width: 80,
          padding: 10,
          borderWidth: 1,
          borderColor: '#797993',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{ color: '#797993' }}>15%</Text>
          <Text style={{ color: '#797993' }}>Lemon</Text>
        </View>

        <View style={{
          width: 80,
          padding: 10,
          borderWidth: 1,
          borderColor: '#797993',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{ color: '#797993' }}>15%</Text>
          <Text style={{ color: '#797993' }}>Lemon</Text>
        </View>

        <View style={{ width: '100%', backgroundColor: "red", flexDirection: "row", marginTop: 20 }}></View>

        <View style={{ width: "40%", backgroundColor: "#13132a", padding: 10, borderRadius: 10 }}>
          <Text style={{ color: "#797993" }}>$8 Price a Drink</Text>
        </View>

        <View style={{ width: "40%", backgroundColor: "#13132a", padding: 15, borderRadius: 10 }}>
          <Text style={{ color: "#ffffff" }}>$16 <Text style={{ color: "#797993" }}> Total Price </Text></Text>
        </View>

        <View style={{ flex: 1, backgroundColor: "#000", paddingLeft: 30 }}>
          <Text style={{ color: "#fff", fontSize: 18, marginTop: 20 }}>Total Order</Text>

          <View style={{ width: '60%', paddingTop: 20, flexDirection: 'row', gap: 20, justifyContent: "space-evenly" }}>
            <View style={{ alignItems: "center", width: 90, height: 50, justifyContent: "flex-end" }}>
              <Entypo name="drink" size={24} color="#797993"></Entypo>
              <Text style={{ color: '#797993' }}> Total Carrinho </Text>
            </View>

            <View style={{ alignItems: "center", width: 90, height: 50, justifyContent: "flex-end" }}>
              <Text style={{ color: '#ffffff', fontSize: 17 }}> $32 </Text>
              <Text style={{ color: '#797993' }}>${totalPrice} Total Price </Text>
            </View>


          </View>
        </View>

        <View style={{
          position: "absolute",
          right: 60,
          top: 20,
          backgroundColor: "#48485b",
          width: 60,
          height: 110,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          borderRadius: 10,
          gap: 10
        }}>
          <AntDesign name="creditcard" size={24} color="#302e3b"></AntDesign>
          <Text style={{ color: "#302e3b", fontSize: 6 }}>Mastercard</Text>
          <Text style={{ color: "#ffffff" }}>Pay</Text>
        </View>

      </View>
    </View >

  );
}
