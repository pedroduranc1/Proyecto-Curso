import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import MainScreen from "../screens/MainScreen";
import TestScreen from "../screens/TestScreen";
import PremiumScreen from "../screens/PremiumScreen";
import ChatScreen from "../screens/ChatScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RegistroScreen from "../screens/RegistroScreen";
import { amarillo, azul, gris } from "./colores";
import BasicScreen from "../screens/BasicScreen";
import IntermedioScreen from "../screens/IntermedioScreen";
import AvanzadoScreen from "../screens/AvanzadoScreen";
import TiemposVerbales from "../screens/TiemposVerbales";
import Modales from "../screens/Modales";
import OtrasEstrcuturas from "../screens/OtrasEstrcuturas";
import Vocabularios from "../screens/Vocabularios";
import Interferencias1 from "../screens/Interferencias1";
import Preguntas from "../screens/Preguntas";
import Availability from "../screens/Availability";
import Cultura from "../screens/Cultura";
import Interferencias2 from "../screens/Interferencias2";

export const MainNav = [
    {
        Nombre: "Login",
        Componente: LoginScreen
    },
    {
        Nombre: "Registro",
        Componente: RegistroScreen
    },
    {
        Nombre: "Home",
        Componente: HomeScreen
    },
    {
        Nombre: "Tiempos Verbales",
        Componente: TiemposVerbales
    },
    {
        Nombre: "Modales",
        Componente: Modales
    },
    {
        Nombre: "Otras estructuras",
        Componente: OtrasEstrcuturas
    },
    {
        Nombre: "Vocabulario",
        Componente: Vocabularios
    },
    {
        Nombre: "Interferencias 1",
        Componente: Interferencias1
    },
    {
        Nombre: "Preguntas",
        Componente: Preguntas
    },
    {
        Nombre: "Availability",
        Componente: Availability
    },
    {
        Nombre: "Cultura",
        Componente: Cultura
    },
    {
        Nombre: "Interferencias 2",
        Componente: Interferencias2
    },
]

export const BottomNav = [ 
    {
        Nombre: "Inicio",
        Componente: MainScreen,
        IconoHover: require('../assets/homeSele.png'),
        IconoNormal: require('../assets/home.png'),
        ColorHover: azul,
        ColorNormal: gris
    },
    {
        Nombre: "Test",
        Componente: TestScreen,
        IconoHover: require('../assets/testSele.png'),
        IconoNormal: require('../assets/test.png'),
        ColorHover: azul,
        ColorNormal: gris
    }, 
    {
        Nombre: "Premium",
        Componente: PremiumScreen,
        IconoHover: require('../assets/premiumSele.png'),
        IconoNormal: require('../assets/premium.png'),
        ColorHover: amarillo,
        ColorNormal: gris
    },
    {
        Nombre: "Chat",
        Componente: ChatScreen,
        IconoHover: require('../assets/chatsSele.png'),
        IconoNormal: require('../assets/chats.png'),
        ColorHover: azul,
        ColorNormal: gris
    },
    {
        Nombre: "Perfil",
        Componente: ProfileScreen,
        IconoHover: require('../assets/userSele.png'),
        IconoNormal: require('../assets/user.png'),
        ColorHover: azul,
        ColorNormal: gris
    }
]

export const TopNav = [
    {
        Nombre: 'Básico',
        Componente: BasicScreen,
        Size: 'w-16'
    },
    {
        Nombre: 'Intermedio',
        Componente: IntermedioScreen,
        Size: 'w-24'
    },
    {
        Nombre: 'Avanzado',
        Componente: AvanzadoScreen,
        Size: 'w-24'
    }
]

export const BasicsCards=[
    {
        Nombre: "Tiempos Verbales",
        Imagen: require('../assets/tiemposVerbales.png'),
        Bloqueado: false,
    },
    {
        Nombre: "Modales",
        Imagen: require('../assets/Modales.png'),
        Bloqueado: true,
    },
    {
        Nombre:"Otras estructuras",
        Imagen: require('../assets/otrasEstructuras.png'),
        Bloqueado: true,
    },
    {
        Nombre:"Vocabulario",
        Imagen: require('../assets/vocabulario.png'),
        Bloqueado: true,
    }
]

export const MediumsCards=[
    {
        Nombre: "Interferencias 1",
        Imagen: require('../assets/interferencias.png'),
        Bloqueado: true,
    },
    {
        Nombre: "Preguntas",
        Imagen: require('../assets/preguntas.png'),
        Bloqueado: true,
    },
    {
        Nombre:"Availability",
        Imagen: require('../assets/availability.png'),
        Bloqueado: true,
    }
]

export const AdvancedCards=[
    {
        Nombre: "Cultura",
        Imagen: require('../assets/cultura.png'),
        Bloqueado: true,
    },
    {
        Nombre: "Interferencias 2",
        Imagen: require('../assets/interferencias2.png'),
        Bloqueado: true,
    }
]