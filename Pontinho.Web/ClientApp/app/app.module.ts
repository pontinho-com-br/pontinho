import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CompetitionComponent } from './components/competition/competition.component';
import { CompetitionEditComponent } from './components/competition/competition-edit.component';
import { CompetitionListComponent } from './components/competition/competition-list.component';
import { CompetitionViewComponent } from './components/competition/competition-view.component';
import { GameComponent } from './components/game/game.component';
import { GameEditComponent } from './components/game/game-edit.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayerListComponent } from './components/player/player-list.component';
import { PlayerViewComponent } from './components/player/player-view.component';
import { UserComponent } from './components/user/user.component';
import { UserProfileComponent } from './components/user/user-profile.component';
import { ShareComponent } from './components/share/share.component';
import { ShareListComponent } from './components/share/share-list.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        DashboardComponent,
        LoginComponent,
        RegisterComponent,
        GameComponent,
        GameEditComponent,
        CompetitionComponent,
        CompetitionListComponent,
        CompetitionEditComponent,
        CompetitionViewComponent,
        PlayerComponent,
        PlayerListComponent,
        PlayerViewComponent,
        ShareComponent,
        ShareListComponent,
        UserComponent,
        UserProfileComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            {
                path: 'game', component: GameComponent, children: [
                    { path: 'edit:competitionId&id', component: GameEditComponent }
                ]
            },
            {
                path: 'competition', component: CompetitionComponent, children: [
                    { path: 'list', component: CompetitionListComponent },
                    { path: 'edit', component: CompetitionEditComponent },
                    { path: 'view', component: CompetitionViewComponent }
                ]
            },
            {
                path: 'player', component: PlayerComponent, children: [
                    { path: 'list', component: PlayerListComponent },
                    { path: 'view:id&win', component: PlayerViewComponent }
                ]
            },
            {
                path: 'share', component: ShareComponent, children: [
                    { path: 'list', component: ShareListComponent }
                ]
            },
            {
                path: 'user', component: UserComponent, children: [
                    { path: 'profile', component: UserProfileComponent }
                ]
            },
            { path: '**', redirectTo: 'dashboard' }
        ])
    ]
})
export class AppModule {
}
