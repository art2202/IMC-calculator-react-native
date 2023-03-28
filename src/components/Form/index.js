import React, {useState} from "react"
import { View, Text, TextInput, TouchableOpacity, Vibration, Keyboard, Pressable, FlatList } from "react-native"
import ResultImc from "../ResultImc"
import styles from "./style"

export default function Form(){
    
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura!")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [erroMessage, setErroMessage] = useState(null)
    const [imcList, setImcList] = useState([])

    function verificationImc(){
        if(imc == null){
            Vibration.vibrate()
            setErroMessage("Campo obrigatório*")
        }
    }

    function imcCalculator(){
        let heightFormat = height.replace(",", ".")
        const totalImc = (weight/(heightFormat*heightFormat)).toFixed(2)
        setImcList ((arr) => [{id: new Date().getTime(), imc : totalImc}, ...arr])
        setImc(totalImc)
    }

    function validationImc(){
        if(weight != null && weight != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setErroMessage(null)
            setMessageImc("Seu IMC é igual:")
            setTextButton("Calcular Novamente")
            
        }
        else{
            verificationImc()
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("Preencha o peso e altura")
        }
        
    }


    return(
        <View style={styles.FormContext}>
            {imc == null ?
            <Pressable onPress={Keyboard.dismiss} style={styles.form} >
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.erroMessage}>{erroMessage}</Text>
                <TextInput
                style={styles.formInput}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.75"
                keyboardType="numeric"
                ></TextInput>

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.erroMessage}>{erroMessage}</Text>
                <TextInput
                style={styles.formInput}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex 80"
                keyboardType="numeric"></TextInput>

                <TouchableOpacity 
                style={styles.button}
                onPress={() => validationImc()}
                title={textButton}>

                    <Text style={styles.textButton}> {textButton} </Text>

                </TouchableOpacity>
                
            </Pressable>
            : 
             <View style={styles.exhibitionResultImc}>
                <ResultImc messageResultImc={messageImc} resultImc={imc}/>

                <TouchableOpacity 
                style={styles.button}
                onPress={() => validationImc()}
                title={textButton}>

                    <Text style={styles.textButton}> {textButton} </Text>
                    
                </TouchableOpacity>
             </View> 
            }
            <FlatList
            style={styles.listImc}
            data={imcList}
            renderItem={({item}) =>{
                return(
                    <Text style={styles.textResultItemList}> Resultado IMC =  
                        <Text style={styles.resultImcItem}>{item.imc}</Text>
                    </Text>
                    
                )
            }}
            keyExtractor={(item) =>{
                item.id
            }}
            />
        </View>
    )
}