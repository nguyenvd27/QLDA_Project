<template>
  <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Asset Management &nbsp;
              <router-link class="btn btn-success btn-sm" to="/assets/new">
                <i class="fas fa-plus"></i> Add Asset
              </router-link>
            </h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item active">assets</li>
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
                  <h3 class="card-title">Asset Table</h3>
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
                        <th >#</th>
                        <!-- <th >ID</th> -->
                        <th >Asset Code</th>
                        <th >Asset Type</th>
                        <th >Purpose</th>
                        <th >Status</th>
                        <th >Manager</th>
                        <th >Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in assets" :key="index">
                        <th scope="row">{{index}}</th>
                        <!-- <td>{{item.id}}</td> -->
                        <td>{{item.asset_code}}</td>
                        <td>{{item.asset_type}}</td>
                        <td>{{item.purpose}}</td>
                        <td v-if="item.status==0">not use</td>
                        <td v-else-if="item.status==1">in use</td>
                        <td>{{item.manager}}</td>

                        <td class="py-0 align-middle">
                          <div class="btn-group btn-group-sm">
                            <router-link :to="'/assets/'+item.id" class="btn btn-primary"><i class="fas fa-eye"></i></router-link>
                            <router-link :to="'/assets/'+item.id" class="btn btn-info"><i class="fas fa-pencil-alt"></i></router-link>
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
      assets: [],
      deleteObj: {}
    };
  },
  methods: {
    onDelete() {
      axios.delete("/assets/" + this.deleteObj.id).then(response => {
        for (let i = 0; i < this.assets.length; i++) {
          if (this.assets[i].id == this.deleteObj.id) {
            this.assets.splice(i, 1);
          }
        }
        this.deleteObj = {};
      });
    }
  },
  mounted() {
    axios
      .get("/assets")
      .then(response => {
        console.log(response.data.data);
        this.assets = response.data.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>