import Route from "../../classes/Route";
import PCourse from "../pages/PCourse";
import PCourses from "../pages/PCourses";
import PLogin from "../pages/PLogin";
import PMain from "../pages/PMain";
import PMaterial from "../pages/PMaterial";
import PProfile from "../pages/PProfile";
import PSign from "../pages/PSign";
import PTest from "../pages/PTest";

const routes = [

    ['/', PMain, true],
    ['/test', PTest],
    ['/sign', PSign],
    ['/login', PLogin],
    ['/courses', PCourses],
    ['/course/:id', PCourse],
    ['/profile', PProfile],
    ['/course/:idCourse/material/:idMaterial', PMaterial],

].map(route => Route.create(...route));

export default routes;