
/*Importación de las dependencias para crear la navegación */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Importación de las pantallas */
import pantalla1 from './screens/pantalla1';

const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>  
      <Stack.Navigator
        initialRouteName='Pantalla1'

        >

        <Stack.Screen name="Pantalla" component={pantalla1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
