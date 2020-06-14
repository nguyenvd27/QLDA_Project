<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <router-link to="/" class="brand-link">
      <img
        src="../../assets/dist/img/AdminLTELogo.png"
        alt="AdminLTE Logo"
        class="brand-image img-circle elevation-3"
        style="opacity: .8"
      >
      <span class="brand-text font-weight-light">Admin</span>
    </router-link>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
            <i class="far fa-user" style="color:white;"></i>
        </div>
        <div class="info">
          <router-link class="d-block" to="/profile">Profile</router-link>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <!-- Add icons to the links using the .nav-icon class
          with font-awesome or any other icon font library-->
          <li class="nav-item">
            <router-link to="/assets" class="nav-link">
              <!-- <i class="nav-icon fas fa-th"></i> -->
              <i class="nav-icon fab fa-bitcoin"></i>
              <p>Assets</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/asset-type" class="nav-link">
              <i class="nav-icon fas fa-money-check-alt"></i>
              <p>Asset Types</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/employees" class="nav-link">
              <i class="nav-icon fas fa-users"></i>
              <p>Employees</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/employee-roles" class="nav-link">
              <i class="nav-icon fas fa-user-shield"></i>
              <p>Employee Roles</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/purposes" class="nav-link">
              <i class="nav-icon fab fa-superpowers"></i>
              <p>Purposes</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/departments" class="nav-link">
              <i class="nav-icon fas fa-building"></i>
              <p>Departments</p>
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>