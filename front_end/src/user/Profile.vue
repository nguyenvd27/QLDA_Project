<template>
  <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Profile</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item active">profile</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <!-- Profile Image -->
            <div class="card card-primary card-outline">
              <div class="card-body box-profile">
                <div class="text-center">
                  <img v-if="picture" class="profile-user-img img-fluid img-circle"
                    :src="picture"
                    alt="User profile picture">
                  <img v-else class="profile-user-img img-fluid img-circle"
                    src="../../assets/dist/img/user4-128x128.jpg"
                    alt="User profile picture">
                </div>

                <h3 class="profile-username text-center">{{name}}</h3>

                <p class="text-muted text-center">Admin</p>

                <ul class="list-group list-group-unbordered mb-3">
                  <li class="list-group-item">
                    <b>ID</b> <a class="float-right">{{id}}</a>
                  </li>
                  <li class="list-group-item">
                    <b>Email</b> <a class="float-right">{{email}}</a>
                  </li>
                  <li class="list-group-item">
                    <b>Name</b> <a class="float-right">{{name}}</a>
                  </li>
                  <li v-if="created" class="list-group-item">
                    <b>Created</b> <a class="float-right">{{created}}</a>
                  </li>
                  <li v-else class="list-group-item">
                    <b>Created</b> <a class="float-right">by Facebook</a>
                  </li>
                </ul>

                <button v-on:click="follow" class="btn btn-primary btn-block"><b>Follow</b></button>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
import jwtDecode from 'jwt-decode'
import VueCookie from 'vue-cookie'

export default {
  data () {
    const token = VueCookie.get('usertoken')
    const decoded = jwtDecode(token)
    return {
      id: decoded.id,
      name: decoded.name,
      email: decoded.email,
      picture: decoded.picture,
      created: decoded.created
    }
  },
  methods: {
    follow() {
      alert("Tính năng đang được phát triển")
    }
  }
}
</script>
