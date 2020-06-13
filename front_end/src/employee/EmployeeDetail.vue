<template>
  <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Employee Detail</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/employees">employees</router-link>
              </li>
              <li class="breadcrumb-item active">{{employee.id}}</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row container-fluid">
          <div class="col-12">
            <!-- Horizontal Form -->
            <div class="card card-warning">
              <!-- /.card-header -->
              <div class="card-header">
                <h3 class="card-title">Form</h3>
              </div>
              <!-- form start -->
              <form class="form-horizontal">
                <div class="card-body">
                  <div class="form-group row">
                    <label for="employee-id" class="col-sm-2 col-form-label">ID</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="employee-id" disabled v-model="employee.id">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="name" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="name" v-model="employee.name">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="email" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="email" disabled v-model="employee.email">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="phone_number" class="col-sm-2 col-form-label">Phone Number</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="phone_number" v-model="employee.phone_number">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="address" class="col-sm-2 col-form-label">Address</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="address" v-model="employee.address">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="sex" class="col-sm-2 col-form-label">Sex</label>
                    <div class="col-sm-10">
                      <input type="radio" id="sex-male" value="1" v-model="employee.sex">
                      <label for="sex-male">Male</label>
                      &nbsp; &nbsp;
                      <input type="radio" id="sex-female" value="2" v-model="employee.sex">
                      <label for="sex-female">Female</label>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="marital_status" class="col-sm-2 col-form-label">Marital Status</label>
                    <div class="col-sm-10">
                      <input type="radio" id="single" value="1" v-model="employee.marital_status">
                      <label for="single">Single</label>
                      &nbsp; &nbsp;
                      <input type="radio" id="married" value="2" v-model="employee.marital_status">
                      <label for="married">Married</label>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="home_town" class="col-sm-2 col-form-label">Home Town</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="home_town" v-model="employee.home_town">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="id_card" class="col-sm-2 col-form-label">ID Card</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="id_card" v-model="employee.id_card">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="permanent_residence" class="col-sm-2 col-form-label">Permanent Residence</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="permanent_residence" v-model="employee.permanent_residence">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="role" class="col-sm-2 col-form-label">Role</label>
                    <div class="col-sm-10">
                      <select class="custom-select" v-model="employee.role">
                        <option v-for="(item, index) in roles" v-bind:key="index">{{item.name}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="creator_email" class="col-sm-2 col-form-label">Creator Email</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="creator_email" disabled v-model="employee.creator_email">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="created" class="col-sm-2 col-form-label">Created at</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="created" disabled v-model="employee.created">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="updated" class="col-sm-2 col-form-label">Updated at</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="updated" disabled v-model="employee.updated">
                    </div>
                  </div>
                </div>
                <!-- /.card-body -->
                <div class="card-footer text-center">
                  <button class="btn btn-warning" v-on:click="onUpdate()">Update</button>
                </div>
                <!-- /.card-footer -->
              </form>
            </div>
            <!-- /.card -->
          </div>
          <!-- /.row -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "../../callApi/Api";
import EventBus from "../EventBus";

export default {
  data() {
    return {
      id: this.$route.params.id,
      employee: {},
      roles: []
    };
  },
  methods: {
    onUpdate() {
      axios
        .put("/employees/" + this.id, {
          name: this.employee.name,
          phone_number: this.employee.phone_number,
          address: this.employee.address,
          sex: this.employee.sex,
          marital_status: this.employee.marital_status,
          home_town: this.employee.home_town,
          id_card: this.employee.id_card,
          permanent_residence: this.employee.permanent_residence,
          role: this.employee.role
        })
        .then(res => {
          const today = new Date();
          this.employee.updated = today;
          alert("Update successful");
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    axios
      .get("/employees/" + this.id)
      .then(response => {
        this.employee = response.data.data;
        console.log(this.employee)
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get("/employee-roles")
      .then(res => {
        this.roles = res.data.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
.far:hover {
  cursor: pointer;
}
</style>
