;(function () {
	document.onreadystatechange = function () {
		// uninitialized（未初始化）：对象存在但尚未初始化。
		// loading（正在加载）：对象正在加载数据。
		// loaded（加载完毕）：对象加载数据完成。
		// interactive（交互）：可以操作对象了，但还没有完全加载。
		// complete（完成）：对象已经加载完毕。
		// 此处只经过了一次判断即complete 阶段 相当于 onload 事件
		if (document.readyState === 'complete') {
			// var depth = true;
			var depth = false

			var location = window.location.pathname
			var mirror_url1 = 'https://github.wuyanzheshui.workers.dev'
			var mirror_url2 = 'https://hub.fastgit.org'
			var str1 = ''

			str1 += 'git clone '
			if (depth) {
				str1 += '--depth=1 '
			}
			var str2 = location + '.git'
			var clone_utl1 = str1 + mirror_url1 + str2
			var clone_utl2 = str1 + mirror_url2 + str2

			var info =
				'<div class="user-ment"><div class="collapse multi-collapse" id="collapse"><div class="user-card user-card-body"><div class="flash mb-4"><a class="btn ml-2 d-none d-md-block btn-primary flash-action copy_me">复制</a><p type="text" class="user-form-control"  readonly aria-describedby="inputGroup-sizing-default" >' +
				clone_utl1 +
				'</p><br/><a class="btn ml-2 d-none d-md-block btn-primary flash-action copy_me">复制</a><p  type="text" class="user-form-control"  readonly aria-describedby="inputGroup-sizing-default" >' +
				clone_utl2 +
				'</p></div></div></div></div>'

			// 创建 div 标签，来进行复制
			let dom = document.createElement('div')
			dom.innerHTML = info
			document
				.getElementsByClassName('Box')[1]
				.insertBefore(
					dom,
					document.getElementsByClassName('Box-header')[0]
				)

			// 对 copy_me 按钮，绑定 click 事件
			document.querySelectorAll('.copy_me').forEach((element) => {
				element.addEventListener('click', function () {
					let value = element.nextSibling.innerText
					let input_dom = document.createElement('input')
					input_dom.setAttribute('value', value)
					input_dom.setAttribute('type', 'text')
					input_dom.hidden = true
					window.document
						.getElementsByTagName('body')[0]
						.appendChild(input_dom)
					// select方法必须要渲染在网页中
					input_dom.select()
					document.execCommand('copy')
					input_dom.remove()
				})
			})
		}
	}
})()
