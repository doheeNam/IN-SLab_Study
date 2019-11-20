import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MenubarModule } from './menubar/menubar.module';
import { SelfModule } from './self/self.module';
import { SelfComponent } from './self/self.component';
import { RecommendComponent } from "./recommend/recommend.component";
import { RecommendModule } from "./recommend/recommend.module";
import { CelebrityContainerComponent } from "./celebrity-container/celebrity-container.component";
import { CelebrityContainerModule } from "./celebrity-container/celebrity-container.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    SelfModule,
    RecommendModule,
    CelebrityContainerModule,
    RouterModule.forRoot(
      [
        {path: 'self', component: SelfComponent},
        {path: 'recommend', component: RecommendComponent},
        {path: 'celebrity', component: CelebrityContainerComponent}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
