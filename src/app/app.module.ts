import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/general/home/home.component';
import { HeaderComponent } from './pages/general/components/header/header.component';
import { FooterComponent } from './pages/general/components/footer/footer.component';
import { HeadComponent } from './pages/general/components/head/head.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {
  SwiperModule,
  SwiperConfigInterface,
  SWIPER_CONFIG,
} from 'ngx-swiper-wrapper';
import { CategoriComponent } from './pages/general/categori/categori.component';
import { DetailComponent } from './pages/general/detail/detail.component';
import { LoginComponent } from './pages/general/auth/login/login.component';
import { RegisterComponent } from './pages/general/auth/register/register.component';
import { AboutComponent } from './pages/general/about/about.component';
import { SearchComponent } from './pages/general/search/search.component';
import { CheckoutComponent } from './pages/general/checkout/checkout.component';
import { ForgetPasswordComponent } from './pages/general/auth/forget-password/forget-password.component';
import { StoreProductComponent } from './pages/store/store-product/store-product.component';
import { StoreStoreComponent } from './pages/store/store-store/store-store.component';
import { UserListComponent } from './pages/admin/user-list/user-list.component';
import { StoreHomeComponent } from './pages/layouts/store-home/store-home.component';
import { AdminLoginComponent } from './pages/admin/auth/admin-login/admin-login.component';
import { AllComponent } from './pages/all/all.component';
import { AdminComponent } from './pages/layouts/admin/admin.component';
import { AdminProfileComponent } from './pages/admin/admin-profile/admin-profile.component';
import { AdminForgetPasswordComponent } from './pages/admin/auth/admin-forget-password/admin-forget-password.component';
import { AdminRegisterComponent } from './pages/admin/auth/admin-register/admin-register.component';
import { CategoryListComponent } from './pages/admin/category-list/category-list.component';
import { SettingsComponent } from './pages/admin/settings/settings.component';
import { GeneralComponent } from './pages/layouts/general/general.component';
import { AdminHeaderComponent } from './pages/admin/components/admin-header/admin-header.component';
import { AdminFooterComponent } from './pages/admin/components/admin-footer/admin-footer.component';
import { AdminSidebarComponent } from './pages/admin/components/admin-sidebar/admin-sidebar.component';
import { AutthComponent } from './pages/layouts/autth/autth.component';
import { TranslateComponent } from './pages/admin/translate/translate.component';
import { PageListComponent } from './pages/admin/page-list/page-list.component';
import { AddPageComponent } from './pages/admin/add-page/add-page.component';
import { StoreProductListComponent } from './pages/store/store-product-list/store-product-list.component';
import { StoreListComponent } from './pages/general/store-list/store-list.component';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';
import { ContactComponent } from './pages/general/contact/contact.component';
import { HowItWorksComponent } from './pages/general/how-it-works/how-it-works.component';
import { StoreComponent } from './pages/general/store/store.component';
import { StoreProfileComponent } from './pages//store/store-profile/store-profile.component';
import { StoreSettingsComponent } from './pages//store/store-settings/store-settings.component';

import { CrudComponent } from './pages/general/components/crud/crud.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { CarService } from './services/carservice';
import { StoreEditComponent } from './pages/store/store-edit/store-edit.component';
import { AggrementComponent } from './pages/general/aggrement/aggrement.component';
import { AdminProfileEditComponent } from './pages/admin/admin-profile-edit/admin-profile-edit.component';
import { ProfileSidebarComponent } from './pages/general/components/profile-sidebar/profile-sidebar.component';
import { ProfileHeaderComponent } from './pages/general/components/profile-header/profile-header.component';
import { ProfileFooterComponent } from './pages/general/components/profile-footer/profile-footer.component';
import { MyOrdersComponent } from './pages/general/profile/my-orders/my-orders.component';
import { ProfileDashboardComponent } from './pages/general/profile/profile-dashboard/profile-dashboard.component';
import { ProfileComponent } from './pages/layouts/profile/profile.component';
import { ProfileEditComponent } from './pages/general/profile/profile-edit/profile-edit.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true,
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HeadComponent,
    CategoriComponent,
    DetailComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ProfileComponent,
    SearchComponent,
    CheckoutComponent,
    ForgetPasswordComponent,
    StoreProductComponent,
    UserListComponent,
    StoreHomeComponent,
    AdminLoginComponent,
    AllComponent,
    AdminComponent,
    StoreStoreComponent,
    AdminProfileComponent,
    AdminForgetPasswordComponent,
    AdminRegisterComponent,
    CategoryListComponent,
    SettingsComponent,
    GeneralComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminSidebarComponent,
    AutthComponent,
    TranslateComponent,
    PageListComponent,
    AddPageComponent,
    StoreProductListComponent,
    StoreListComponent,
    NotFoundComponent,
    ContactComponent,
    HowItWorksComponent,
    StoreComponent,
    StoreProfileComponent,
    StoreSettingsComponent,
    CrudComponent,
    MyOrdersComponent,
    StoreEditComponent,
    AggrementComponent,
    AdminProfileEditComponent,
    ProfileSidebarComponent,
    ProfileHeaderComponent,
    ProfileFooterComponent,
    ProfileDashboardComponent,
    ProfileEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SwiperModule,
    Ng2SmartTableModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    RouterModule,
  ],

  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
    CarService,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
