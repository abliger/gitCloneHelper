(function(){
    var depth = true;
    // var depth = false;

    var location = window.location.href;
    var mirror_url1 = "https://" + "github.com.cnpmjs.org";
    var mirror_url2 = "https://" + "hub.fastgit.org";
    var mirror_url3 = "https://" + "github.wuyanzheshui.workers.dev";
    var download_url1 = "https://download.fastgit.org";
    var str1 = "";

    str1 += "git clone ";
    if (depth) {
        str1 += "--depth=1 ";
    }
    var a = location.split("/");
    var b = a[5] === "wiki" ? ".wiki" : "";
    var str2 = "/" + a[3] + "/" + a[4] + b + ".git";
    var clone_utl1 = str1 + mirror_url1 + str2;
    var clone_utl2 = str1 + mirror_url2 + str2;
    var str3 = window.location.pathname;
    var web_url1 = mirror_url1 + str3;
    var web_url2 = mirror_url2 + str3;
    var web_url3 = mirror_url3 + str3;
    var info = `
    <div class="user-ment">
    <div class="collapse multi-collapse" id="collapse">
        <div class="user-card user-card-body">
            <div class="flash mb-4">
                <a class="btn ml-2 d-none d-md-block btn-primary flash-action copy_me">复制</a>
                <p  type="text" class="user-form-control"  readonly aria-describedby="inputGroup-sizing-default" >${clone_utl1}</p>
                <br/>
                <a class="btn ml-2 d-none d-md-block btn-primary flash-action copy_me">复制</a>
                <p  type="text" class="user-form-control"  readonly aria-describedby="inputGroup-sizing-default" >${clone_utl2}</p>
            </div>
        </div>
    </div>
</div>`;

    $(".file-navigation").before(info);
    $(".copy_me").click(function (){
        $(".hendend").remove()
        str=$(this).next().text();
        console.log(str);
        $(this).after('<input class="hendend"  value="'+str+'"/>')
        $(this).next("input.hendend:first").select()
        document.execCommand("Copy");
        $(".hendend").prop("hidden","hidden");
    });
})();