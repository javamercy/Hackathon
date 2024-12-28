import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { WizardComponent } from './components/wizard/wizard.component';

export const routes: Routes = [];

routes.push({ path: '', component: WizardComponent });
routes.push({ path: 'main', component: ChatComponent });
