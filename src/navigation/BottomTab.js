import * as React from 'react';
import { BottomNavigation, Text, useTheme } from 'react-native-paper';
import Home from '../screen/home';
import Orgs from '../screen/orgs';
import { SimpleLineIcons } from '@expo/vector-icons';


const BottomTab = ({ navigation }) => {
  const theme = useTheme()
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', },
    { key: 'orgs', title: 'Orgs', },
  ]);

  const renderIcon = ({ route, focused, color }) => {
    var icon
    switch (route.key) {
      case 'home':
        icon = focused ? <SimpleLineIcons name="home" color="red" size={20}/> : <SimpleLineIcons name="home"  size={20}/>
        break;
      case 'orgs':
        icon = focused ? <SimpleLineIcons name="organization" color="red" size={20}/> : <SimpleLineIcons name="organization"  size={20}/>
        break;
      default:
      case 'home':
        icon = focused ? <SimpleLineIcons name="home" color="red" size={20}/> : <SimpleLineIcons name="home"  size={20}/>
        break;
        break;
    }
    return icon
  }
  // useEffect
  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    // orgs: Home,
    orgs: Orgs,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      theme={{ colors: { primary: 'transparent', } }}
      // inactiveColor={theme.colors.text}
      // activeColor={COLORS.primary}
      labeled={false}
      renderIcon={renderIcon}
    />
  );
};

export default BottomTab;