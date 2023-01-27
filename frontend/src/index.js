import ReactDOM from 'react-dom/client';
import { App, About } from './baseComponents';
import './index.css';

const components = [
  { id: "app", component: <App /> },
  { id: "about", component: <About /> },
];

const renderComponent = () => {
  components.forEach(component => {
    const dom = document.getElementById(component.id)
    dom && ReactDOM.createRoot(dom).render(component.component)
  })
}

renderComponent();