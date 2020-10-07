$(document).ready(function() {
    $('.btn').click(function() {
        let title = $('#title').val()
        let author = $('#author').val()
        let type = $('#type').val()
        let content = $('#content').val()
        let time1 = new Date()
        let d = time1.getDate()
        let y = time1.getFullYear()
        let mon = time1.getMonth() + 1
        let h = time1.getHours()
        let m = time1.getMinutes()
        let s = time1.getSeconds()
        let time = y + '/' + mon + '/' + d + '  ' + h + ':' + m + ':' + s
        console.log(time);
        $.post(` http://localhost:3000/${type}`, { title, author, type, content, time }, function(res) {
            console.log(res);
        })
    })


})