$(document).ready(function() {
    $.get(`http://localhost:3000/news`, {}, function(data) {
        console.log(data);
        let html = ''
        $.each(data, function(i, v) {
            html += `
            <li>
            <a href="spe.html?type=${v.type}&&title=${v.title}&&id=${v.id}">  ${i+1}、${v.title}</a>
             <a class="del" article-id="${v.id}" article-type=${v.type}>删除</a>
             <a id="update" article-id="${v.id}" href="update.html?type=${v.type}&&id=${v.id}">修改</a>
            </li>
            `
        })
        $('#article-news').html(html)
        del()
    })



    $('#nav-top>li').click(function() {
        $('#nav-top>li').each(function(i) {
            $(this).removeClass("active")
        })
        $(this).addClass("active")
    });
    //点击体育按钮
    $('#sports').click(function() {
            $.get(`http://localhost:3000/sports`, {}, function(data) {
                console.log(data);
                let html = ''
                $.each(data, function(i, v) {
                    html += `
            <li>
            <a href="spe.html?type=${v.type}&&title=${v.title}&&id=${v.id}"> ${i+1}、${v.title}</a>
            <a class="del" article-id="${v.id}" article-type=${v.type}>删除</a>
             <a id="update" article-id="${v.id}" href="update.html?type=${v.type}&&id=${v.id}">修改</a>
            </li>
            `
                })
                $('#article-news').html(html)
                del()
            })
        })
        //点击新闻按钮
    $('#news').click(function() {
        $.get(`http://localhost:3000/news`, {}, function(data) {
            console.log(data);
            let html = ''
            $.each(data, function(i, v) {
                html += `
            <li>
            <a href="spe.html?type=${v.type}&&title=${v.title}&&id=${v.id}"> ${i+1}、${v.title}</a>
            <a class="del" article-id="${v.id}" article-type=${v.type}>删除</a>
             <a id="update" article-id="${v.id}" href="update.html?type=${v.type}&&id=${v.id}">修改</a>
            </li>
            `
            })
            $('#article-news').html(html)
            del()
        })
    })

    //新闻的删除功能
    function del() {
        $('#article-news .del').click(function() {
            console.log("‘点击了删除按钮");
            let id = $(this).attr("article-id")
            let type = $(this).attr("article-type")
            console.log(id);
            let that = this
            $.ajax({
                type: "DELETE",
                url: ` http://localhost:3000/${type}/${id}`,
                success: function(res) {
                    console.log(res);
                    $(that).parent().remove()
                },
                error: function(error) { console.error(); }
            })
        })
    }
    //

})