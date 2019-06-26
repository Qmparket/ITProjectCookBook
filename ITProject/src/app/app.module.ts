import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipesComponent } from './home/recipes/recipes.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { RecipeComponent } from './home/recipe/recipe.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
	declarations: [ AppComponent, RecipesComponent, HeaderComponent, FooterComponent, RecipeComponent ],
	imports: [
		DialogModule,
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		VirtualScrollerModule,
		HttpClientModule,
		InputTextModule,
		InputTextareaModule,
		FormsModule,
		DropdownModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
