<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link href="libs/bootstrap-3.3.2/css/bootstrap.min.css" rel="stylesheet" media="screen">
    <link rel="stylesheet" type="text/css" href="styles/base.css">
    <link rel="stylesheet" type="text/css" href="styles/description.css">
    <title>Французский республиканский календарь - Описание</title>
</head>

<body>
    <div class="main">
        <header>
            <div class="container header-container">
                <h2>Французский республиканский календарь online</h2>
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-6">
                        <h4>Сегодня:</h4>
                        <p id="index--rev-calendar"></p>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-6">
                        <h4>Григорианский календарь:</h4>
                        <p id="index--common-calendar"></p>
                    </div>
                </div>
                <div class="row header--menu">
                    <div role="group" aria-label="..." class="btn-group"><a href="/index.php" class="btn btn-sm btn-danger">Календарь</a><a href="/description.php" class="btn btn-sm btn-danger">Описание</a><a href="/guest.html" class="btn btn-sm btn-danger">Гостевая книга</a></div>
                </div>
            </div>
        </header>
        <div class="container main-column">
            <div class="pusher-header"></div>
            <div class="description">
                <?php require 'php/description.php'; ?>
            </div>
        </div>
    </div>
    <footer class="footer">
        <div class="container">Проект на <a href="https://github.com/tov-kaschey/French-Republican-Calendar">gitHub</a>
            <br>Адрес разработчика <a href="">e-mail</a></div>
    </footer>
    <script type="text/javascript" src="libs/jquery-2.1.3.min.js"></script>
    <script src="libs/bootstrap-3.3.2/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/calendar_data.js"></script>
    <script type="text/javascript" src="js/calendar.js"></script>
    <script type="text/javascript" src="js/base.js"></script>
    <!-- - script(type="text/javascript" src="js/description.js")-->
</body>

</html>
