import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TouchableOpacity, FlatList, StyleSheet, Image, View, Text, ScrollView, TextInput } from 'react-native'
import { Appbar, ActivityIndicator } from 'react-native-paper'
import SimplelineIcon from 'react-native-vector-icons/SimpleLineIcons'
import { fetchOrgsRequest } from '../../store/actions/orgs'

const Orgs = ({ }) => {
    const orgs = useSelector(s => s.orgs)
    const dispatch = useDispatch()
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    const fetchUser = () => dispatch(fetchOrgsRequest(searchQuery))

    const cuttext = (text, maxlength) => {
        if (text && text.length > maxlength) {
            var newtext = text.slice(0, maxlength);
            newtext += "..."
            return newtext
        } else return text
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={{ backgroundColor: 'white', marginBottom: 10, padding: 20 }}>
                <View>
                    <Text style={{ fontSize: 20 }}>{item.name}</Text>
                    <View >
                        <Text style={{ color: '#555', marginTop: 10 }}>{cuttext(item.description, 100)}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <>
            <Appbar.Header style={styles.header} >
                <TextInput
                    placeholder="Enter username to search for orgs"
                    onChangeText={onChangeSearch}
                    style={styles.searchInput}
                    onSubmitEditing={fetchUser}
                />
            </Appbar.Header>

            {orgs.isLoading ?
                <View style={styles.centeralize} >
                    <ActivityIndicator color={'red'} />
                </View>
                :
                orgs.isError ?
                    <ScrollView contentContainerStyle={styles.centeralize}>
                        <View style={styles.container}>
                            <SimplelineIcon name="paper-plane" size={30} />
                            <Text style={styles.text}>{orgs.isError}</Text>
                        </View>
                    </ScrollView>
                    :
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={orgs.data}
                        renderItem={renderItem}
                        contentContainerStyle={{
                            paddingLeft: 20,
                            paddingRight: 20,
                            marginTop: 20
                        }}

                    />
            }

        </>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "white",
        elevation: 0,
        shadowOffset: { width: 0, height: 0, },
        justifyContent: 'center'
    },
    centeralize: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
    },
    searchInput: {
        width: 80 + "%",
        textAlign: "center",
        fontSize: 16,
        backgroundColor: '#eee',
        height: 30,
        borderRadius: 10
    },
});
export default Orgs