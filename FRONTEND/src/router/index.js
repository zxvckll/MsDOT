import {createRouter, createWebHistory } from 'vue-router'
import FormDataRecovery from '@/pages/FormDataRecovery.vue'
import ProfilePerusahaan from '@/pages/ProfilePerusahaan.vue'
import ContactUs    from '@/pages/ContactUs.vue'
import LocationMap from '@/pages/LocationMap.vue'
import History     from '@/pages/History.vue'
import Procedure from '@/pages/Procedure.vue'
import PriceList from '@/pages/PriceList.vue'
import Testimoni from '@/pages/Testimoni.vue'
import Sidoarjo from '@/pages/CusProSidoarjo.vue'
import Surabaya from '@/pages/CusProSurabaya.vue'
import User from '@/pages/User.vue'
import Progress from '@/pages/Progress.vue'
import ProgressType from '@/pages/ProgressType.vue'
import SizeType from '@/pages/SizeType.vue'
import Status from '@/pages/Status.vue'
import CaseType from '@/pages/CaseType.vue'
import CaseName from '@/pages/CaseName.vue'
import Case from '@/pages/Case.vue'
import Merk from '@/pages/Merk.vue'
import MediaType from '@/pages/MediaType.vue'
import MediaInterface from '@/pages/MediaInterface.vue'
import Media from '@/pages/Media.vue'
import Nota from '@/pages/Nota.vue'
import Login from '@/pages/Login.vue'
import store from '@/store/index.js'
import OperatingSistem from '@/pages/OperatingSistem.vue'
import Date from '@/pages/Date.vue'


const routes = [

    {path:'/FormDataRecovery',name:'FormDataRecovery',component: FormDataRecovery},
    {path:'/ProfilePerusahaan',name:'ProfilePerusahaan',component: ProfilePerusahaan},
    {path:'/ContactUs',name:'ContactUs',component: ContactUs},
    {path:'/LocationMap',name:'LocationMap',component: LocationMap},
    {path:'/History',name:'History',component: History},
    {path:'/Procedure',name:'Procedure',component: Procedure},
    {path:'/PriceList',name:'PriceList',component: PriceList},
    {path:'/Testimoni',name:'Testimoni',component: Testimoni},
    {path:'/CustomerProgress/Sidoarjo',name:'Sidoarjo',component: Sidoarjo},
    {path:'/CustomerProgress/Surabaya',name:'Surabaya',component: Surabaya},
    {path:'/User',name:'User',component: User,meta:{needsAuth:true}},
    {path:'/Progress',name:'Progress',component: Progress,meta:{needsAuth:true}},
    {path:'/ProgressType',name:'ProgressType',component: ProgressType,meta:{needsAuth:true}},
    {path:'/SizeType',name:'SizeType',component: SizeType,meta:{needsAuth:true}},
    {path:'/Status',name:'Status',component: Status,meta:{needsAuth:true}},
    {path:'/CaseType',name:'CaseType',component: CaseType,meta:{needsAuth:true}},
    {path:'/CaseName',name:'CaseName',component: CaseName,meta:{needsAuth:true}},
    {path:'/Case',name:'Case',component: Case,meta:{needsAuth:true}},
    {path:'/Merk',name:'Merk',component: Merk,meta:{needsAuth:true}},
    {path:'/MediaType',name:'MediaType',component: MediaType,meta:{needsAuth:true}},
    {path:'/MediaInterface',name:'MediaInterface',component: MediaInterface,meta:{needsAuth:true}},
    {path:'/Media',name:'Media',component: Media,meta:{needsAuth:true}},
    {path:'/Nota',name:'Nota',component: Nota,meta:{needsAuth:true}},
    {path:'/OperatingSistem',name:'OperatingSistem',component: OperatingSistem,meta:{needsAuth:true}},
    {path:'/Date',name:'Date',component: Date,meta:{needsAuth:true}},
    {path:'/Login',name:'Login',component: Login},
    
]
const router = createRouter({

    history : createWebHistory(),
    routes 
})

router.beforeEach((to,from,next) => {
    if(store.state.auth.isAdmin == false && to.meta.needsAuth){
        next("/login");
    }
    else {
        next();
    }
});
export default router