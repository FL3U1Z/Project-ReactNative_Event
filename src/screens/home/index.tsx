import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"
import { useState } from "react"
import { Participant } from "../../components/participant"
import { styles } from "./styles"

export function Home() {
    const [participants, setParticipants] = useState<string[]>([])
    const [participantsName, setParticipantsName] = useState("")

    function handleParticipantAdd() {
        if(participants.includes(participantsName)){
            return Alert.alert("Participante existe","Já existe um participante com esse nome!")
        }
        setParticipants(prevState => [...prevState, participantsName])
        setParticipantsName("")
    }
    function handleParticipantRemove(name: string) {
        Alert.alert("Remover participante", `Deseja remover o participante ${name}?`, [
            {
                text: "Sim",
                onPress: ()=> setParticipants(prevState => prevState.filter(participant => participant !== name))
            },
            {
                text: "Não",
                style: "cancel"
            }
        ])
    }

    return (
        <View style={styles.container}>

            <TextInput 
            style={styles.eventName}
            placeholder="Nome do Evento"
            placeholderTextColor='#FDFCFE'
            >
            </TextInput>

            <TextInput 
            style={styles.eventDate}
            placeholder="Data do evento"
            placeholderTextColor='#6B6B6B'
            >
            </TextInput>

            <View style={styles.form}>
                <TextInput
                    style={styles.inpunt}
                    placeholder="Nome do participantes"
                    placeholderTextColor='#6B6B6B'
                    onChangeText={setParticipantsName}
                    value={participantsName}
                //keyboardType = seleionar o tipo de teclado exemplo o numerico //
                />

                {/* TouchableOpacity funcion como se oq tiver dentro dele vai ser clicavel */}
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
            showsVerticalScrollIndicator={false}
            data={participants}
            keyExtractor={item => item}
            renderItem={({item}) => (
                <Participant 
                    key={item} //Toda estrutura tem uma key como indentificador, não podendo repetir
                    name={item}
                    onRemove={() => handleParticipantRemove(item)} />
            )}
            //caso a lista esteja vazia:
            ListEmptyComponent={() => (
                <Text style={styles.listEmptyText}>
                    Não há participantes até o momento!!
                </Text>
            )}
            />
        </View>

    )
} 
