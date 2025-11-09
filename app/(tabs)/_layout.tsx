import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

function Header() {
  return (
    <View style={{ flexGrow: 1, backgroundColor: "orange", elevation: 4, borderBottomWidth: 2, borderColor: "lightsalmon"}}/>
  )
}

export default function TabLayout() {
  const { t } = useTranslation();

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'orange', tabBarHideOnKeyboard: true }}>
      <Tabs.Screen
        name="index"
        options={{
          title: t("homeTab.title"),
          headerTitle: "",
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="home" color={color} />
        }}
      />
      <Tabs.Screen
        name="client"
        options={{
          title: t("clientTab.title"),
          headerTitle: t("clientTab.headerTitle"),
          headerBackground: () => <Header/>,
          headerTintColor: "white",
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="cast-connected"  color={color} />,
        }}
      />

      <Tabs.Screen
        name="scan"
        options={{
          title: t("scanTab.title"),
          headerTitle: t("scanTab.headerTitle"),
          headerBackground: () => <Header/>,
          headerTintColor: "white",
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="qr-code-scanner" color={color} />
        }}
      />

    </Tabs>
  );
}