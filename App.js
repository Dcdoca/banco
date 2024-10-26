import 'react-native-gesture-handler';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import PixScreen from './src/screens/PixScreen';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';

const Tab = createBottomTabNavigator();

export default function App() {
  const [theme, setTheme] = useState('light'); // Estado para alternar tema
  const [balance, setBalance] = useState(1000); // Saldo inicial fictício

  // Alterna entre claro e escuro
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Home') iconName = 'home';
              else if (route.name === 'Pix') iconName = 'compare-arrows';
              return <MaterialIcons name={iconName} color={color} size={size} />;
            },
            tabBarStyle: { backgroundColor: theme === 'light' ? lightTheme.background : darkTheme.background },
            tabBarActiveTintColor: theme === 'light' ? lightTheme.primary : darkTheme.primary,
            tabBarInactiveTintColor: theme === 'light' ? lightTheme.secondary : darkTheme.secondary,
          })}
        >
          <Tab.Screen
            name="Home"
            options={{ headerShown: false }}
          >
            {() => <HomeScreen balance={balance} />} {/* Passa saldo para a HomeScreen */}
          </Tab.Screen>
          <Tab.Screen
            name="Pix"
            options={{ headerShown: false }}
          >
            {() => (
<PixScreen 
                balance={balance}
                setBalance={setBalance}
                toggleTheme={toggleTheme}
              />
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
