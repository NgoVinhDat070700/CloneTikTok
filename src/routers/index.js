import { HeaderOnly } from '~/components/Layout';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
const publicRouters=[
    {
        path:'/',component:Home
    },
    {
        path:'/following',component:Following
    },
    {
        path:'/@:nickname',component:Profile
    },
    {
        path:'/upload',component:Upload,layout:HeaderOnly
    },
]
const privateRoutes=[

]
export {publicRouters,privateRoutes}