import React from 'react'
import { Router } from 'react-native-router-flux'
import scenes from './scenes'
import * as styles from './styles'

export default () => (
    <Router
        scenes={scenes}
        getSceneStyle={styles.getSceneStyle}
        animationStyle={styles.animationStyle}
    />
)