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
<!--===============================================================================================-->
<link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/Linearicons-Free-v1.0.0/icon-font.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="css/util.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
<!--===============================================================================================-->

</head>

<body id="page-top">

    <!-- Page Wrapper -->
    <div id="wrapper">
                          <%@include file="Menu.jsp" %>
        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                          <%@include file="Header.jsp" %>
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid">
                    <div>
                        <form class="contact100-form validate-form" method="" action="">
                            <span class="contact100-form-title m-0">
                                 Pharmacy Details
                            </span>
                             <label class="label-input100">Pharmacy ID</label>
                            <div class="wrap-input100 validate-input">
                                <input readonly="readonly" id="pharmacyID" class="input100" type="text" name="pharmacyID" placeholder="Pharmacy id" value="${Ph.pharmacyID}">
                                <span class="focus-input100"></span>
                            </div>
                            <label class="label-input100" for="first-name">Pharmacy</label>
                            <div class="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Type first name">
                                <input readonly="readonly" id="name" class="input100" type="text" name="name" placeholder="Pharmacy Name" value="${Ph.name}">
                                <span class="focus-input100"></span>
                            </div>
                            <div class="wrap-input100 rs2-wrap-input100 validate-input" data-validate="Type last name">
                                <input readonly="readonly" id="responsible" class="input100" type="text" name="responsible" placeholder="Responsible Name" value="${Ph.responsible}">
                                <span class="focus-input100"></span>
                            </div>
                            <label class="label-input100" for="first-name">Position</label>
                            <div class="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Type first name">
                                <input readonly="readonly" id="lat" class="input100" type="text" name="lat" placeholder="latitude" value="${Ph.lat}">
                                <span class="focus-input100"></span>
                            </div>
                            <div class="wrap-input100 rs2-wrap-input100 validate-input" data-validate="Type last name">
                                <input readonly="readonly" id="lng" class="input100" type="text" name="lng" placeholder="longitude" value="${Ph.lng}">
                                <span class="focus-input100"></span>
                            </div>
                             <label class="label-input100" for="first-name">Pharmacy Account</label>
                             <div class="wrap-input100 rs1-wrap-input100 validate-input" data-validate="email">
                                <input readonly id="email" class="input100" type="email" name="email" placeholder="email" value="${Ph.email}">
                                <span class="focus-input100"></span>
                            </div>
                            <div class="wrap-input100 rs2-wrap-input100 validate-input" data-validate="Type last name">
                                <input readonly id="password" class="input100" type="password" name="password" placeholder="password" value="${Ph.password}">
                                <span class="focus-input100"></span>
                            </div>
            
                            <label class="label-input100" for="phone">Phone Number</label>
                            <div class="wrap-input100">
                                <input readonly="readonly" id="phone" class="input100" type="text" name="phone" placeholder="Pharmacy Phone" value="${Ph.phone}">
                                <span class="focus-input100"></span>
                            </div>
                            <label class="label-input100" for="phone">Address</label>
                            <div class="wrap-input100">
                                <input readonly="readonly" id="address" class="input100" type="text" name="address" placeholder="Pharmacy Address" value="${Ph.address}">
                                <span class="focus-input100"></span>
                            </div>
            
                            <label class="label-input100" for="message">Picture </label>
                            <div class="wrap-input100 validate-input" data-validate = "Message is required">
                                <input readonly="readonly" id="picture" class="input100" type="text" name="picture" placeholder="Pharmacy Address" value="${Ph.picture}">
                                <span class="focus-input100"></span>
                            </div>
                            <div class="container-contact100-form-btn">
                            </div>
                        </form>
                    </div>
                    </div>
            
                    <!-- Content Row -->
         </div>
         </div>          
         </div>
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
<!--===============================================================================================-->
<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/animsition/js/animsition.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/select2/select2.min.js"></script>
	<script>
		$(".selection-2").select2({
			minimumResultsForSearch: 20,
			dropdownParent: $('#dropDownSelect1')
		});
	</script>
<!--===============================================================================================-->
	<script src="vendor/daterangepicker/moment.min.js"></script>
	<script src="vendor/daterangepicker/daterangepicker.js"></script>
<!--===============================================================================================-->
	<script src="vendor/countdowntime/countdowntime.js"></script>
<!--===============================================================================================-->
	<script src="js/main.js"></script>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'UA-23581568-13');
	</script>
</body>

</html>