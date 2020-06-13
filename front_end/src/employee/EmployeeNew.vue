<template>
  <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>New Emloyee</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/employees">employees</router-link>
              </li>
              <li class="breadcrumb-item active">new</li>
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
            <div class="card card-success">
              <!-- /.card-header -->
              <div class="card-header">
                <h3 class="card-title">Create Form</h3>
              </div>
              <!-- form start -->
              <form class="form-horizontal">
                <div class="card-body">
                  <div class="form-group row">
                    <label for="name" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="name" required v-model="employee.name">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="email" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="email" required v-model="employee.email">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="phone_number" class="col-sm-2 col-form-label">Phone Number</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="phone_number" required v-model="employee.phone_number">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="address" class="col-sm-2 col-form-label">Address</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="address" required v-model="employee.address">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="sex" class="col-sm-2 col-form-label">Sex</label>
                    <div class="col-sm-10">
                      <input type="radio" id="sex-male" value="1" checked v-model="employee.sex">
                      <label for="sex-male">Male</label>
                      &nbsp; &nbsp;
                      <input type="radio" id="sex-female" value="2" v-model="employee.sex">
                      <label for="sex-female">Female</label>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="marital_status" class="col-sm-2 col-form-label">Marital Status</label>
                    <div class="col-sm-10">
                      <input type="radio" id="single" value="1" checked v-model="employee.marital_status">
                      <label for="single">Male</label>
                      &nbsp; &nbsp;
                      <input type="radio" id="married" value="2" v-model="employee.marital_status">
                      <label for="married">Married</label>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="home_town" class="col-sm-2 col-form-label">Home Town</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="home_town" required v-model="employee.home_town">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="id_card" class="col-sm-2 col-form-label">ID Card</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="id_card" required v-model="employee.id_card">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="permanent_residence" class="col-sm-2 col-form-label">Permanent Residence</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="permanent_residence" required v-model="employee.permanent_residence">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="purpose" class="col-sm-2 col-form-label">Role</label>
                    <div class="col-sm-10">
                      <select class="custom-select" required v-model="employee.role">
                        <option disabled value>Please select one</option>
                        <option v-for="(item, index) in roles" v-bind:key="index">{{item.name}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="creator_email" class="col-sm-2 col-form-label">Creator Email</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="creator_email" required v-model="employee.creator_email">
                    </div>
                  </div>
                </div>
                <!-- /.card-body -->
                <div class="card-footer text-center">
                  <button class="btn btn-success" v-on:click="onCreate()">Create</button>
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
      employee: {
        name: "",
        email: "",
        phone_number: "",
        address: "",
        sex: 1,
        marital_status: 1,
        home_town: "",
        id_card: "",
        permanent_residence: "",
        role: "",
        creator_email: ""
      },
      errors: 0,
      roles: []
    };
  },
  methods: {
    onCreate() {
      this.errors = 0;
      if (this.employee.name == "" || this.employee.name == null) {
        this.errors++;
      }
      if (this.employee.email == "" || this.employee.email == null) {
        this.errors++;
      }
      if (this.employee.phone_number == "" || this.employee.phone_number == null) {
        this.errors++;
      }
      if (this.employee.address == "" || this.employee.address == null) {
        this.errors++;
      }
      if (this.employee.home_town == "" || this.employee.home_town == null) {
        this.errors++;
      }
      if (this.employee.id_card == "" || this.employee.id_card == null) {
        this.errors++;
      }
      if (this.employee.permanent_residence == "" || this.employee.permanent_residence == null) {
        this.errors++;
      }
      if (this.employee.role == "" || this.employee.role == null) {
        this.errors++;
      }
      if (this.employee.creator_email == "" || this.employee.creator_email == null) {
        this.errors++;
      }
      console.log(this.errors);

      if (this.errors == 0) {
        axios
          .post("/employees", {
            name: this.employee.name,
            email: this.employee.email,
            phone_number: this.employee.phone_number,
            address: this.employee.address,
            sex: this.employee.sex,
            marital_status: this.employee.marital_status,
            home_town: this.employee.home_town,
            id_card: this.employee.id_card,
            permanent_residence: this.employee.permanent_residence,
            role: this.employee.role,
            creator_email: this.employee.creator_email
          })
          .then(res => {
            this.$router.push({ name: "employee", path: "/employees" });
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  },
  mounted() {
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
