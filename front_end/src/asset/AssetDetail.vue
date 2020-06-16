<template>
  <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Asset Detail</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/assets">assets</router-link>
              </li>
              <li class="breadcrumb-item active">{{asset.id}}</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row container-fluid text-center">
          <div class="col-sm-12">
            <button class="btn btn-success">Handover to employee</button>
          </div>
        </div>
        <br/>
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
                    <label for="asset-id" class="col-sm-2 col-form-label">ID</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="asset-id" disabled v-model="asset.id">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="asset-code" class="col-sm-2 col-form-label">Code</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="asset-code" v-model="asset.asset_code">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="asset-type" class="col-sm-2 col-form-label">Type</label>
                    <div class="col-sm-10">
                      <select class="custom-select" v-model="asset.asset_type">
                        <option v-for="(item, index) in assetTypes" v-bind:key="index">{{item.name}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="asset-info" class="col-sm-2 col-form-label">Information</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="asset-info" v-model="asset.asset_info">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="asset-info-jp" class="col-sm-2 col-form-label">Information (JP)</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="asset-info-jp" v-model="asset.asset_info_jp">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="purpose" class="col-sm-2 col-form-label">Purpose</label>
                    <div class="col-sm-10">
                      <select class="custom-select" v-model="asset.purpose">
                        <option v-for="(item, index) in purposes" v-bind:key="index">{{item.name}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="serial-number" class="col-sm-2 col-form-label">Serial number</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="serial-number" v-model="asset.serial_number">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="started-date" class="col-sm-2 col-form-label">Started date</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="started-date" v-model="asset.started_date">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="status" class="col-sm-2 col-form-label">Status</label>
                    <div class="col-sm-10">
                      <input type="radio" id="status-in-use" value="1" v-model="asset.status">
                      <label for="status-in-use">in use</label>
                      &nbsp; &nbsp;
                      <input
                        type="radio"
                        id="status-not-use"
                        value="0"
                        v-model="asset.status"
                      >
                      <label for="status-not-use">not use</label>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="manager" class="col-sm-2 col-form-label">Manager</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="manager" disabled v-model="asset.manager">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="owner" class="col-sm-2 col-form-label">Owner</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="owner" v-model="asset.owner">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="note" class="col-sm-2 col-form-label">Note</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="note" v-model="asset.note">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="confirm" class="col-sm-2 col-form-label">Confirm</label>
                    <div class="col-sm-10" v-if="asset.confirm == 1">
                      <input type="text" class="form-control" id="confirm" disabled value="OK">
                    </div>
                    <div class="col-sm-10" v-else-if="asset.confirm == 0">
                      <input type="text" class="form-control" id="confirm" disabled value="NOT OK">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="created" class="col-sm-2 col-form-label">Created at</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="created" disabled v-model="asset.created">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="updated" class="col-sm-2 col-form-label">Updated at</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="updated" disabled v-model="asset.updated">
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
      asset: {},
      purposes: [],
      employees: [],
      assetTypes: []
    };
  },
  methods: {
    onUpdate() {
      axios.put("/assets/" + this.id, {
        asset_code: this.asset.asset_code,
        asset_type: this.asset.asset_type,
        asset_info: this.asset.asset_info,
        asset_info_jp: this.asset.asset_info_jp,
        purpose: this.asset.purpose,
        serial_number: this.asset.serial_number,
        started_date: this.asset.started_date,
        status: this.asset.status,
        manager: this.asset.manager,
        owner: this.asset.owner,
        note: this.asset.note,
        confirm: this.asset.confirm,
      })
      .then(res => {
        const today = new Date()
        this.asset.updated = today
        alert("Update successful")
      })
      .catch(error => {
        console.log(error);
      });
    }
  },
  mounted() {
    axios
      .get("/assets/" + this.id)
      .then(response => {
        this.asset = response.data.data;
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get("/purposes")
      .then(res => {
        this.purposes = res.data.data;
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get("/employees")
      .then(res => {
        this.employees = res.data.data;
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("/asset-type")
      .then(res => {
        this.assetTypes = res.data.data;
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
