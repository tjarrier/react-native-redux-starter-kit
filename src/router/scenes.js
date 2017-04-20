import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'
import { styles } from './styles'

import Counter from '@containers/Counter'

const scenes = Actions.create(
    <Scene key="root" navigationBarStyle={styles.container}>
        <Scene key="counter" title="Counter" component={Counter} />
    </Scene>
)

export default scenes