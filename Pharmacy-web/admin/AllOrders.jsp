<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:if test="${empty sessionScope.acc.responsible}">
      <c:redirect url = "login.jsp"/>
</c:if>
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Dashboard</title>
    <!-- Custom fonts for this template-->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">
    <!-- Custom styles for this template-->
    <link href="css/sb-admin-2.min.css" rel="stylesheet">
    <link href="css/calendar.css" rel="stylesheet">
    <link rel="stylesheet" href="fonts/icomoon/style.css">
    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <!-- Style -->
    <link rel="stylesheet" href="css/style.css">

</head>

<body id="page-top">

    <!-- Page Wrapper -->
    <div id="wrapper">
                         <%@include file="Menu.jsp" %>
        <!-- End of Sidebar -->

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                         <%@include file="Header.jsp" %>
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid">
                    <h2 class="mb-5">All Orders</h2>

                    <div class="table-responsive">
                     <form method="post" action="DutyPharma.do">
                      <table class="table table-striped custom-table">
                        <thead>
                          <tr>
                            <th scope="col">Order ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Client</th>
                            <th scope="col">Status</th>
                            <th scope="col">Details</th>
                          </tr>
                        </thead>
                        <tbody>
                            <c:forEach items="${commandes}" var="cmd">
                           <tr scope="row">
                             <td>${cmd.getId_cmd()}</td>
                             <td>${cmd.getSqlDate()}</td>
                             <td>${cmd.getSqlTime()}</td>
                             <td>${cmd.getCl().getNom()}</td>
                             <td class="pl-0 text-center">
                                <div class="d-flex align-items-center">
                                  <label class="custom-control ios-switch">                                  
                                  <input value="${cmd.isStatus()}"  name="status" id="status" type="checkbox" class="ios-switch-control-input" <c:if test ="${cmd.isStatus()}"><c:out value="checked"/></c:if>>
                                  <span class="ios-switch-control-indicator"></span>
                                  </label>
                                </div>
                              </td>
                             <td><a href="DetailOrder.co?idcmd=${cmd.getId_cmd()}" class="btn btn-warning">Detail</a></td>
                          </tr>
                            </c:forEach>
                        </tbody>
                      </table>
                             <div class="container-contact100-form-btn">
                          
                            </div>
                      </form>              
                </div>
                  <script src="js/jquery-3.3.1.min.js"></script>
                  <script src="js/popper.min.js"></script>
                  <script src="js/bootstrap.min.js"></script>
                  <script src="js/main.js"></script>
                </div> 
                    <!-- Content Row -->
                   
    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal-->
                     <%@include file="LogoutModel.jsp" %>                   
    <!-- Bootstrap core JavaScript-->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for all pages-->
    <script src="js/sb-admin-2.min.js"></script>

    <!-- Page level plugins -->
    <script src="vendor/chart.js/Chart.min.js"></script>

    <!-- Page level custom scripts -->
    <script src="js/demo/chart-area-demo.js"></script>
    <script src="js/demo/chart-pie-demo.js"></script>
    <script src="/js/calendar.js"></script>

</body>

</html>