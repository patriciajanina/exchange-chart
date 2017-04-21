$(function () {
    $('.wybor').on('click', function () {

//zmienne
        var select1 = $('#ex').val();
        var select2 = $('#ex2').val();

        $.ajax({
            url: 'http://api.fixer.io/latest?base=' + select1,
            type: 'GET',
            dataType: 'JSON',
            success: function (cos) {
//if select1 exist and is not equal select2 give me a today's exchanging rate and and multiply by number put up.
                if (select1 && select1 !== select2) {
                    $('.one').text(cos.rates[select2])
                    $('.wynik').text($('.liczba').val() * (cos.rates[select2]));
                }
                else {
                    $('.one').text('1');
                    $('.wynik').text('1');
                }

            }
        })
        //Loop has been done in order to avoid a repetition code
        //var j=-1 helps me to go into success function , code doesn't work without var j.
        var j = -1;
        for (var i = 0; i <= 7; i++) {

//a loop is getting in a days ,then goes to ajax url - getting data for every each day
            var day = (moment().subtract(i, 'days').format('YYYY-MM-DD'))

            //******************************************************DAY0
            $.ajax({
                url: 'http://api.fixer.io/' + day + '?base=' + select1,
                type: 'GET',
                dataType: 'JSON',
                success: function (rata) {
                    j++
                    var day = (moment().subtract(j, 'days').format('YYYY-MM-DD'))

                    var days = '.day' + j;
                    var klasy = '.g' + j;
                    var klasa = 'g' + j;

//round to third digit after the decimal point
                    var rateToFloor = (rata.rates[select2])
                    var floorRate = rateToFloor.toFixed(3)
//changing the height of columns to avoid a value difference / a height is depend of value.
                    if (rata.rates[select2] < 5) {
                        var styles = {
                            height: rata.rates[select2] * 10 + '%',
                            background: '#e1f7a1'
                        }
                        if ($(klasy)) {
                            $(klasy).remove()
                            $(days).append("<p class=" + klasa + ">" + day + ' ' + '<strong class="textValue">' + floorRate + "</p>");
                            $('.smallBox').css(styles)
                        }
                        else {
                            $(days).append("<p class=" + klasa + ">" + day + ' ' + '<strong class="textValue">' + floorRate + "</p>");
                            $('.smallBox').css(styles)
                        }
                    }
                    else if (rata.rates[select2] > 6 && rata.rates[select2] < 10) {
                        var styles = {
                            height: rata.rates[select2] * 5 + '%',
                            background: '#d2ebf5'
                        }
                        if ($(klasy)) {
                            $(klasy).remove()
                            $(days).append("<p class=" + klasa + ">" + day + ' ' + '<strong class="textValue">' + floorRate + "</p>");
                            $('.smallBox').css(styles)
                        }
                        else {
                            $(days).append("<p class=" + klasa + ">" + day + ' ' + '<strong class="textValue">' + floorRate + "</p>");
                            $('.smallBox').css(styles)
                        }

                    }
                    else if (rata.rates[select2] > 11 && rata.rates[select2] < 100) {
                        var styles = {
                            height: rata.rates[select2] * 1 + '%',
                            background: '#fcf49a'
                        }

                        if ($(klasy)) {
                            $(klasy).remove()
                            $(days).append("<p class=" + klasa + ">" + day + ' ' + '<strong class="textValue">' + floorRate + "</p>");
                            $('.smallBox').css(styles)
                        }
                        else {
                            $(days).append("<p class=" + klasa + ">" + day + ' ' + '<strong class="textValue">' + floorRate + "</p>");
                            $('.smallBox').css(styles)
                        }

                    }
                    else if (rata.rates[select2] > 81 && rata.rates[select2] < 120) {
                        var styles = {
                            height: rata.rates[select2] * 0.5 + '%',
                            background: 'pink'
                        }
                        if ($(klasy)) {
                            $(klasy).remove()
                            $(days).append("<p class=" + klasa + ">" + day + ' ' + '<strong class="textValue">' + floorRate + "</p>");
                            $('.smallBox').css(styles)
                        }
                        else {
                            $(days).append("<p class=" + klasa + ">" + day + ' ' + '<strong class="textValue">' + floorRate + "</p>");
                            $('.smallBox').css(styles)
                        }

                    }
                    else if (rata.rates[select2] > 121 && rata.rates[select2] < 500) {
                        var styles = {
                            height: rata.rates[select2] * 0.2 + '%',
                            background: '#e1aef5'
                        }
                        if ($(klasy)) {
                            $(klasy).remove()
                            $(days).append("<p class=" + klasa + ">" + day + ' ' + '<strong class="textValue">' + floorRate + "</p>");
                            $('.smallBox').css(styles)
                        }
                        else {
                            $(days).append("<p class=" + klasa + ">" + day + ' ' + '<strong class="textValue">' + floorRate + "</p>");
                            $('.smallBox').css(styles)
                        }

                    }
                    else if (rata.rates[select2] > 501 && rata.rates[select2] < 1300) {
                        var styles = {
                            height: rata.rates[select2] * 0.02 + '%',
                            background: '#f5a856'
                        }

                        if ($(klasy)) {
                            $(klasy).remove()
                            $(days).append("<p class=" + klasa + ">" + day + ' ' + '<strong class="textValue">' + floorRate + "</p>");
                            $('.smallBox').css(styles)
                        }
                        else {
                            $(days).append("<p class=" + klasa + ">" + day + ' ' + '<strong class="textValue">' + floorRate + "</p>");
                            $('.smallBox').css(styles)
                        }

                    }
                    else {
                        var styles = {
                            height: rata.rates[select2] * 0.005 + '%',
                            background: '#ff6257'
                        }
                        if ($(klasy)) {
                            $(klasy).remove()
                            $(days).append("<p class=" + klasa + ">" + day + ' ' + '<strong class="textValue">' + floorRate + "</p>");
                            $('.smallBox').css(styles)
                        }
                        else {
                            $(days).append("<p class=" + klasa + ">" + day + ' ' + '<strong class="textValue">' + floorRate + "</p>");
                            $('.smallBox').css(styles)
                        }

                    }
                }

            })
        }


// ***************************************************************next chart/canvas.js

        function getRates(gfgf) {
//the code is based on canvas.js , has been modified to up data days by ajax
//to make code works and avoid a repetition I had to close all in one function , then return a value and new tab , updata a last 12 months
            $.ajax({
                url: 'http://api.fixer.io/' + gfgf + '?base=' + $('#ex').val(),
                type: 'GET',
                async: false,
                dataType: 'JSON',
                success: function (rata) {
                    x = rata.rates[$('#ex2').val()]
                }


            })
            return x
        }

        function printRates() {
            var tab = [];
            for (var i = 0; i < 12; i++) {
                tab.push({
                    x: new Date(moment().subtract(i, 'months').format('YYYY-MM-DD')),
                    y: getRates((moment().subtract(i, 'months').format('YYYY-MM-DD')))
                })
            }
            return tab;

        }


        var chart = new CanvasJS.Chart("chartContainer",
            {
                theme: "NOTHING",
                title: {
                    text: "MONTLY CHECKING"
                },
                animationEnabled: true,
                axisX: {
                    valueFormatString: "MMM",
                    interval: 1,
                    intervalType: "month"

                },
                axisY: {
                    includeZero: false

                },
                data: [

                    {
                        type: "line",
                        //lineThickness: 3,
                        dataPoints: printRates()
                    }
                ]
            });

        chart.render();

    })
    //mortgage advisor advert
    $('.formWrap').delay(4000).fadeIn(400)
//inputs label on click display on
    $('.formLabel').on('click', function () {
        $(this).prev().css('visibility', 'visible')
    })
//close a advert
    $('.noThanks').on('click', function () {
        $('.formWrap').fadeOut(0)
    })
    //business news -ajax-updating the newest BBC & BUSINESS INSIDER news
    // 83a1e31dab93479e94c7aa1a992df14e
    $.ajax({
        url: 'https://newsapi.org/v1/articles?source=business-insider&sortBy=top&apiKey=83a1e31dab93479e94c7aa1a992df14e',
        type: 'GET',
        dataType: 'JSON',
        success: function (news) {
            for (var i = 0; i < 4; i++) {
                $('.topNews').append('<div class="topNewsChild"><div class="topNewsTitle">' + news.articles[i].title + '<div class="topNewsDes">' + news.articles[i].description + '<a href=' + news.articles[i].url + '><img class="topNewsPic" src=' + news.articles[i].urlToImage + '></a></div></div></div>');

            }

        }

    })
    $.ajax({
        url: 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=83a1e31dab93479e94c7aa1a992df14e',
        type: 'GET',
        dataType: 'JSON',
        success: function (news2) {

            for (var i = 0; i < 9; i++) {
                $('.sideNews').append('<div class="sideNewsChild"><div class="sideNewsTitle">' + news2.articles[i].title + '<div class="sideNewsDes">' + news2.articles[i].description + '<a href=' + news2.articles[i].url + '><img class="sideNewsPic" src=' + news2.articles[i].urlToImage + '></a></div></div></div>');

            }

        }
    })

    $.ajax({
        url: 'https://newsapi.org/v1/articles?source=business-insider&sortBy=top&apiKey=83a1e31dab93479e94c7aa1a992df14e',
        type: 'GET',
        dataType: 'JSON',
        success: function (news3) {
            for (var i = 4; i < 10; i++) {
                $('.middleNews').append('<div class="topNewsChild3"><div class="topNewsTitle3">' + news3.articles[i].title + '<div class="topNewsDes3">' + news3.articles[i].description + '<a href=' + news3.articles[i].url + '><img class="topNewsPic3" src=' + news3.articles[i].urlToImage + '></a></div></div></div>');

            }

        }

    })
    //header buttons
    $('.headerNews').on('click', function () {
        $('.newsWrap').fadeIn(0, function () {
            console.log('say')
        })
    })

    $('.headerExchanged').on('click', function () {
        $('.newsWrap').fadeOut(0, function () {
        })
    })
})



