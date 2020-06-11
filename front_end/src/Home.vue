<template>
  <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-12 text-center text-success">
            <h1>Business Management System</h1>
          </div>
        </div>
      </div>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row container-fluid">
          <!-- /.col -->
          <div class="col-md-3">
            <div class="col-md-12">
              <!-- small box -->
              <div class="small-box bg-info">
                <div class="inner">
                  <h3>{{this.assets.length}}</h3>

                  <p>Assets</p>
                </div>
                <div class="icon">
                  <i class="nav-icon fab fa-bitcoin"></i>
                </div>
                <router-link to="/assets" class="small-box-footer">
                  More info
                  <i class="fas fa-arrow-circle-right"></i>
                </router-link>
              </div>
            </div>
            <!-- ./col -->
            <div class="col-md-12">
              <!-- small box -->
              <div class="small-box bg-success">
                <div class="inner">
                  <h3>{{this.assetTypes.length}}</h3>

                  <p>Asset Types</p>
                </div>
                <div class="icon">
                  <i class="nav-icon fas fa-money-check-alt"></i>
                </div>
                <router-link to="/asset-type" class="small-box-footer">
                  More info
                  <i class="fas fa-arrow-circle-right"></i>
                </router-link>
              </div>
            </div>
            <!-- ./col -->
            <div class="col-md-12">
              <!-- small box -->
              <div class="small-box bg-warning">
                <div class="inner">
                  <h3>{{this.employees.length}}</h3>

                  <p>Employees</p>
                </div>
                <div class="icon">
                  <i class="nav-icon fas fa-users"></i>
                </div>
                <router-link to="/employees" class="small-box-footer">
                  More info
                  <i class="fas fa-arrow-circle-right"></i>
                </router-link>
              </div>
            </div>
            <!-- ./col -->
            <div class="col-md-12">
              <!-- small box -->
              <div class="small-box bg-danger">
                <div class="inner">
                  <h3>{{this.departments.length}}</h3>

                  <p>Departments</p>
                </div>
                <div class="icon">
                  <i class="nav-icon fas fa-building"></i>
                </div>
                <router-link to="/departments" class="small-box-footer">
                  More info
                  <i class="fas fa-arrow-circle-right"></i>
                </router-link>
              </div>
            </div>
            <!-- ./col -->
          </div>
          <!-- /.col -->
          <div class="col-md-9">
            <div class="card card-primary">
              <div class="card-body p-0">
                <!-- THE CALENDAR -->
                <div id="calendar"></div>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div> 
        </div>
      </div>
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
import axios from "../callApi/Api";
import VueCookie from 'vue-cookie';
import EventBus from "./EventBus";

export default {
  data() {
    return {
      assets: [],
      assetTypes: [],
      employees: [],
      departments: []
    };
  },
  methods: {
    emitMethod() {
      EventBus.$emit("search-auto-complete", this.assets, this.employees);
    }
  },
  mounted() {
    axios
      .get("/assets")
      .then(response => {
        this.assets = response.data.data;
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("/asset-type")
      .then(response => {
        this.assetTypes = response.data.data;
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("/employees")
      .then(response => {
        this.employees = response.data.data;
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("/departments")
      .then(response => {
        this.departments = response.data.data;
      })
      .catch(error => {
        console.log(error);
      });
  },

  created() {
    $(function() {
      /* initialize the calendar
     -----------------------------------------------------------------*/
      //Date for the calendar events (dummy data)
      var date = new Date();
      var d = date.getDate(),
        m = date.getMonth(),
        y = date.getFullYear();

      var Calendar = FullCalendar.Calendar;

      var calendarEl = document.getElementById("calendar");

      var calendar = new Calendar(calendarEl, {
        plugins: ["bootstrap", "interaction", "dayGrid", "timeGrid"],
        header: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay"
        },
        themeSystem: "bootstrap",
        //Random default events
        events: [
          {
            title: "こんにちは",
            start: new Date(y, m, d),
            backgroundColor: "#f56954", //red
            borderColor: "#f56954", //red
            allDay: true
          }
        ],
        editable: true
      });

      calendar.render();
    });
  }
};
</script>