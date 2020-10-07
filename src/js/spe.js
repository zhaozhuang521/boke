$(document).ready(function() {
    let title = new URLSearchParams(location.search).get("title")
    let type = new URLSearchParams(location.search).get("type")
    let aid = new URLSearchParams(location.search).get("id")
        //请求文章
    $.get(`http://localhost:3000/${type}`, { title }, function(res) {
            console.log(res);
            let resobj = res[0]
            console.log(resobj);
            $("#article-title").html(resobj.title)
            $("#article-author").html(resobj.author)
            $("#article-content").html(resobj.content)
            $("#article-time").html(resobj.time)

        })
        //请求评论
    $.get(`http://localhost:3000/comment`, { type, aid }, function(res) {
        console.log(res);
        if (res.length == 0) {
            $("#article-comment").html("暂无评论")
            return
        }
        let html = ''
        $.each(res, function(i, v) {
            html += `
            <li>
        ${v.content}
        <a href="#" class="del" a-id="${v.id}">删除</a>
            </li>
`
        })
        $("#article-comment").html(html)
        delComment()
    })

    function delComment() {
        $(".del").click(function() {
            let id = $(this).attr("a-id")
            $.ajax({
                type: "DELETE",
                url: ` http://localhost:3000/comment/${id}`,
                success: function(res) {
                    console.log(res);
                    $(this).parent().remove()
                },
                error: function(error) { console.error(); }
            })
        })
    }


})