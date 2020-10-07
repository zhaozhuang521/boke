$(document).ready(function() {
    let type = new URLSearchParams(location.search).get("type")
    let id = new URLSearchParams(location.search).get("id")
        //加载文章的详情
    $.get(`http://localhost:3000/${type}/${ id }`, function(res) {
        console.log(res);
        $("#title").val(res.title)
        $("#author").val(res.author)
        $("#content").val(res.content)
        $("#time").val(res.time)
        $("#type").val(res.type)
        update()
    })

    function update() {
        $('.btn').click(function() {
            console.log("dianjileanniu");
            let title = $("#title").val()
            let author = $("#author").val()
            let content = $("#content").val()
            let time = $("#time").val()
            let = $.ajax({
                url: `http://localhost:3000/${type}/${id}`,
                type: "PATCH",
                data: { title, author, content, time },
                success(res) {
                    console.log(res);
                },
                error(error) {
                    console.log(error);
                }
            })
        })
    }

})