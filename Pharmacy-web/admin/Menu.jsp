<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:if test="${sessionScope.acc.responsible == 'admin'}">
<!-- Sidebar -->
        <ul class="navbar-nav bg-gradient-success sidebar sidebar-dark accordion" id="accordionSidebar">

            <!-- Sidebar - Brand -->
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.do">
                <div class="sidebar-brand-icon rotate-n-20">
                    <img style="width: 100px; height: 50px;" src="img/Pharma.png">
                </div>
            </a>

            <!-- Divider -->
            <hr class="sidebar-divider my-0">

            <!-- Nav Item - Dashboard -->
            <li class="nav-item active">
                <a class="nav-link" href="index.do">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider">

            <!-- Heading -->
            <div class="sidebar-heading">
                Pharmacy
            </div>

            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-plus-circle"></i>
                    <span>Pharmacy</span>
                </a>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <a class="collapse-item" href="AllPharmacies.do">All Pharmacy</a>
                        <a class="collapse-item" href="AddPharmacy.do">Add Pharmacy</a>
                    </div>
                </div>
            </li>
            <!-- Divider -->
            <hr class="sidebar-divider">
            <li class="nav-item">
                <a class="nav-link" href="DutyCalendar.do">
                    <i class="fas fa-fw fa-calendar"></i>
                    <span>Duty Calendar</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="AddBlog.jsp">
                    <i class="fas fa-fw fa-blog"></i>
                    <span>Add Blog</span></a>
               </li>
                   <li class="nav-item">
                <a class="nav-link" href="AllBlog.do">
                    <i class="fas fa-fw fa-rss-square"></i>
                    <span>All Blog</span></a>
               </li>
              <li class="nav-item">
                <a class="nav-link" href="Message.do">
                    <i class="fas fa-fw fa-comment"></i>
                    <span>Messages</span></a>
               </li>
        </ul>
        <!-- End of Sidebar -->
</c:if>
<c:if test="${sessionScope.acc.responsible != 'admin'}">
<!-- Sidebar -->
        <ul class="navbar-nav bg-gradient-success sidebar sidebar-dark accordion" id="accordionSidebar">

            <!-- Sidebar - Brand -->
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="dashboard.do">
                <div class="sidebar-brand-icon rotate-n-20">
                    <img style="width: 100px; height: 50px;" src="img/Pharma.png">
                </div>
            </a>

            <!-- Divider -->
            <hr class="sidebar-divider my-0">

            <!-- Nav Item - Dashboard -->
            <li class="nav-item active">
                <a class="nav-link" href="dashboard.co">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider">

            <!-- Heading -->
            <div class="sidebar-heading">
                Medication
            </div>

            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-plus-circle"></i>
                    <span>Medication</span>
                </a>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <a class="collapse-item" href="AllMedications.co">All Medication</a>
                        <a class="collapse-item" href="AddMedication.jsp">Add Medication</a>
                    </div>
                </div>
            </li>
            <!-- Divider -->
            <hr class="sidebar-divider">

            <li class="nav-item">
                <a class="nav-link" href="AllOrders.co">
                    <i class="fas fa-fw fa-calendar"></i>
                    <span>All Orders</span></a>
            </li>
        </ul>
        <!-- End of Sidebar -->

</c:if>
        