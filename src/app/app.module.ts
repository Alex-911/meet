import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoServicesService } from './service/todo-services.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AddTodoEffects } from './store/effects/add-todo.effects';
import { GetTodoEffects } from './store/effects/get-todo.effects';
import { UpdateTodoEffects } from './store/effects/update-todo.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, StoreModule.forRoot({}, {}), EffectsModule.forRoot([]), StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }), EffectsModule.forFeature([AddTodoEffects, GetTodoEffects, UpdateTodoEffects])],
  providers: [TodoServicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
