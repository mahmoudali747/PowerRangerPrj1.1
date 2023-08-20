import React from 'react'
import { View, Text , TouchableOpacity , Image } from 'react-native'

import styles from './popularjobcard.style'

const PopularJobCard = ({item , selectedJob , handelCardPress}) => {
  return (
    <TouchableOpacity 
      style={styles.container(selectedJob , item)}
      onPress={()=> handelCardPress(item)}
    > 
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image 
          source={{uri: item.empoloyer_logo}}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text>{item.empoloyer_name}</Text>
    </TouchableOpacity>
  )
}

export default PopularJobCard