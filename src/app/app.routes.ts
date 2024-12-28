import { Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { WizardComponent } from './components/wizard/wizard.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { ForumComponent } from './components/forum/forum.component';
import { ForumThreadComponent } from './components/forum-thread/forum-thread.component';
import { CreateThreadComponent } from './components/create-thread/create-thread.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [];

routes.push({ path: '', component: DashboardComponent });
routes.push({ path: 'wizard', component: WizardComponent });
routes.push({ path: 'chat', component: ChatComponent });
routes.push({ path: 'blogs', component: BlogComponent });
routes.push({ path: 'blogs/:id', component: BlogDetailComponent });
routes.push({ path: 'forum', component: ForumComponent });
routes.push({ path: 'forum/:id', component: ForumThreadComponent });
routes.push({ path: 'create-thread', component: CreateThreadComponent });
