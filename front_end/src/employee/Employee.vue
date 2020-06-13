<template>
  <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Employee &nbsp;
              <router-link class="btn btn-success btn-sm" to="/employees/new">
                <i class="fas fa-plus"></i> Add employee
              </router-link>
            </h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item active">employees</li>
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
              <div class="card">
                <!-- card-header -->
                <div class="card-header">
                  <h3 class="card-title">Table</h3>
                  <div class="card-tools">
                    <div class="input-group input-group-sm" style="width: 150px;">
                      <input
                        type="text"
                        name="table_search"
                        class="form-control float-right"
                        placeholder="Search"
                      >
                      <div class="input-group-append">
                        <button type="submit" class="btn btn-default">
                          <i class="fas fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- card-body -->
                <div class="card-body table-responsive p-0">
                  <table class="table table-hover text-nowrap">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Sex</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in employees" :key="index">
                        <th scope="row">{{index}}</th>
                        <td>{{item.name}}</td>
                        <td>{{item.email}}</td>
                        <td>{{item.phone_number}}</td>
                        <td>{{item.address}}</td>
                        <td v-if="item.sex==1">Male</td>
                        <td v-else-if="item.sex==2">Female</td>
                        <td class="py-0 align-middle">
                          <div class="btn-group btn-group-sm">
                            <router-link :to="'/employees/'+item.id" class="btn btn-primary"><i class="fas fa-eye"></i></router-link>
                            <router-link :to="'/employees/'+item.id" class="btn btn-info"><i class="fas fa-pencil-alt"></i></router-link>
                            <button class="btn btn-danger" data-toggle="modal" data-target="#myModal" v-on:click="deleteObj=item">
                              <i class="far fa-trash-alt"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- card-footer -->
                <div class="card-footer clearfix">
                  <ul class="pagination pagination-sm m-0 float-right">
                    <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
                  </ul>
                </div>
                <!-- /.modal--->
                <div class="modal fade" id="myModal">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h4 class="modal-title">Are you sure you want to delete ?</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-footer justify-content-right">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="onDelete()">Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
      employees: [],
      deleteObj: {}
    };
  },
  methods: {
    onDelete() {
      axios.delete("/employees/" + this.deleteObj.id).then(response => {
        for(let i = 0; i < this.employees.length; i++){
          if(this.employees[i].id == this.deleteObj.id){
            this.employees.splice(i, 1)
          }
        }
        this.deleteObj = {}
      });
    }
  },
  mounted() {
    axios
      .get("/employees")
      .then(response => {
        console.log(response.data.data);
        this.employees = response.data.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>