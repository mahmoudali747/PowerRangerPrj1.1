import React from 'react'
import { useState } from 'react'

import{
  View, Text , TextInput , TouchableOpacity , Image , FlatList
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style'
import { icons , SIZES } from '../../../constants';
const jobTypes = ["Full-time" , "part-time" , "Contractor"] 
const Welcome = () => {
  const router =useRouter();
  const [activeJopType , setActiveJopType] =useState ('Full-time')
  return (
    <View>
      <View style={styles.container}> 
         <Text style = {styles.userName}>Hello Hamda</Text>
         <Text style = {styles.welcomeMessage}>Discover the new scores in football world </Text>
      </View>
      <View style= {styles.searchContainer}>
            <View style = {styles.searchWrapper}>
                  <TextInput 
                  style={styles.searchInput}
                  value=""
                  onChange={() => {}}
                  placeholder="What are you loking for ?"
                  />
            </View>
            <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
              <Image
                source={icons.search}
                resizeMode="contaian"
                style={styles.searchBtnImage}
              />
            </TouchableOpacity>
            <View style ={{width :0 }}>
              <View style={styles.tabsContainer}>
                  <FlatList  style={{}}
                    data={jobTypes}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={styles.tab(activeJopType , item)}
                        onPress={() =>{
                          setActiveJopType(item);
                          router.push(`/serch/${item}`)
                        }}
                        >
                        <Text style={styles.tabText(activeJopType , item)}>{item}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item}
                    contentContainerStyle={{columnGap : SIZES.small}}
                    horizontal
                  />
              </View>
            </View>
      </View>
    </View>
  )
}

export default Welcome