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
                        <c:if test="${not empty Message}">
                               <div class="alert alert-success" role="alert">${Message}</div>
                         </c:if>
                        <form class="contact100-form validate-form" method="post" action="AddMedications.co">
                            <span class="contact100-form-title">
                                Add Medication
                            </span>
            
                            <label class="label-input100" for="phone">Name</label>
                            <div class="wrap-input100">
                                <input id="name" class="input100" type="text" name="name" placeholder="Medication name">
                                <span class="focus-input100"></span>
                            </div>
                             <label class="label-input100" for="phone">Price</label>
                            <div class="wrap-input100">
                                <input id="price" class="input100" type="text" name="price" placeholder="Medication price">
                                <span class="focus-input100"></span>
                            </div>
                             <label class="label-input100" for="phone">Description</label>
                            <div class="wrap-input100">
                                <input id="description" class="input100" type="text" name="description" placeholder="Description">
                                <span class="focus-input100"></span>
                            </div>
                             <label class="label-input100" for="phone">Categories</label>
                            <div class="wrap-input100">
                                <select id="categorie" style="height:55px ; border:none" class="input100" type="text" name="categorie" placeholder="Categories">
                                <option value="Rhume">Rhume </option>
                                <option value="maux de bouche" >maux de bouche</option>
                                <option value="Premiers soins">Premiers soins</option>
                                <option value="troubles intestinaux">troubles intestinaux</option>
                                <option value="Inflammation des muscles ">Inflammation des muscles</option>
                                <option value="vomissements">vomissements</option>
                                <option value="infections">infections</option>
                                <option value="Anti-tabac">Anti-tabacr</option>
                                <option value="Mal de gorge">Mal de gorge</option>
                                <option value="auriculaires">auriculaires</option>
                                </select>
                                <span class="focus-input100"></span>
                            </div>
                            <label class="label-input100" for="message">Picture </label>
                            <div class="wrap-input100 validate-input" data-validate = "Message is required">
                                <input id="picture" class="input100" type="file" name="picture" placeholder="Medication picture">
                                <span class="focus-input100"></span>
                            </div>
            
                            <div class="container-contact100-form-btn">
                                <button class="contact100-form-btn" type="submit">
                                    Save Medication
                                </button>
                            </div>
                        </form>
                    </div>
                    </div>
                    <!-- Content Row -->
                     <%@include file="LogoutModel.jsp" %>                   
    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

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