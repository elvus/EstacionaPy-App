import HomePage from '../pages/home.f7.html';
import AboutPage from '../pages/about.f7.html';
import FormPage from '../pages/form.f7.html';
import RegistrarPage from '../pages/registrar.f7.html';
import EstacionarPage from '../pages/estacionar.f7.html';
import FacturasPage from '../pages/facturas.f7.html';
import MenuPage from '../pages/menu.f7.html';
import PerfilPage from '../pages/perfil.f7.html';
import InfraccionPage from '../pages/infraccion.f7.html';
import TransitoPage from '../pages/transito.f7.html';


var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },      
  {
    path: '/registrar/',
    component: RegistrarPage,
  }, 
  {
    path: '/estacionar/',
    component: EstacionarPage,
  },      
  {
    path: '/facturas/',
    component: FacturasPage,
  }, 
  {
    path: '/menu/',
    component: MenuPage,
  },    
    {
    path: '/perfil/',
    component: PerfilPage,
  },
  {
    path: '/infraccion/',
    component: InfraccionPage,
  }, 
  {
    path: '/transito/',
    component: TransitoPage,
  },    
    
];

export default routes;