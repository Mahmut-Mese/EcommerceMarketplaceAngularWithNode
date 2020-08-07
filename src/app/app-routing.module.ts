import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/general/home/home.component';
import { CategoriComponent } from './pages/general/categori/categori.component';
import { DetailComponent } from './pages/general/detail/detail.component';
import { CheckoutComponent } from './pages/general/checkout/checkout.component';
import { AboutComponent } from './pages/general/about/about.component';
import { ProfileComponent } from './pages/layouts/profile/profile.component';
import { SearchComponent } from './pages/general/search/search.component';
import { LoginComponent } from './pages/general/auth/login/login.component';
import { RegisterComponent } from './pages/general/auth/register/register.component';
import { ForgetPasswordComponent } from './pages/general/auth/forget-password/forget-password.component';
import { UserListComponent } from './pages/admin/user-list/user-list.component';
import { StoreHomeComponent } from './pages/layouts/store-home/store-home.component';
import { StoreProductComponent } from './pages/store/store-product/store-product.component';
import { AdminLoginComponent } from './pages/admin/auth/admin-login/admin-login.component';
import { AllComponent } from './pages/all/all.component';
import { AdminComponent } from './pages/layouts/admin/admin.component';
import { GeneralComponent } from './pages/layouts/general/general.component';
import { AdminRegisterComponent } from './pages/admin/auth/admin-register/admin-register.component';
import { AdminForgetPasswordComponent } from './pages/admin/auth/admin-forget-password/admin-forget-password.component';
import { CategoryListComponent } from './pages/admin/category-list/category-list.component';
import { SettingsComponent } from './pages/admin/settings/settings.component';
import { AdminProfileComponent } from './pages/admin/admin-profile/admin-profile.component';
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
import { StoreProfileComponent } from './pages/store/store-profile/store-profile.component';
import { StoreSettingsComponent } from './pages//store/store-settings/store-settings.component';
import { StoreEditComponent } from './pages/store/store-edit/store-edit.component';
import { AggrementComponent } from './pages/general/aggrement/aggrement.component';
import { AdminProfileEditComponent } from './pages/admin/admin-profile-edit/admin-profile-edit.component';
import { ProfileDashboardComponent } from './pages/general/profile/profile-dashboard/profile-dashboard.component';
import { MyOrdersComponent } from './pages/general/profile/my-orders/my-orders.component';
import { ProfileEditComponent } from './pages/general/profile/profile-edit/profile-edit.component';

const routes: Routes = [


  {
    path: '',
    component: GeneralComponent,
    children: [
      { path: '', component: AllComponent },
      { path: 'categori', component: CategoriComponent },
      { path: 'home', component: HomeComponent },

      { path: 'detail', component: DetailComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'about', component: AboutComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'search', component: SearchComponent },
      { path: 'store', component: StoreComponent },
      { path: 'store-list', component: StoreListComponent },
      { path: 'auth/login', component: LoginComponent },
      { path: 'auth/register', component: RegisterComponent },
      { path: 'auth/forget-password', component: ForgetPasswordComponent },
      { path: 'all', component: AllComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'how-it-works', component: HowItWorksComponent },
      { path: 'aggrement', component: AggrementComponent },

     
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: AdminProfileComponent },
      { path: 'categorylist', component: CategoryListComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'translate', component: TranslateComponent },
      { path: 'profile', component: AdminProfileComponent },
      { path: 'profile-edit', component: AdminProfileEditComponent },
      { path: 'userlist', component: UserListComponent },
      { path: 'pagelist', component: PageListComponent },
      { path: 'add-page', component: AddPageComponent },
    ],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      { path: '', component: ProfileComponent },
      { path: 'dashboard', component: ProfileDashboardComponent },
      { path: 'my-orders', component: MyOrdersComponent },
      { path: 'edit', component: ProfileEditComponent }






    ],
  },
  {
    path: 'store',
    component: StoreHomeComponent,
    children: [
      { path: '', component: StoreHomeComponent },

      { path: 'product-add', component: StoreProductComponent },
      { path: 'product-list', component: StoreProductListComponent },
      { path: 'profile', component: StoreProfileComponent },
      { path: 'settings', component: StoreSettingsComponent },
      { path: 'edit', component: StoreEditComponent },





    ],
  },
  {
    path: 'auth',
    component: AutthComponent,
    children: [
      { path: 'admin/login', component: AdminLoginComponent },
      { path: 'admin/register', component: AdminRegisterComponent },
      {
        path: 'admin/forget-password',
        component: AdminForgetPasswordComponent,
      },
    ],
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
