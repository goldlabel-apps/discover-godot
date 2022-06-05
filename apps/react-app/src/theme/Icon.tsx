// Please use this component when ever you need an icon
// If you need a new icon, add and import it from here
// https://mui.com/components/material-icons/
import * as React from 'react'
import {
    PingpongballIcon,
    BlokeyIcon,
    InstagramIcon,
    VimeoIcon,
    FlickrIcon,
    WorkIcon,
    LifeIcon,
    BalanceIcon,
} from '../theme'
import DefaultIcon from '@mui/icons-material/DisabledByDefault'
import HomeIcon from '@mui/icons-material/AddToHomeScreen'
import CMSIcon from '@mui/icons-material/DocumentScanner'
import FlyIcon from '@mui/icons-material/LocalAirportRounded'
import DatabaseIcon from '@mui/icons-material/DataObject'
import MapIcon from '@mui/icons-material/LocationDisabled'
import NewTabIcon from '@mui/icons-material/OpenInNew'
import MenuIcon from '@mui/icons-material/Menu'
import TrashIcon from '@mui/icons-material/DeleteOutlined'
import VisibilityIcon from '@mui/icons-material/Visibility'
import ExitIcon from '@mui/icons-material/ExitToAppRounded'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import FilebrowserIcon from '@mui/icons-material/Attachment'
import ImagefileIcon from '@mui/icons-material/Image'
import HelpIcon from '@mui/icons-material/HelpOutlineTwoTone'
import LocaleIcon from '@mui/icons-material/Language'
import PersonaIcon from '@mui/icons-material/AccessibilityNew'
import GitHubIcon from '@mui/icons-material/GitHub'
import WalkthroughIcon from '@mui/icons-material/Accessibility'
import DocIcon from '@mui/icons-material/FileCopy'
import SharedIcon from '@mui/icons-material/ShareOutlined'
import ErrorIcon from '@mui/icons-material/NewReleases'
import GestureIcon from '@mui/icons-material/Gesture'
import SectionIcon from '@mui/icons-material/Assignment'
import BashIcon from '@mui/icons-material/Terminal'
import CloseIcon from '@mui/icons-material/Close'
import CancelIcon from '@mui/icons-material/Cancel'
import SettingsIcon from '@mui/icons-material/Settings'
import CoderIcon from '@mui/icons-material/DesktopAccessDisabledSharp'
import CodeIcon from '@mui/icons-material/Code'
import SupportIcon from '@mui/icons-material/SupportAgent'
import ArrowRIcon from '@mui/icons-material/ArrowForwardTwoTone'
import ArrowLIcon from '@mui/icons-material/ArrowBackTwoTone'
import ArrowUIcon from '@mui/icons-material/ArrowUpwardTwoTone'
import SearchIcon from '@mui/icons-material/Search'
import MarkdownIcon from '@mui/icons-material/Article'
import CalendarIcon from '@mui/icons-material/CalendarToday'
import PrintIcon from '@mui/icons-material/Print'
import TypeScriptIcon from '@mui/icons-material/IntegrationInstructions'
import DesignIcon from '@mui/icons-material/Palette'
import ReduxIcon from '@mui/icons-material/Storage'
import LinkIcon from '@mui/icons-material/Link'
import RouterIcon from '@mui/icons-material/DynamicForm'
import NewsIcon from '@mui/icons-material/Newspaper'
import NewIcon from '@mui/icons-material/Add'
import FeaturesIcon from '@mui/icons-material/RocketLaunch'
import AuthIcon from '@mui/icons-material/Security'
import QuitIcon from '@mui/icons-material/ExitToApp'
import TickIcon from '@mui/icons-material/Check'
import PersonIcon from '@mui/icons-material/Person'
import WardsIcon from '@mui/icons-material/AirlineSeatFlat'
import ClinicsIcon from '@mui/icons-material/MedicalServices'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PatientsIcon from '@mui/icons-material/People'
import FilterIcon from '@mui/icons-material/Sort'
import ClinicalIcon from '@mui/icons-material/AccountBox'
import ClericalIcon from '@mui/icons-material/AirlineSeatLegroomNormal'
import AdminIcon from '@mui/icons-material/Build'
import AdminOffIcon from '@mui/icons-material/BuildOutlined'
import DeveloperIcon from '@mui/icons-material/ToysOutlined'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import AccExpandIcon from '@mui/icons-material/ExpandMore'

export default function Icon(props: any) {
    if (!props) console.error('No props passed to Icon component. Please fix')
    let { icon, color } = props
    if (!color) color = 'inherit'
    let iconFragment
    switch (icon) {
        case 'home':
            iconFragment = <HomeIcon color={color} />
            break
        case 'persona':
            iconFragment = <PersonaIcon color={color} />
            break
        case 'filter':
            iconFragment = <FilterIcon color={color} />
            break
        case 'newtab':
            iconFragment = <NewTabIcon color={color} />
            break
            
        case 'acc':
            iconFragment = <AccExpandIcon color={color} />
            break
        case 'balance':
            iconFragment = <BalanceIcon color={color} />
            break

        case 'firestore':
            iconFragment = <DatabaseIcon color={color} />
            break

        case 'database':
            iconFragment = <DatabaseIcon color={color} />
            break

        case 'life':
            iconFragment = <LifeIcon color={color} />
            break
        case 'work':
            iconFragment = <WorkIcon color={color} />
            break

        case 'fly':
            iconFragment = <FlyIcon color={color} />
            break

        case 'fullscreen':
            iconFragment = <FullscreenIcon color={color} />
            break

        case 'twitter':
            iconFragment = <TwitterIcon color={color} />
            break

        case 'facebook':
            iconFragment = <FacebookIcon color={color} />
            break

        case 'map':
            iconFragment = <MapIcon color={color} />
            break

        case 'cms':
            iconFragment = <CMSIcon color={color} />
            break

        case 'youtube':
            iconFragment = <YouTubeIcon color={color} />
            break

        case 'linkedin':
            iconFragment = <LinkedInIcon color={color} />
            break

        case 'clinical':
            iconFragment = <ClinicalIcon color={color} />
            break
        case 'clerical':
            iconFragment = <ClericalIcon color={color} />
            break
        case 'adminOff':
            iconFragment = <AdminOffIcon color={color} />
            break
        case 'admin':
            iconFragment = <AdminIcon color={color} />
            break
        case 'developer':
            iconFragment = <DeveloperIcon color={color} />
            break

        case 'logout':
            iconFragment = <ExitIcon color={color} />
            break
        case 'exit':
            iconFragment = <ExitIcon color={color} />
            break

        case 'clear':
            iconFragment = <TrashIcon color={color} />
            break
        case 'error':
            iconFragment = <ErrorIcon color={color} />
            break
        case 'patient':
            iconFragment = <PatientsIcon color={color} />
            break
        case 'patients':
            iconFragment = <PatientsIcon color={color} />
            break
        case 'dashboard':
            iconFragment = <DashboardIcon color={color} />
            break
        case 'users':
            iconFragment = <PersonIcon color={color} />
            break
        case 'user':
            iconFragment = <PersonIcon color={color} />
            break
        case 'wards':
            iconFragment = <WardsIcon color={color} />
            break
        case 'ward':
            iconFragment = <WardsIcon color={color} />
            break
        case 'clinics':
            iconFragment = <ClinicsIcon color={color} />
            break
        case 'clinic':
            iconFragment = <ClinicsIcon color={color} />
            break

        case 'quit':
            iconFragment = <QuitIcon color={color} />
            break
        case 'visibilityoff':
            iconFragment = <VisibilityOffIcon color={color} />
            break
        case 'visibility':
            iconFragment = <VisibilityIcon color={color} />
            break

        case 'tick':
            iconFragment = <TickIcon color={color} />
            break
        case 'features':
            iconFragment = <FeaturesIcon color={color} />
            break
        case 'news':
            iconFragment = <NewsIcon color={color} />
            break
        case 'router':
            iconFragment = <RouterIcon color={color} />
            break

        case 'new':
            iconFragment = <NewIcon color={color} />
            break

        case 'link':
            iconFragment = <LinkIcon color={color} />
            break
        case 'redux':
            iconFragment = <ReduxIcon color={color} />
            break
        case 'design':
            iconFragment = <DesignIcon color={color} />
            break
        case 'typescript':
            iconFragment = <TypeScriptIcon color={color} />
            break
        case 'search':
            iconFragment = <SearchIcon color={color} />
            break
        case 'print':
            iconFragment = <PrintIcon color={color} />
            break
        case 'calendar':
            iconFragment = <CalendarIcon color={color} />
            break
        case 'markdown':
            iconFragment = <MarkdownIcon color={color} />
            break
        case 'back':
            iconFragment = <ArrowLIcon color={color} />
            break
        case 'arrowl':
            iconFragment = <ArrowLIcon color={color} />
            break
        case 'left':
            iconFragment = <ArrowLIcon color={color} />
            break
        case 'arrowr':
            iconFragment = <ArrowRIcon color={color} />
            break
        case 'right':
            iconFragment = <ArrowRIcon color={color} />
            break
        case 'up':
            iconFragment = <ArrowUIcon color={color} />
            break
        case 'forward':
            iconFragment = <ArrowRIcon color={color} />
            break
        case 'code':
            iconFragment = <CodeIcon color={color} />
            break
        case 'coder':
            iconFragment = <CoderIcon color={color} />
            break
        case 'support':
            iconFragment = <SupportIcon color={color} />
            break
        case 'settings':
            iconFragment = <SettingsIcon color={color} />
            break
        case 'section':
            iconFragment = <SectionIcon color={color} />
            break
        case 'invalid':
            iconFragment = <CloseIcon color={color} />
            break
        case 'cancel':
            iconFragment = <CancelIcon color={color} />
            break
        case 'close':
            iconFragment = <CloseIcon color={color} />
            break
        case 'bash':
            iconFragment = <BashIcon color={color} />
            break

        case 'blokey':
            iconFragment = <BlokeyIcon color={color} />
            break

        case 'logo':
            iconFragment = <BlokeyIcon color={color} />
            break
        case 'ppb':
            iconFragment = <PingpongballIcon color={color} />
            break

        case 'malteaser':
            iconFragment = <PingpongballIcon color={color} />
            break

        case 'pingpong':
            iconFragment = <PingpongballIcon color={color} />
            break
        case 'gesture':
            iconFragment = <GestureIcon color={color} />
            break
        case 'help':
            iconFragment = <HelpIcon color={color} />
            break

        case 'post':
            iconFragment = <DocIcon color={color} />
            break

        case 'docs':
            iconFragment = <DocIcon color={color} />
            break
        case 'doc':
            iconFragment = <DocIcon color={color} />
            break
        case 'menu':
            iconFragment = <MenuIcon color={color} />
            break
        case 'auth':
            iconFragment = <AuthIcon color={color} />
            break
        case 'walkthrough':
            iconFragment = <WalkthroughIcon color={color} />
            break
        case 'github':
            iconFragment = <GitHubIcon color={color} />
            break
        case 'locale':
            iconFragment = <LocaleIcon color={color} />
            break
        case 'image':
            iconFragment = <ImagefileIcon color={color} />
            break
        case 'filebrowser':
            iconFragment = <FilebrowserIcon color={color} />
            break

        case 'instagram':
            iconFragment = <InstagramIcon color={color} />
            break

        case 'flickr':
            iconFragment = <FlickrIcon color={color} />
            break

        case 'vimeo':
            iconFragment = <VimeoIcon color={color} />
            break

        case 'shared':
            iconFragment = <SharedIcon color={color} />
            break

        case 'social':
            iconFragment = <SharedIcon color={color} />
            break

        case 'share':
            iconFragment = <SharedIcon color={color} />
            break

        case 'default':
            iconFragment = <DefaultIcon color={color} />
            break

        default:
            iconFragment = <DefaultIcon color="error" />
    }
    return <React.Fragment>{iconFragment}</React.Fragment>
}
