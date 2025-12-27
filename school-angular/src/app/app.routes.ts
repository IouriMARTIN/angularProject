import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductCreateComponent } from './pages/product-create/product-create.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: UserListComponent },
      { path: 'users/:id', component: UserDetailComponent },

      { path: 'posts', component: PostListComponent },
      { path: 'posts/:id', component: PostDetailComponent },

      { path: 'products', component: ProductListComponent },
      { path: 'products/new', component: ProductCreateComponent },
      { path: 'products/:id', component: ProductDetailComponent }
    ]
  }
];
